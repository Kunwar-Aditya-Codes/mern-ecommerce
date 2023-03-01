import express, { Request, Response, NextFunction } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "../controller/adminController";

const router = express.Router();

router.use((req: Request, res: Response, next: NextFunction) => {
  console.log("Admin route");
  next();
});

router
  .route("/product")
  .post(createProduct)
  .get(getAllProducts)
  .put(updateProduct)
  .delete(deleteProduct);

export default router;
