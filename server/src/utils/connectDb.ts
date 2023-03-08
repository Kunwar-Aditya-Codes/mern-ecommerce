import mongoose from 'mongoose';

const connectDb = async () => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(process.env.MONGO_URI as string);
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;
