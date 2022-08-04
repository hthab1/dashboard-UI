import React, { useState } from "react";
import "./FormSelect.css";
import Select from "react-select";

function FormSelect({ onChange, label, error, placeholder, options, value }) {
  const customStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "white",
      borderRadius: 0,
      paddingVertical: 10,
      borderColor: error ? "#ff5274" : "#09bd3c",
      fontFamily: "Poppins",
      paddingBlock: 5,
    }),
  };

  const selectedValues = (options, value) => {
    return options ? options.find((option) => option.value === value) : "";
  };

  return (
    <div className="formSelect">
      <label className="formSelectLabel">{label}</label>
      <div className="formSelectContainer">
        <Select
          placeholder={placeholder}
          options={options}
          styles={customStyles}
          value={selectedValues(options, value)}
          onChange={(value) => onChange(value)}
        />
      </div>
      {error && <span className="formSelectError">{error}</span>}
    </div>
  );
}

export default FormSelect;
