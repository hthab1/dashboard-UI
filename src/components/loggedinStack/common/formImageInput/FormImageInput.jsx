import React, { useState } from "react";
import "./FormImageInput.css";

function FormImageInput({ error, value, onChange }) {
  const [profile, setProfile] = useState(value);

  const OnSelectFile = (e) => {
    const selectedFile = e.target.files[0];
    const selectedImage = URL.createObjectURL(selectedFile);
    setProfile(selectedImage);
    onChange(selectedImage);
  };

  return (
    <div className="formImageInput">
      <label htmlFor="imageInput" className="formImageContainer">
        {profile ? (
          <img src={profile} alt="" className="formImageImage" />
        ) : (
          <>
            <span className="formImagePlaceHolder">Add Photo</span>
          </>
        )}
      </label>
      <input
        type="file"
        id="imageInput"
        className="formImageInputImage"
        accept="image/*"
        onChange={OnSelectFile}
      />
      {error && <div className="formImageInputError">{error}</div>}
    </div>
  );
}

export default FormImageInput;
