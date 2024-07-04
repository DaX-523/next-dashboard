"use server";

import { redirect } from "next/navigation";
import { connectToDB } from "./db";
import { User, Product } from "./models";
import bcrypt from "bcrypt";
import { signIn } from "auth";

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

export const deleteUser = async (formdata) => {
  try {
    const { id } = Object.fromEntries(formdata);
    connectToDB();
    await User.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete user!", error);
  }
  redirect("/dashboard/users");
};

export const deleteProduct = async (formdata) => {
  try {
    const { id } = Object.fromEntries(formdata);

    connectToDB();
    await Product.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete Product!", error);
  }
  redirect("/dashboard/products");
};

export const updateProduct = async (formdata) => {
  try {
    const { id, title, price, stock, color, size, description } =
      Object.fromEntries(formdata);

    connectToDB();
    const fieldsToUpdate = {
      title,
      price,
      stock,
      color,
      size,
      description,
    };
    Object.keys(fieldsToUpdate).forEach(
      (key) =>
        (fieldsToUpdate[key] === "" || undefined || null) &&
        delete fieldsToUpdate[key]
    );
    await Product.findByIdAndUpdate(id, fieldsToUpdate);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete Product!", error);
  }
  redirect("/dashboard/products");
};
export const updateUser = async (formdata) => {
  try {
    const { id, username, email, password, phone, address, isAdmin, isActive } =
      Object.fromEntries(formdata);

    connectToDB();
    const fieldsToUpdate = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    };
    Object.keys(fieldsToUpdate).forEach(
      (key) =>
        (fieldsToUpdate[key] === "" || undefined || null) &&
        delete fieldsToUpdate[key]
    );
    await User.findByIdAndUpdate(id, fieldsToUpdate);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete User!", error);
  }
  redirect("/dashboard/users");
};

export const authenticate = async (formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    if (err.message.includes("CredentialsSignin")) {
      return "Wrong Credentials";
    }
    throw err;
  }
};
