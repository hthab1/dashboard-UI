import React from 'react'
import "./ItemRequestsHeader.css"
import { BsCheck } from "react-icons/bs";


function ItemRequestsHeader({ check, setCheck }) {
  return (
    <div className='itemRequestsHeader' >
    <div
    className="checkBox"
    onClick={() => {
      setCheck(!check);
    }}
  >
    {check && <BsCheck />}
  </div>
  <div className="itemRequestsHeaderTitles">
    <div className="itemRequestsHeaderTitle ">Request ID</div>
    <div className="itemRequestsHeaderTitle itemRequestsHeaderTitleLarge">Tenant/Home Owner</div>
    <div className="itemRequestsHeaderTitle">Property</div>
    <div className="itemRequestsHeaderTitle itemRequestsHeaderTitleLarge">Items Requested</div>
    <div className="itemRequestsHeaderTitle ">No of Items</div>
    <div className="itemRequestsHeaderTitle itemRequestsHeaderTitleLarge">Status</div>
  </div>
  <div className="itemRequestsHeaderEnd"></div>
</div>
  )
}

export default ItemRequestsHeader