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
import { useState } from "react";
import AddPropertyForm from "../../../../components/loggedinStack/properties/addPropertyForm/AddPropertyForm";

function AddProperty() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [propertyName, setPropertyName] = useState("");
  const [development, setDevelopment] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [noOfUnits, setNoOfUnits] = useState("");
  const [price, setPrice] = useState("");
  const [serviceChargeType, setServiceChargeType] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    dispatch(setActiveTab("add property"));
  }, []);
  return (
    <div className="addProperty loadedPage">
      <Header pageName="Add Property" />
      <div className="board">
        <div className="boardContent">
          <div className="addPropertyHeaderLeft">Add Property</div>
          <div className="addpropertyFormcontainer">
            <AddPropertyForm
              propertyName={propertyName}
              coverImage={coverImage}
              description={description}
              development={development}
              gallery={gallery}
              location={location}
              noOfUnits={noOfUnits}
              price={price}
              propertyType={propertyType}
              serviceChargeType={serviceChargeType}
              setCoverImage={setCoverImage}
              setDescription={setDescription}
              setDevelopment={setDevelopment}
              setGallery={setGallery}
              setLocation={setLocation}
              setNoOfUnits={setNoOfUnits}
              setPrice={setPrice}
              setPropertyName={setPropertyName}
              setPropertyType={setPropertyType}
              setServiceChargeType={setServiceChargeType}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProperty;
