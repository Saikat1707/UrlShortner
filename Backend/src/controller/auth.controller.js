import authService from "../services/authService.js";
import getCookieOptions from "../utils/cookieOptions.js";
import generateToken from "../utils/generateToken.js";
const createUser = async(req,res)=>{
    try {
        const {userName , email , password } = req.body;

        const entry = await authService.registerUser(userName,email,password)
        if(!entry){
            return res.status(400).json({
                success:false,
                message:"User already exist with this email"
            })
        }
        return res.status(200).json({
            success:true,
            message:entry
        })
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:error
        })
    }
}
const loginUser = async (req,res)=>{
    try {
        const {email , password} = req.body
        const user = await authService.loginUser(email,password)
        if(!user){
            return res.status(400).json({
                success:false,
                message:"No User exist with this email"
            })
        }
        if(user.password != password){
            return res.status(400).json({
                success:false,
                message:"Invalid login credentials"
            })
        }
        const token = generateToken(user._id)
        res.cookie("accessToken",token,getCookieOptions)

        return res.status(200).json({
            success:true,
            message:user
        })
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:error
        })
    }
}

const logoutUser = async (req,res)=>{
    try {
        res.clearCookie("accessToken")

        return res.status(200).json({
            success: true,
            message: "User logged out successfully"
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message || "Logout failed"
        });
    }
}
export default {createUser,loginUser,logoutUser}