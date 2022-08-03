import React from 'react'
import "./Steps.css"

function Steps({ stage }) {
  return (
    <div className='steps'>
        <div className="stepsContent">
        
            <div className="stepsStepContainer q" style={{ zindex:4 }}>
                <span className="stepsFirstStep stepsStepActive">01</span>
                <span className="stepsName">Personal Information</span>
            </div>
            <div className="stepsStepContainer w" style={{ zindex:3 }}>
                <span className="stepsStep ">02</span>
                <span className="stepsName">Property Info</span>
            </div>
            <div className="stepsStepContainer " style={{ zindex:2 }}>
                <span className="stepsStep">03</span>
                <span className="stepsName">Service Plan</span>
            </div>
            <div className="stepsStepContainer  " style={{ zindex:1 }}>
                <span className="stepsStep">04</span>
                <span className="stepsName">Confirmation</span>
            </div>
        </div>
    </div>
  )
}

export default Steps