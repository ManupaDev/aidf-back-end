import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    if (!process.env.MONGODB_DATABASE) {
      return new Error();
    }
    await mongoose.connect(process.env.MONGODB_DATABASE);
    console.log("DB connections successful!");
  } catch (error) {
    console.log(error);
  }
};
