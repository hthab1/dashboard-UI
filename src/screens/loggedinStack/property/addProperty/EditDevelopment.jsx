import React, { useEffect } from "react";
import Header from "../../../../components/loggedinStack/Header";
import "./AddProperty.css";
import { useDispatch } from "react-redux";
import { setActiveTab } from "../../../../reducers/sidebarReducer";
import { useNavigate, useLocation } from "react-router-dom";
import Pagination from "../../../../components/loggedinStack/common/pagination/Pagination";
import Property from "../../../../components/loggedinStack/properties/property/Property";
import { properties } from "../../../../data/properties";
import { BsChevronLeft } from "react-icons/bs";
import AddDevelopmentForm from "../../../../components/loggedinStack/properties/addPropertyForm/AddDevelopmentForm";
import { useState } from "react";
import { itemRequests } from "../../../../data/itemRequests";

function EditDevelopment() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dev = useLocation();
  const development = dev.state.development;
  const [developmentName, setDevelopmentName] = useState(
    development.development
  );
  const [location, setLocation] = useState(development.location);
  const [image, setImage] = useState(development.image);

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
            Edit development
          </div>
          <div className="addpropertyFormcontainer">
            <AddDevelopmentForm
              name={developmentName}
              location={location}
              image={image}
              setName={setDevelopmentName}
              setLocation={setLocation}
              setImage={setImage}
              buttonName="Update"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditDevelopment;
