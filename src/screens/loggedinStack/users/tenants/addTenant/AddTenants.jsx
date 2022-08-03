import React from 'react'
import Header from '../../../../../components/loggedinStack/Header'
import Steps from '../../../../../components/loggedinStack/users/common/steps/Steps'
import "./AddTenants.css"

function AddTenants() {
  return (
    <div className='loadedPage addTenant' >
        <Header pageName="Add Tenant" />
        <div className="board">
            <div className="boardContent">
                <div className="addTenantsStepContaienr">
                    <Steps stage={1} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddTenants