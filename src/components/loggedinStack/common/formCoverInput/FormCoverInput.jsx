import React, { useState } from "react";
import "./FormCoverInput.css";

function FormCoverInput({ error, value, onChange, label }) {
  const [profile, setProfile] = useState(value);

  const OnSelectFile = (e) => {
    const selectedFile = e.target.files[0];
    const selectedImage = URL.createObjectURL(selectedFile);
    setProfile(selectedImage);
    onChange(selectedImage);
  };

  return (
    <div className="formCoverInput">
        <div className="formCoverInputLabel">{label}</div>
      <label htmlFor="imageInput" className="formCoverContainer">
        {profile ? (
          <img src={profile} alt="" className="formCoverCover" />
        ) : (
          <>
            <span className="formCoverPlaceHolder">Add Cover Photo</span>
          </>
        )}
      </label>
      <input
        type="file"
        id="imageInput"
        className="formCoverInputCover"
        accept="image/*"
        onChange={OnSelectFile}
      />
      {error && <div className="formCoverInputError">{error}</div>}
    </div>
  );
}

export default FormCoverInput;
