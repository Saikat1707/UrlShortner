import jwt from "jsonwebtoken";
import { verifyToken } from "../utils/verifyToken.js";

const isSessionActive = async (req, res, next) => {
  const token = req.cookies.accessToken;
  if(token){
    const user = await verifyToken(token)
    req.user = user
  }
  next()
};

export default isSessionActive;
