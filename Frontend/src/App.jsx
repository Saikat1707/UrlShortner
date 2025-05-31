import React from 'react'
import '../src/App.css'
import Card from './component/Card'
import NavBar from './component/NavBar'
import Login from './component/Login'
import Register from './component/Register'

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      
      <NavBar/>
      <Card/>
      <Login/>
      <Register/>
    </>
  )
}

export default App