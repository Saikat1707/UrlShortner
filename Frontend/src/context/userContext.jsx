import { createContext, useContext, useState } from "react";
import axiosInstance from "../config/axiosConfig";
import toast from 'react-toastify'
const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [isLogin, setIsLogin] = useState(false)

  const fetchUser = async ()=>{
    await axiosInstance.get("api/auth/current")
    .then((res)=>{
        setUser(res.data.data)
        setIsLogin(true)
    })
    .catch((err)=>{
        console.log("error in fetching user : ",err)
        toast.error("error in fetching user")
    })
  }

  return (
    <UserContext.Provider value={{ user,fetchUser,isLogin,setIsLogin }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
