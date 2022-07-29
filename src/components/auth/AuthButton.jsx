import React from "react";
import "./AuthButton.css";

function AuthButton({ name, onClick }) {
  return (
    <div className="authButton" onClick={onClick}>
      <span className="authButtonName">{name}</span>
    </div>
  );
}

export default AuthButton;
