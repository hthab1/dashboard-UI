import React from "react";
import "./FormInputTextArea.css";

function FormInputTextArea({
  label,
  value,
  onChange,
  placeholder,
  error,
  onFocus,
}) {
  return (
    <div className="formInputTextArea">
      <label className="formInputTextAreaLabel">{label}</label>
      <textarea
        cols="30"
        rows="10"
        className="formInputTextAreaInput"
        style={{ borderColor: error && "#FF5274" }}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
      />
      {error && <span className="formInputTextAreaError">{error}</span>}
    </div>
  );
}

export default FormInputTextArea;
