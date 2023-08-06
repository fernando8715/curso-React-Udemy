
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {

  const navigate = useNavigate();

  const onLogout = ()=> {
    navigate('marvel', {
      replace: true
    })
  }


  return (
    <>
      <div className='container mt-5'>
        <h1>LoginPage</h1>
        <hr />

        <button
          className='btn btn-primary'
          onClick={ onLogout }
        >
          Login
        </button>

      </div>
    </>
  )
}
