"use server";

import { redirect } from "next/navigation";
import { connectToDB } from "./db";
import { User, Product } from "./models";
import bcrypt from "bcrypt";

export const addUser = async (formdata) => {
  try {
    connectToDB();
    const { name, email, password, phone, isAdmin, isActive, address } =
      Object.fromEntries(formdata);
    console.log(name, email, password, phone, isAdmin, isActive, address);
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username: name,
      email,
      password: hashedPassword,
      isAdmin,
      isActive,
      phone,
      address,
    });
    await newUser.save();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to add user!", error);
  }
  redirect("/dashboard/users");
};
export const addProduct = async (formdata) => {
  try {
    connectToDB();
    const { title, price, color, stock, size, description } =
      Object.fromEntries(formdata);
    const newProduct = new Product({
      title,
      price,
      color,
      size,
      desc: description,
      stock,
    });
    await newProduct.save();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to add product!", error);
  }
  redirect("/dashboard/products");
};

export const deleteUser = async (id) => {
  try {
    connectToDB();
    await User.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete user!", error);
  }
  redirect("/dashooard/users");
};

export const deleteProduct = async (id) => {
  try {
    connectToDB();
    await Product.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete Product!", error);
  }
  redirect("/dashooard/products");
};
