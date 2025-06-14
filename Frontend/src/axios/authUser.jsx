import axiosInstance from "../config/axiosConfig"
import { useUserContext } from "../context/userContext";

export const createUser = async (userName,email,password)=>{
    await axiosInstance.post("api/auth/register",{userName,email,password})
    .then((res)=>{
        console.log(res.data.data)
    })
    .catch((error)=>{
        console.error("Registration Error:", error);
        throw error.response?.data?.data || "An error occurred";
    })
}

export const loginUser = async (email,password)=>{
    await axiosInstance.post("api/auth/login",{email,password})
    .then((res)=>{
        console.log(res.data.data)
    })
    .catch((error)=>{
        throw error.response?.data?.data || "An error occurred";
    })
}

export const logOutUser = async ()=>{
    await axiosInstance.post("/api/auth/logout")
    .then((res)=>{
        console.log(res.data.data)
    })
    .catch((error)=>{
        throw error.response?.data?.data || "Backend error"
    })
}
