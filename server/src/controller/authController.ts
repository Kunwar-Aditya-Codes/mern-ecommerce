import { Request, Response } from "express";
import User from "../model/User";
import bcrypt from "bcrypt";
import jwt, { JwtPayload } from "jsonwebtoken";

export const register = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: "Please fill all the fields." });
  }

  const foundUser = await User.findOne({ email }).lean().exec();

  if (foundUser) {
    return res.status(400).json({ error: "User already exists." });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await User.create({
    username,
    email,
    password: hashedPassword,
  });

  return res.status(201).json({ message: "User created successfully." });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Please fill all the fields." });
  }

  const foundUser = await User.findOne({ email }).lean().exec();

  if (!foundUser) {
    return res.status(400).json({ error: "Invalid credentials." });
  }

  const isPasswordValid = await bcrypt.compare(password, foundUser.password);

  if (!isPasswordValid) {
    return res.status(400).json({ error: "Invalid credentials." });
  }

  const accessToken = jwt.sign(
    { userId: foundUser._id, isAdmin: foundUser.isAdmin },
    process.env.ACCESS_TOKEN,
    { expiresIn: "15m" }
  );

  const refreshToken = jwt.sign(
    { userId: foundUser._id, isAdmin: foundUser.isAdmin },
    process.env.REFRESH_TOKEN,
    { expiresIn: "7d" }
  );

  res.cookie("refreshToken", refreshToken, {
    // httpOnly: true,
    // path: "/api/auth/refresh",
    // sameSite: "none",
    // secure: true,
  });

  return res.status(200).json({ accessToken });
};

export const logout = async (req: Request, res: Response) => {
  const { refreshToken } = req.cookies;

  if (!refreshToken) {
    return res.sendStatus(203);
  }

  res.clearCookie("refreshToken");

  return res.status(200).json({ message: "Logged out successfully." });
};

export const refresh = async (req: Request, res: Response) => {
  const { refreshToken } = req.cookies;

  if (!refreshToken) {
    return res.status(401).json({ error: "Unauthorized (No token found!)" });
  }

  const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN);

  if (!decoded) {
    return res.status(401).json({ error: "Unauthorized (Invalid token!)" });
  }

  const foundUser = await User.findById((decoded as JwtPayload).userId)
    .lean()
    .exec();

  if (!foundUser) {
    return res.status(401).json({ error: "Unauthorized (Invalid token!)" });
  }

  const accessToken = jwt.sign(
    { userId: foundUser._id, isAdmin: foundUser.isAdmin },
    process.env.ACCESS_TOKEN,
    { expiresIn: "15m" }
  );

  return res.status(200).json({ accessToken });
};
