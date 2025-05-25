import jwt from 'jsonwebtoken'
import userModel from '../model/user.model.js'
export const verifyToken = async (token)=>{
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.id;
        const user = await userModel.findById(userId)
        return user
    } catch (error) {
      throw error
    }
}

