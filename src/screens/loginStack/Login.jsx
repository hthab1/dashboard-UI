import React, { useState } from "react";
import "./Login.css";
import Logo from "../../assets/Logo.svg";
import AuthInput from "../../components/auth/AuthInput";
import AuthButton from "../../components/auth/AuthButton";
import AuthError from "../../components/auth/AuthError";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../StateProvider";

function Login() {
  const navigate = useNavigate();
  const { state, dispatch } = useStateValue();
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <div className="loginFormContainer">
        <img src={Logo} alt="" className="loginLogo" />
        <span className="loginHeader">Login to your account</span>
        <span className="loginSubHeader">
          Enter to continue and explore within your grasp
        </span>
        <AuthError error={error} />
        <AuthInput
          placeholder="Enter email or phone"
          email
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <AuthInput
          placeholder="Password"
          password
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="loginRemember">
          <div className="rememberLeft">
            <div
              className="rememberCircle"
              onClick={() => setRemember(!remember)}
            >
              {remember && <div className="rememberSelected"></div>}
            </div>
            <span className="rememberText">Remember me</span>
          </div>
          <div className="rememberRight" onClick={()=>navigate("/forgot")} >Forgot password?</div>
        </div>
        <AuthButton
          name="Login to continue"
          onClick={() => {
            if (email && password) {
              dispatch({
                type: "SET_USER",
                user: "user",
              });
            } else {
              if (!password) {
                setError("Password Field can not be empty");
              }
              if (!email) {
                setError("Email field can not be empty");
              }
            }
          }}
        />
      </div>
    </div>
  );
}

export default Login;
