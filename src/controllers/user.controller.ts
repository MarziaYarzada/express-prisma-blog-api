import { Request, response, Response } from "express";
import { loginUser, registerUser } from "../services/user.service";
import { generateToken } from "../utils/jwt.token";

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const user = await registerUser(name, email, password);
    res.status(201).json({
      message: "New user created successfully!",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await loginUser(email, password);
    const token = generateToken(user.id);
    res.status(200).json({ message: "Login successful", token });
  } catch (error: any) {
    res.status(401).json({ error: error.message });
  }
};
