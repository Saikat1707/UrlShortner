import userModel from '../model/user.model.js'
const register = async (userName , email , password)=>{
    try {
        const alreadyExist = await userModel.findOne({email:email})
        if(alreadyExist) return null;
        const entry = await userModel.create({userName,email,password})
        return entry
    } catch (error) {
        throw error
    }
}

const login = async (email,password)=>{
    try {
        const user = await userModel.findOne({email:email})
        return user
    } catch (error) {
        throw error
    }
}

export default {register,login}