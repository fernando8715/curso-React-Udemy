
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext, AuthProvider } from '../context';

export const LoginPage = () => {

  const {login} = useContext(AuthContext)
  const navigate = useNavigate();
  const path = localStorage.getItem('lastPath') || '/'
  
  const onLogin = ()=> {
    
    login('Allie Prada')
    navigate(path, {
      replace: true
    })
  }
  
  return (
    <AuthProvider>
      <div className='container mt-5'>
        <h1>LoginPage</h1>
        <hr />

        <button
          className='btn btn-primary'
          onClick={ onLogin }
        >
          Login
        </button>

      </div>
    </AuthProvider>
  )
}
