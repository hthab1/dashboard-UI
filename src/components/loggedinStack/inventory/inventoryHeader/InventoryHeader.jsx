import React from 'react'
import "./InventoryHeader.css"
import { BsCheck } from "react-icons/bs";

function InventoryHeader({ check, setCheck }) {
  return (
    <div className='inventoryHeader' >
    <div
    className="checkBox"
    onClick={() => {
      setCheck(!check);
    }}
  >
    {check && <BsCheck />}
  </div>
  <div className="inventoryHeaderTitles">
    <div className="inventoryHeaderTitle ">Product ID</div>
    <div className="inventoryHeaderTitle inventoryHeaderTitleLarge">Product Name</div>
    <div className="inventoryHeaderTitle inventoryHeaderTitleLarge">Price</div>
    <div className="inventoryHeaderTitle inventoryHeaderTitleLarge">Available Stock</div>
  </div>
  <div className="inventoryHeaderEnd"></div>
</div>
  )
}

export default InventoryHeader