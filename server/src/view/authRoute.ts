import express, { Request, Response, NextFunction } from "express";
import { register, login, logout, refresh } from "../controller/authController";

const router = express.Router();

router.use((req: Request, res: Response, next: NextFunction) => {
  console.log("Auth route");
  next();
});

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/refresh").get(refresh);

export default router;
