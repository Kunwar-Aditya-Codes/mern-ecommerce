import { Request } from 'express';

interface CustomRequest {
  userId?: string;
  isAdmin?: boolean;
}

declare global {
  namespace Express {
    interface Request extends CustomRequest {}
  }
}
