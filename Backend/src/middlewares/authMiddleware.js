import jwt from "jsonwebtoken";
import { verifyToken } from "../utils/verifyToken.js";

const isSessionActive = async (req, res, next) => {
  const {accessToken} = req.cookies;
  if(accessToken){
    const user = await verifyToken(accessToken)
    req.user = user
  }
  next()
};

export default isSessionActive;
