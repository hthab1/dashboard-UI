import React, {useState, useEffect} from 'react'
import "./InventoryProduct.css"
import { BsCheck, BsThreeDotsVertical } from "react-icons/bs";
import { MoneyFormat } from '../../../functions/Format';
import Modal from "react-modal";

Modal.setAppElement("#root");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: window.screen.width > 900 ? "50%" : "80%",
    maxHeight: "90%",
    borderRadius: 10,
  },
};

function InventoryProduct({ id, name, price, available, onEdit, onDelete, selectAll }) {

    const [dropdown, setDropdown] = useState(false);
    const [check, setCheck] = useState(false);
    const [modalDelete, setModalDelete] = useState(false)

    useEffect(() => {
        let isSubscribed = true;
        const closeDropdown = (e) => {
          if (e.path[2].className !== "inventoryProductSegmentEnd") {
            setDropdown(false);
          }
        };
        if (isSubscribed) {
          if (dropdown) {
            document.body.addEventListener("click", closeDropdown);
          }
        }
        return () => {
          isSubscribed = false;
          if (dropdown) {
            document.body.removeEventListener("click", closeDropdown);
          }
        };
      }, [dropdown]);

  return (
    <div className='inventoryProduct' >
      <Modal
        isOpen={modalDelete}
        onRequestClose={() => setModalDelete(false)}
        style={customStyles}
        contentLabel="View Service Charge"
      >
        <div className="modalMark">
          <div className="modalMarkQuestion">
            Are you sure you want to delete this product?
          </div>
          <div className="modalMarkButtons">
            <div className="modalMarkButton" onClick={() => setModalDelete(false)}>
              Cancel
            </div>
            <div
              className="modalMarkButton markModalButtonContinue"
              onClick={()=>{
                setModalDelete(false)
                onDelete()
              }}
            >
              Yes, Continue
            </div>
          </div>
        </div>
      </Modal>
        <div
        className="checkBox"
        onClick={() => {
          setCheck(!check);
        }}
      >
        {(check || selectAll) && <BsCheck />}
      </div>
      <div className="inventoryProductSegments">
        <div className="inventoryProductSegment ">
          <div className="titleForinventoryProductCard">Product ID</div>
          <div>#{id}</div>
        </div>

        <div className="inventoryProductSegment inventoryProductSegmentLarge">
          <div className="titleForinventoryProductCard ">Product Name</div>
          <div>{name}</div>
        </div>
        <div className="inventoryProductSegment inventoryProductSegmentLarge">
          <div className="titleForinventoryProductCard">Price</div>
          <div>{MoneyFormat(price)}</div>
        </div>
        
        <div className="inventoryProductSegment inventoryProductSegmentLarge">
          <div className="titleForinventoryProductCard ">Available in Stock</div>
          <div className="titleForinventoryProductCardCentered">{available}</div>
        </div>
        
      </div>
      <div className="inventoryProductSegmentEnd">
        <div onClick={() => setDropdown(true)}>
          <BsThreeDotsVertical />
        </div>
        {dropdown && (
          <div className="inventoryProductDropdown">
           
            <span
              className="inventoryProductDropdownChoice"
              onClick={() => {
                setDropdown(false);
                onEdit()
              }}
            >
              Edit Product
            </span>
            <span
              className="inventoryProductDropdownChoice"
              onClick={() => {
                setDropdown(false);
                setModalDelete(true)
              }}
            >
              Delete Product
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default InventoryProduct
