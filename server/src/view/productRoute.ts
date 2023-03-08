import express, { Request, Response, NextFunction } from 'express';
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from '../controller/productController';
import verifyJwt from '../middleware/verifyJwt';

const router = express.Router();

router.use((req: Request, res: Response, next: NextFunction) => {
  console.log('Admin route');
  next();
});

router.use(verifyJwt);

router.route('/protected').post(createProduct).delete(deleteProduct);

router.route('/').get(getAllProducts).put(updateProduct);

export default router;
