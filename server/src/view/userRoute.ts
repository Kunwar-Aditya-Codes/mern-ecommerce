import express, { Request, Response, NextFunction } from 'express';
import {
  createOrder,
  getUserProfile,
  orderHistory,
} from '../controller/userController';
import verifyJwt from '../middleware/verifyJwt';

const router = express.Router();

router.use((req: Request, res: Response, next: NextFunction) => {
  console.log('User route');
  next();
});

router.use(verifyJwt);

router.route('/profile').get(getUserProfile);
router.route('/order-history').get(orderHistory);
router.route('/order').post(createOrder);

export default router;
