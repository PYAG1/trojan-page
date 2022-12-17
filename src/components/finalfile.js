import React, { Children } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context.js/contex'

export default function Finalfile({children}) {
    const{profile}=useAuth()
    const location = useLocation()

    if(profile === null){
        return <Navigate to='/login' state={{path: location.pathname}}/>
    }
  
  
   return children
  
}
