import React, { useState, useEffect } from "react";
import "./AddNews.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setActiveTab } from "../../../../reducers/sidebarReducer";
import { BsChevronLeft } from "react-icons/bs";
import Header from "../../../../components/loggedinStack/Header";
import { useRef } from "react";
import * as Yup from "yup";
import { Formik } from "formik";

function AddNews() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const successMessageRef = useRef();
  const [success, setSuccess] = useState(false);
  const [announcementImage, setAnnouncemetImage] = useState("");
  const [announcementTitle, setAnnouncemetTitle] = useState("");
  const [announcementDetails, setAnnouncemetDetails] = useState("");

  useEffect(() => {
    dispatch(setActiveTab("announcemnets"));
  }, []);

  const handlePost = (e) => {
    setSuccess(true);
    setTimeout(() => {
      successMessageRef.current.scrollIntoView({ behaviot: "smooth" });
    }, 500);
  };

  const validationSchema = Yup.object().shape({
    image: Yup.string().required("Please select an image"),
    title: Yup.string().required("Please enter a title"),
    details: Yup.string().required("Please enter the details"),
  });

  return (
    <div className="addNews loadedPage">
      <Header pageName="Announcements" />
      <div className="board">
        <div className="boardContent">
          <div className="addNewsHeader">
            <div className="addNewsHeaderLeft">
              <div className="addNewsBack" onClick={() => navigate(-1)}>
                <BsChevronLeft />
              </div>
              Add News/ Announcement
            </div>
          </div>
          <div className="addNewsContent">
            <Formik
              initialValues={{ image: "", title: "", details: "" }}
              onSubmit={(values, action) => {
                handlePost();
              }}
              validationSchema={validationSchema}
            >
              {({
                handleChange,
                handleSubmit,
                values,
                errors,
                touched,
                setFieldValue,
              }) => (
                <div className="addNewsForm">
                  <div className="addNewsFormLeft">
                    <input
                      type="file"
                      id="newsImage"
                      onChange={(e) => {
                        const selectedFile = e.target.files[0];
                        const selectedImage = URL.createObjectURL(selectedFile);
                        setAnnouncemetImage(selectedImage);
                        setFieldValue("image", selectedImage);
                      }}
                      accept="Image/*"
                    />
                    <label
                      htmlFor="newsImage"
                      className="addNewsImageBackground"
                    >
                      {values.image ? (
                        <img
                          src={values.image}
                          alt=""
                          className="addNewsImage"
                        />
                      ) : (
                        <span className="addNewsImagePlaceholder">
                          Add Photo
                        </span>
                      )}
                    </label>
                    {errors.image && (
                      <span className="addNewsError">{errors.image}</span>
                    )}
                  </div>
                  <div className="addNewsFormRight">
                    <div className="addNewsTitle">Title</div>
                    <input
                      type="text"
                      placeholder="Enter the title"
                      className="addNewsTitleInput"
                      value={values.title}
                      onChange={handleChange("title")}
                    />
                    {errors.title && touched.title && (
                      <div className="addNewsError">{errors.title}</div>
                    )}
                    <div className="addNewsTitle addNewsDetails">Details</div>
                    <textarea
                      placeholder="Enter the Details"
                      cols="30"
                      rows="10"
                      className="addNewsTitleInput"
                      value={values.details}
                      onChange={handleChange("details")}
                    />
                    {errors.details && touched.details && (
                      <div className="addNewsError">{errors.details}</div>
                    )}
                    <div className="addNewsButtonContainer">
                      <div
                        className="addNewsPostButton"
                        onClick={() => {
                          if (
                            !errors.image &&
                            !errors.title &&
                            !errors.details
                          ) {
                            setAnnouncemetImage(values.image);
                            setAnnouncemetTitle(values.title);
                            setAnnouncemetDetails(values.details);
                          }
                          handleSubmit();
                        }}
                      >
                        Post
                      </div>
                    </div>
                    {success && (
                      <div
                        className="addNewsError addNewsSuccess"
                        ref={successMessageRef}
                      >
                        Your post was successful
                      </div>
                    )}
                  </div>
                </div>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNews;
