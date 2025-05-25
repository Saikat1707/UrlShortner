import authDao from '../DAO/auth.js'
import generateToken from '../utils/generateToken.js'
const registerUser = async (userName,email,password)=>{
    try {
        const entry = await authDao.register(userName,email,password)
        return entry
    } catch (error) {
        throw error
    }
}

const loginUser = async (email,password)=>{
    try {
        const user = await authDao.login(email,password)
        return user
    } catch (error) {
        throw error
    }
}

export default {registerUser,loginUser}