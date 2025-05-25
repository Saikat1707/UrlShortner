import jwt from "jsonwebtoken";
import { verifyToken } from "./verifyToken.js";

export const attachUser = async (req, res, next) => {
  const token = req.cookies.accessToken;

  if (!token) {
    return res.status(401).json({ message: "No token found. Please login." });
  }
  const user = await verifyToken(token)
  req.user = user
  next()
};
