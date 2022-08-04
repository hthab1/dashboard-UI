import React, { useState } from "react";
import "./FormDatePicker.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function FormDatePicker({ error, label, startDate, onChange, placeholder, value }) {

  return (
    <div className="formDatePicker">
      <label className="formDatePickerLabel">{label}</label>
      <div className="formDatePickerPicker">
        <DatePicker
        placeholderText={placeholder}
          className="formDatePickerInput"
          selected={startDate}
          onChange={onChange}
          value={value}
        />
      </div>
      {error && <span className="formDatePickerError">{error}</span>}
    </div>
  );
}

export default FormDatePicker;
