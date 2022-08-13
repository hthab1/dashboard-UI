import React from "react";
import "./FormImageInput.css";

function FormImageInput({ error, image, setImage }) {
  return (
    <div className="formImageInput">
      <div className="formImageContainer">
        {image ? (
          <img src={image} alt="" className="formImageImage" />
        ) : (
          <span className="formImagePlaceHolder">Add Photo</span>
        )}
      </div>
      {error && <div className="formImageInputError">{error}</div>}
    </div>
  );
}

export default FormImageInput;
