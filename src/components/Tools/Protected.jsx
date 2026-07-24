import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { Navigate } from 'react-router'

function Protected({children}) {

const {isLoggedIn } = useAuth();

if(!isLoggedIn){

    return <Navigate to="/LogIn" replace />
}

  return children;
    
  
}

export default Protected