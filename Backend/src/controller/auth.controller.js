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
                data:"User already exist with this email"
            })
        }
        return res.status(200).json({
            success:true,
            data:entry
        })
    } catch (error) {
        return res.status(400).json({
            success:false,
            data:error
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
                data:"No User exist with this email"
            })
        }
        if(user.password != password){
            return res.status(400).json({
                success:false,
                data:"Invalid login credentials"
            })
        }
        const token = generateToken(user._id)
        res.cookie("accessToken",token)

        return res.status(200).json({
            success:true,
            data:user
        })
    } catch (error) {
        return res.status(400).json({
            success:false,
            data:error
        })
    }
}

const logoutUser = async (req,res)=>{
    try {
        res.clearCookie("accessToken")

        return res.status(200).json({
            success: true,
            data: "User logged out successfully"
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            data: error.message || "Logout failed"
        });
    }
}

const getCurrentUser = async (req,res)=>{
    if(req.user){
        return res.status(201).json({
            success:true,
            data:req.user
        })
    }else{
        return res.status(400).json({
            success:false,
            data:null
        })
    }
    
}
export default {createUser,loginUser,logoutUser,getCurrentUser}