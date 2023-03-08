import { Request, Response } from 'express';
import Product from '../model/Product';

//@desc     Create a new product
//@route    POST /api/product/protected
//@access   Private
export const createProduct = async (req: Request, res: Response) => {
  console.log(req.userId);

  const {
    productName,
    productPrice,
    productImage,
    productDescription,
    productCategory,
    productQuantity,
  } = req.body;

  if (
    !productName ||
    !productPrice ||
    !productImage ||
    !productDescription ||
    !productCategory ||
    !productQuantity
  ) {
    return res.status(400).json({ error: 'Please fill all the fields.' });
  }

  const foundProduct = await Product.findOne({ productName })
    .collation({
      locale: 'en',
      strength: 2,
    })
    .lean()
    .exec();

  if (foundProduct) {
    return res.status(400).json({ error: 'Product already exists.' });
  }

  const product = new Product({
    productName,
    productPrice,
    productImage,
    productDescription,
    productCategory,
    productQuantity,
  });

  await product.save();

  res.status(201).json({ message: 'Product created successfully.' });
};

//@desc     Get all products
//@route    GET /api/product
//@access   Public
export const getAllProducts = async (req: Request, res: Response) => {
  const products = await Product.find().lean().exec();

  res.status(200).json({ products });
};

//@desc     Update a product
//@route    PUT /api/product/protected
//@access   Private
export const updateProduct = async (req: Request, res: Response) => {
  const { productName, productPrice, productQuantity, productId } = req.body;

  if (!productId) {
    return res.status(400).json({ error: 'Please provide product id.' });
  }

  await Product.findByIdAndUpdate(
    productId,
    {
      productName,
      productPrice,
      productQuantity,
    },
    { new: true }
  )
    .lean()
    .exec();

  res.status(200).json({ message: 'Product updated successfully.' });
};

//@desc     Delete a product
//@route    DELETE /api/product/protected
//@access   Private
export const deleteProduct = async (req: Request, res: Response) => {
  const { productId } = req.body;

  if (!productId) {
    return res.status(400).json({ error: 'Please provide product id.' });
  }

  await Product.findByIdAndDelete(productId).lean().exec();

  res.status(200).json({ message: 'Product deleted successfully.' });
};
