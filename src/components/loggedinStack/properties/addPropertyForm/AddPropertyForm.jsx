import React, { useRef } from "react";
import "./AddPropertyForm.css";
import { Formik } from "formik";
import * as Yup from "yup";
import FormInput from "../../common/formInput/FormInput";
import FormButton from "../../common/formButton/FormButton";
import FormCoverInput from "../../common/formCoverInput/FormCoverInput";
import FormSelect from "../../common/formSelect/FormSelect";
import FormInputTextArea from "../../common/formInputTextArea/FormInputTextArea";
import FormDropZone from "../../common/formDropZone/FormDropZone";

const developmentOptions = [
  { value: "TM Burrows", label: "TM Burrows" },
  { value: "dvelopment1", label: "Development 1" },
  { value: "dvelopment2", label: "Development 2" },
  { value: "dvelopment3", label: "Development 3" },
  { value: "dvelopment4", label: "Development 4" },
];

const propertyTypeOption = [
  { value: "Duplex", label: "Duplex " },
  { value: "apartment", label: "Apartement" },
];

const serviceChargeTypeOptions = [
  { value: "Rent", label: "Rent " },
  { value: "homeOwner", label: "Home Owner " },
];

function AddPropertyForm({
  propertyName,
  development,
  propertyType,
  noOfUnits,
  price,
  serviceChargeType,
  location,
  description,
  coverImage,
  gallery,
  setPropertyName,
  setDevelopment,
  setPropertyType,
  setNoOfUnits,
  setPrice,
  setServiceChargeType,
  setLocation,
  setDescription,
  setCoverImage,
  setGallery,
  onAdd,
  buttonName,
}) {
  const nameRef = useRef();
  const devRef = useRef();
  const proRef = useRef();
  const noRef = useRef();
  const priceRef = useRef();
  const serRef = useRef();
  const descRef = useRef();
  const coverRef = useRef();
  const galRef = useRef();
  const locRef = useRef();

  const validationSchema = Yup.object().shape({
    propertyName: Yup.string().required("Please enter the property name"),
    development: Yup.string().required("Please select development"),
    propertyType: Yup.string().required("Please select property type"),
    noOfUnits: Yup.string().required("Please enter number of units"),
    price: Yup.string().required("Please enter price"),
    serviceChargeType: Yup.string().required(
      "Please select service charge type"
    ),
    description: Yup.string().required("Please enter description"),
    coverImage: Yup.string().required("Please select a cover photo"),
    gallery: Yup.array()
      .min(1, "Please select property photos")
      .required("Please select property photos"),
    location: Yup.string().required("Please enter location"),
  });

  return (
    <div className="addPropertyForm">
      <Formik
        initialValues={{
          propertyName: propertyName,
          development: development,
          propertyType: propertyType,
          noOfUnits: noOfUnits,
          price: price,
          serviceChargeType: serviceChargeType,
          location: location,
          description: description,
          coverImage: coverImage,
          gallery: gallery,
        }}
        onSubmit={(values, actions) => {
          onAdd();
        }}
        validationSchema={validationSchema}
      >
        {({
          handleChange,
          handleSubmit,
          errors,
          values,
          touched,
          setFieldValue,
        }) => (
          <>
            <div ref={nameRef}></div>
            <FormInput
              label="Property Name*"
              placeholder="Enter property name*"
              value={values.propertyName}
              onChange={handleChange("propertyName")}
              error={touched.propertyName && errors.propertyName}
            />
            <div ref={devRef}></div>
            <FormSelect
              options={developmentOptions}
              placeholder="Please select development"
              label="Select Development*"
              onChange={(value) => setFieldValue("development", value.value)}
              value={values.development}
              error={touched.development && errors.development}
            />
            <div ref={proRef}></div>
            <FormSelect
              options={propertyTypeOption}
              placeholder="Please select property type"
              label="Select property type*"
              value={values.propertyType}
              error={touched.propertyType && errors.propertyType}
              onChange={(value) => setFieldValue("propertyType", value.value)}
            />
            <div ref={noRef}></div>
            <FormInput
              label="Number of units*"
              placeholder="Enter number of units"
              type="number"
              value={values.noOfUnits}
              onChange={handleChange("noOfUnits")}
              error={touched.noOfUnits && errors.noOfUnits}
            />
            <div ref={priceRef}></div>
            <FormInput
              label="Price*"
              placeholder="Enter price"
              type="number"
              value={values.price}
              onChange={handleChange("price")}
              error={touched.price && errors.price}
            />
            <div ref={locRef}></div>
            <FormInput
              label="Location*"
              placeholder="Enter location"
              value={values.location}
              onChange={handleChange("location")}
              error={touched.location && errors.location}
            />
            <div ref={serRef}></div>
            <FormSelect
              options={serviceChargeTypeOptions}
              placeholder="Please select service charge type"
              label="Select service charge type*"
              value={values.serviceChargeType}
              error={touched.serviceChargeType && errors.serviceChargeType}
              onChange={(value) =>
                setFieldValue("serviceChargeType", value.value)
              }
            />
            <div ref={descRef}></div>
            <FormInputTextArea
              label="Description"
              value={values.description}
              onChange={handleChange("description")}
              error={touched.description && errors.description}
            />
            <div ref={coverRef}></div>
            <FormCoverInput
              label="Cover Photo*"
              value={values.coverImage}
              onChange={(value) => setFieldValue("coverImage", value)}
              error={touched.coverImage && errors.coverImage}
            />
            <div ref={galRef}></div>
            <FormDropZone
              label="Photos*"
              value={values.gallery}
              onDrop={(value) =>
                setFieldValue("gallery", [value, ...values.gallery])
              }
              error={touched.gallery && errors.gallery}
            />
            <FormButton
              label={buttonName ? buttonName : "Add Development"}
              onClick={() => {
                if (errors.gallery) {
                  galRef.current.scrollIntoView({ behavior: "smooth" });
                } else if (errors.coverImage) {
                  coverRef.current.scrollIntoView({ behavior: "smooth" });
                } else if (errors.description) {
                  descRef.current.scrollIntoView({ behavior: "smooth" });
                } else if (errors.serviceChargeType) {
                  serRef.current.scrollIntoView({ behavior: "smooth" });
                } else if (errors.location) {
                  locRef.current.scrollIntoView({ behavior: "smooth" });
                } else if (errors.price) {
                  priceRef.current.scrollIntoView({ behavior: "smooth" });
                } else if (errors.noOfUnits) {
                  noRef.current.scrollIntoView({ behavior: "smooth" });
                } else if (errors.propertyType) {
                  proRef.current.scrollIntoView({ behavior: "smooth" });
                } else if (errors.development) {
                  devRef.current.scrollIntoView({ behavior: "smooth" });
                } else if (errors.propertyName) {
                  nameRef.current.scrollIntoView({ behavior: "smooth" });
                }
                if (
                  !errors.coverImage &&
                  !errors.description &&
                  !errors.development &&
                  !errors.gallery &&
                  !errors.noOfUnits &&
                  !errors.price &&
                  !errors.location &&
                  !errors.propertyName &&
                  !errors.propertyType &&
                  !errors.serviceChargeType
                ) {
                  setPropertyName(values.propertyName);
                  setCoverImage(values.coverImage);
                  setDescription(values.description);
                  setDevelopment(values.development);
                  setNoOfUnits(values.noOfUnits);
                  setPrice(values.price);
                  setPropertyType(values.propertyType);
                  setServiceChargeType(values.serviceChargeType);
                  setLocation(values.location);
                  setGallery(values.gallery);
                }

                handleSubmit();
              }}
            />
          </>
        )}
      </Formik>
    </div>
  );
}

export default AddPropertyForm;
