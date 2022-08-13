import React, { useEffect, useState } from "react";
import "./AddProduct.css";
import { useDispatch } from "react-redux";
import Header from "../../../../components/loggedinStack/Header";
import { setActiveTab } from "../../../../reducers/sidebarReducer";
import { BsChevronLeft } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import AddProductForm from "../../../../components/loggedinStack/inventory/addProductForm/AddProductForm";

function EditProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();
  const product = location.state.product;

  const [productName, setProductName] = useState(product.name);
  const [quantity, setQuantity] = useState(product.available);
  const [price, setPrice] = useState(product.price);

  useEffect(() => {
    dispatch(setActiveTab("inventory"));
  }, []);

  return (
    <div className="addProduct loadedPage">
      <Header pageName="Edit Product" />
      <div className="board">
        <div className="boardContent">
          <div className="addProductContent">
            <div className="addProductContentHeader">
              <div className="addProductBack" onClick={() => navigate(-1)}>
                <BsChevronLeft />
              </div>
              Edit Product
            </div>
            <div className="addProductContentForm">
              <AddProductForm
                name={productName}
                price={price}
                quantity={quantity}
                setName={setProductName}
                setQuantity={setQuantity}
                setPrice={setPrice}
                buttonName="Update Product"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
