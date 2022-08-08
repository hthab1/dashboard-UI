import React, { useEffect } from 'react'
import Header from '../../../../components/loggedinStack/Header'
import "./Developments.css"
import { useDispatch } from "react-redux";
import { setActiveTab } from '../../../../reducers/sidebarReducer';

function Developments() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveTab("manage developments"));
  }, []);
  return (
    <div className='developments loadedPage' >
        <Header pageName="Developments" />
    </div>
  )
}

export default Developments