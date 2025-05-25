import jwt from "jsonwebtoken"

const generateToken = (id)=>{
    try {
        const token = jwt.sign({id:id},process.env.JWT_SECRET,{expiresIn:"1h"})
        return token
    } catch (error) {
        throw error
    }
}
export default generateToken