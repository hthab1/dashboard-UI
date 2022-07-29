import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ForgetPassword from "../screens/loginStack/ForgetPassword";
import Login from "../screens/loginStack/Login";
import ResetPassword from "../screens/loginStack/ResetPassword";


function LoginStack() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<ForgetPassword />} />
        <Route path="/reset" element={<ResetPassword />} />
      </Routes>
    </Router>
  )
}

export default LoginStack