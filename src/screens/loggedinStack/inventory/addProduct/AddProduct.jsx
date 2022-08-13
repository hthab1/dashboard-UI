import React, { useEffect, useState } from "react";
import "./AddProduct.css";
import { useDispatch } from "react-redux";
import Header from "../../../../components/loggedinStack/Header";
import { setActiveTab } from "../../../../reducers/sidebarReducer";
import { BsChevronLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import AddProductForm from "../../../../components/loggedinStack/inventory/addProductForm/AddProductForm";

function AddProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    dispatch(setActiveTab("inventory"));
  }, []);

  return (
    <div className="addProduct loadedPage">
      <Header pageName="Add Product" />
      <div className="board">
        <div className="boardContent">
          <div className="addProductContent">
            <div className="addProductContentHeader">
              <div className="addProductBack" onClick={() => navigate(-1)}>
                <BsChevronLeft />
              </div>
              Add Product
            </div>
            <div className="addProductContentForm">
              <AddProductForm
                name={productName}
                price={price}
                quantity={quantity}
                setName={setProductName}
                setQuantity={setQuantity}
                setPrice={setPrice}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
