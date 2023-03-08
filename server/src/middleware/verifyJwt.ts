import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

const verifyJwt = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ error: 'No token provided.' });
  }

  const bearer = token.split(' ')[1];

  try {
    const decoded = jwt.verify(
      bearer,
      process.env.ACCESS_TOKEN as string
    ) as JwtPayload;

    if (!decoded) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    req.userId = decoded.userId;
    req.isAdmin = decoded.isAdmin;

    next();
  } catch (e) {
    console.log(e);
    return res.status(401).json({ error: 'Unauthorized' });
  }
};

export default verifyJwt;
