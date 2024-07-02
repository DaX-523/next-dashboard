import { connectToDB } from "./db";
import { Product, User } from "./models";

export const fetchUsers = async () => {
  try {
    connectToDB();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users!", error);
  }
};
export const fetchProducts = async () => {
  try {
    connectToDB();
    const products = await Product.find();
    return products;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch products!", error);
  }
};
