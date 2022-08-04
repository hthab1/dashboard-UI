import React from 'react'
import "./FormButton.css"

function FormButton({ label, onClick }) {
  return (
    <div className='formButton' onClick={onClick}>{label}</div>
  )
}

export default FormButton