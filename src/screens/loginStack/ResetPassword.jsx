import React, { useState } from "react";
import "./ResetPassword.css";
import Abstract from "../../assets/Abstract.svg";
import Logo from "../../assets/Logo.svg";
import AuthInput from "../../components/auth/AuthInput";
import AuthButton from "../../components/auth/AuthButton";
import AuthError from "../../components/auth/AuthError";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  return (
    <div className="reset">
      <div className="resetLeft">
        <img src={Logo} alt="" className="resetLogo" />
        <span className="resetHeader">Reset your password</span>
        <span className="resetSubHeader">
        Choose and confirm your new password
        </span>
        <div className="resetErrorContainer">
          <AuthError error={error} />
        </div>
        <AuthInput
          placeholder="Enter new password"
          password
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <AuthInput
          placeholder="Confirm password"
          password
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />
        <AuthButton
          name="Reset password"
          onClick={() => {
            if (password && confirm) {
              if (password !== confirm) {
                setError("Password didn't match");
              }else{
                setError("")
              }
            } else {
              setError("Password field can not be empty");
            }
          }}
        />
      </div>
      <div className="resetRight">
        <img src={Abstract} alt="" className="resetAbstract" />
      </div>
    </div>
  );
}

export default ResetPassword;
