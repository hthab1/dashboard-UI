import React from "react";
import "./FormDropZone.css";
import Dropzone from "react-dropzone";
import { ImAttachment } from "react-icons/im";

function FormDropZone({ label, onDrop, error, value }) {
  return (
    <div className="formDropZone">
      <label className="formDropZoneLabel">{label}</label>
      <div className="formDropZoneInput">
        <Dropzone
          onDrop={(acceptedFiles) => {
            const droppedFile = URL.createObjectURL(acceptedFiles[0]);
            onDrop(droppedFile);
          }}
          accept="image/*"
        >
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()} className="formDropZonedrop">
                <input {...getInputProps()} />
                <div className="formDropZoneDropZone">
                  <div className="formDropZoneAttachment">
                    <ImAttachment />
                  </div>
                  Drop Photos here
                </div>
              </div>
            </section>
          )}
        </Dropzone>
      </div>
      <div className="formDropZoneGallery">
        {value?.map((image, index) => (
          <img src={image} alt="" className="formDropZoneImage" />
        ))}
      </div>
      {error && <span className="formDropZoneError">{error}</span>}
    </div>
  );
}

export default FormDropZone;
