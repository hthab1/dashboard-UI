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
import { useState } from "react";
import AddPropertyForm from "../../../../components/loggedinStack/properties/addPropertyForm/AddPropertyForm";

function EditDevelopmentProperty() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dataLocation = useLocation();
  const property = dataLocation.state.property;

  const [propertyName, setPropertyName] = useState(property.name);
  const [development, setDevelopment] = useState(property.development);
  const [propertyType, setPropertyType] = useState(property.propertyType);
  const [noOfUnits, setNoOfUnits] = useState(property.unit);
  const [price, setPrice] = useState(property.price);
  const [serviceChargeType, setServiceChargeType] = useState(
    property.serviceType
  );
  const [location, setLocation] = useState(property.location);
  const [description, setDescription] = useState(property.description);
  const [coverImage, setCoverImage] = useState(property.image);
  const [gallery, setGallery] = useState(property.gallery);

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
            Edit Property
          </div>
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

export default EditDevelopmentProperty;
