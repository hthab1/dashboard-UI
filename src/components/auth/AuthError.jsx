import React from 'react'
import "./AuthError.css"

function AuthError({ error }) {
  return (
    <div className='authError' >{error}</div>
  )
}

export default AuthError