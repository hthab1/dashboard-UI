import React from "react";
import "./FormInput.css";

function FormInput({
  label,
  value,
  onChange,
  placeholder,
  error,
  maxLength,
  onFocus,
  type,
  onInput
}) {
  return (
    <div className="formInput">
      <label className="formInputLabel">{label}</label>
      <input
        type={type ? type : "text"}
        className="formInputInput"
        style={{ borderColor: error && "#FF5274" }}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        onFocus={onFocus}
        onInput={onInput}
      />
      {error && <span className="formInputError">{error}</span>}
    </div>
  );
}

export default FormInput;
