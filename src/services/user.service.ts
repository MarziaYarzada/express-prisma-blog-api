import prisma from "../config/db";
import { hashPassword, comparePassword } from "../utils/hash";

export const registerUser = async (
  name: string,
  email: string,
  password: string
) => {
  const existUser = await prisma.user.findUnique({ where: { email } });
  if (existUser) throw new Error("User with this email already exists");
  const hashed = await hashPassword(password);
  return await prisma.user.create({
    data: { name, email, password: hashed },
  });
};

export const loginUser = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (!user) throw new Error("User Not Found");
  const isValid = await comparePassword(password, user.password);
  if (!isValid) throw new Error("Invalid password");
  return user;
};
