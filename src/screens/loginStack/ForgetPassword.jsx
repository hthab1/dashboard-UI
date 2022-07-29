import React, { useState } from "react";
import "./ForgetPassword.css";
import Abstract from "../../assets/Abstract.svg";
import Logo from "../../assets/Logo.svg";
import AuthInput from "../../components/auth/AuthInput";
import AuthButton from "../../components/auth/AuthButton";
import { useStateValue } from "../../StateProvider";
import AuthError from "../../components/auth/AuthError";

function ForgetPassword() {
  const { state, dispatch } = useStateValue();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  return (
    <div className="forgot">
      <div className="forgotLeft">
        <img src={Logo} alt="" className="forgotLogo" />
        <span className="forgotHeader">Don't sweat it</span>
        <span className="forgotSubHeader">
          Enter your email and we will send you a link to reset
        </span>
        <div className="forgotErrorContainer">
          <AuthError error={error} />
        </div>
        <AuthInput
          placeholder="Enter your email"
          email
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <AuthButton
          name="Request password"
          onClick={() => {
            if (email) {
            } else {
              setError("Email field can not be empty");
            }
          }}
        />
      </div>
      <div className="forgotRight">
        <img src={Abstract} alt="" className="forgotAbstract" />
      </div>
    </div>
  );
}

export default ForgetPassword;
