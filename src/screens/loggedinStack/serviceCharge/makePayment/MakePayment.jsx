import React, { useEffect } from "react";
import "./MakePayment.css";
import { useDispatch } from "react-redux";
import Header from "../../../../components/loggedinStack/Header";
import { setActiveTab } from "../../../../reducers/sidebarReducer";
import { BsChevronLeft } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import {
  MoneyFormat,
  TimeFormat,
} from "../../../../components/functions/Format";
import { Formik } from "formik";
import * as Yup from "yup";

function MakePayment() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const {
    id,
    name,
    location: place,
    property,
    price,
    status,
    timeStamp,
    type,
  } = location.state.serviceCharge;

  const time = new Date(parseInt(timeStamp));

  useEffect(() => {
    dispatch(setActiveTab("service charge"));
  }, []);

  const validationSchema = Yup.object().shape({
    amount: Yup.string().required("Please enter the amount to pay"),
  });

  return (
    <div className="makePayment loadedPage">
      <Header pageName="Service Charge" />
      <div className="board">
        <div className="boardContent">
          <div className="makePaymentContent">
            <div className="makePaymentContentHeader">
              <div className="makePaymentBack" onClick={() => navigate(-1)}>
                <BsChevronLeft />
              </div>
              <span>Make Payment</span>
            </div>
            <div className="makePaymentContentContent">
              <div className="makePaymentSegment">
                <div className="makePaymentContentTitle">Order ID</div>
                <div className="makePaymentContentText">#{id}</div>
              </div>
              <div className="makePaymentSegment">
                <div className="makePaymentContentTitle">Name</div>
                <div className="makePaymentContentText">{name}</div>
              </div>
              <div className="makePaymentSegment">
                <div className="makePaymentContentTitle">Name</div>
                <div className="makePaymentContentText">
                  {time.toLocaleDateString()}, {TimeFormat(parseInt(timeStamp))}{" "}
                </div>
              </div>
              <div className="makePaymentSegment">
                <div className="makePaymentContentTitle">Customer Type</div>
                <div className="makePaymentContentText">Tenant</div>
              </div>
              <div className="makePaymentSegment">
                <div className="makePaymentContentTitle">Property</div>
                <div className="makePaymentContentText">{property}</div>
              </div>
              <div className="makePaymentSegment">
                <div className="makePaymentContentTitle">Location</div>
                <div className="makePaymentContentText">{place}</div>
              </div>
              <div className="makePaymentSegment">
                <div className="makePaymentContentTitle">Type</div>
                <div className="makePaymentContentText">{type}</div>
              </div>
              <div className="makePaymentSegment">
                <div className="makePaymentContentTitle">Service Charge</div>
                <div className="makePaymentContentText">
                  {MoneyFormat(price)}
                </div>
              </div>
              <div className="makePaymentSegment makePaymentSegmentBottom">
                <div className="makePaymentContentTitle">Payment Status</div>
                <div
                  className="makePaymentContentText"
                  style={{
                    color:
                      status === "Pending"
                        ? "#ff9f34"
                        : status === "Completed"
                        ? "#09bd3c"
                        : "#016a5f",
                  }}
                >
                  {status}
                </div>
              </div>
              <Formik
                initialValues={{ amount: "", reference: "" }}
                onSubmit={(values, action) => {}}
                validationSchema={validationSchema}
              >
                {({ handleChange, handleSubmit, errors, values }) => (
                  <>
                    <div className="makePaymentInputContainer">
                      <label className="makePaymentInputLabel">
                        Enter amount to pay
                      </label>
                      <input
                        type="number"
                        className="makePaymentInputInput"
                        value={values.amount}
                        onChange={handleChange("amount")}
                      />
                      {errors.amount && (
                        <span className="makePaymentInputError">
                          {errors.amount}
                        </span>
                      )}
                    </div>
                    <div className="makePaymentInputContainer">
                      <label className="makePaymentInputLabel">
                        Payment Reference
                      </label>
                      <input
                        type="text"
                        className="makePaymentInputInput"
                        value={values.reference}
                        onChange={handleChange("reference")}
                      />
                      {/* <span className="makePaymentInputError">error</span> */}
                    </div>
                    <div className="makePaymentButtons">
                      <div
                        className="makePaymentButton"
                        onClick={() => navigate(-1)}
                      >
                        Cancel
                      </div>
                      <div
                        className="makePaymentButton makePaymentButtonContinue"
                        onClick={handleSubmit}
                      >
                        Make Payment
                      </div>
                    </div>
                  </>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MakePayment;
