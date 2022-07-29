import React, { useState } from "react";
import "./AuthInput.css";
import { MdPersonOutline } from "react-icons/md";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";
import { BiLock } from "react-icons/bi";

function AuthInput({
  password,
  placeholder,
  iconLeft,
  value,
  onChange,
  email,
}) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="authInput">
      <div className="iconLeft">
        {email && <MdPersonOutline />}
        {password && <BiLock />}
      </div>
      <input
        type={password && !visible ? "password" : "text"}
        placeholder={placeholder}
        className="authInputInput"
        value={value}
        onChange={onChange}
      />
      <div className="iconRight" onClick={() => setVisible(!visible)}>
        {password && (visible ? <BsEyeSlashFill /> : <BsEyeFill />)}
      </div>
    </div>
  );
}

export default AuthInput;
