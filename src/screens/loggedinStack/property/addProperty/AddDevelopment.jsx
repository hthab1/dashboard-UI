import React, { useEffect } from "react";
import Header from "../../../../components/loggedinStack/Header";
import "./AddProperty.css";
import { useDispatch } from "react-redux";
import { setActiveTab } from "../../../../reducers/sidebarReducer";
import { useNavigate } from "react-router-dom";
import Pagination from "../../../../components/loggedinStack/common/pagination/Pagination";
import Property from "../../../../components/loggedinStack/properties/property/Property";
import { properties } from "../../../../data/properties";
import { BsChevronLeft } from "react-icons/bs";
import AddDevelopmentForm from "../../../../components/loggedinStack/properties/addPropertyForm/AddDevelopmentForm";
import { useState } from "react";
import { itemRequests } from "../../../../data/itemRequests";

function AddDevelopment() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [developmentName, setDevelopmentName] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    dispatch(setActiveTab("manage developments"));
  }, []);
  return (
    <div className="addProperty loadedPage">
      <Header pageName="Developments" />
      <div className="board">
        <div className="boardContent">
          <div className="addPropertyHeaderLeft">
            <div className="addPropertyBack" onClick={() => navigate(-1)}>
              <BsChevronLeft />
            </div>
            Add development
          </div>
          <div className="addpropertyFormcontainer">
            <AddDevelopmentForm
              name={developmentName}
              location={location}
              image={image}
              setName={setDevelopmentName}
              setLocation={setLocation}
              setImage={setImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddDevelopment;
