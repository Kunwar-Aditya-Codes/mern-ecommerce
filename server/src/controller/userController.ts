import User from '../model/User';
import Order from '../model/Order';
import { Request, Response } from 'express';

// @desc     Get user profile
// @route    GET /api/user/profile
// @access   Private
export const getUserProfile = async (req: Request, res: Response) => {
  const user = await User.findById(req.userId)
    .select('-password')
    .populate('orders', 'orderItems')
    .lean()
    .exec();

  if (!user) {
    return res.status(404).json({ error: 'User not found.' });
  }

  res.status(200).json({ user });
};

// ! Update later with stripe payment gateway integration
//@desc     Create a new order
//@route    POST /api/user/order
//@access   Private
export const createOrder = async (req: Request, res: Response) => {
  const { userId, orderItems, shippingAddress } = req.body;

  if (!orderItems || !shippingAddress) {
    return res.status(400).json({ error: 'Please fill all the fields.' });
  }

  const newOrder = await Order.create({
    user: userId || req.userId,
    orderItems,
    shippingAddress,
  });

  await User.findByIdAndUpdate(
    req.userId,
    {
      $push: {
        orders: newOrder._id,
      },
    },
    {
      new: true,
    }
  );

  res.status(201).json({ message: 'Order created successfully.', newOrder });
};

//@desc     Order history
//@route    GET /api/user/order-history
//@access   Private
export const orderHistory = async (req: Request, res: Response) => {
  const orders = await Order.find({ user: req.userId }).lean().exec();
  res.status(200).json({ orders });
};
