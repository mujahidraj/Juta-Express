import React, { use } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvier';
import { Navigate, useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const PrivateRouter = ({children}) => {
  const {user } = use(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()
  console.log(location.pathname);
  
  if (user && user.emailVerified === false) {
    Swal.fire({
        icon: 'warning',
        title: 'Email Not Verified',
        text: 'Please verify your email before proceeding.',
        confirmButtonText: 'OK',
        confirmButtonColor: '#d97706',
        allowOutsideClick: false,
        allowEscapeKey: false
    }).then((result) => {
        if (result.isConfirmed) {
            navigate('/register', { state: location.pathname }); 
        }
    });
    return null; 
  }
  
  if(!user){

    Swal.fire({
        icon: 'warning',
        title: 'Authentication Required',
        text: 'You must be logged in to access this page.',
        confirmButtonText: 'OK',
        confirmButtonColor: '#d97706',
        allowOutsideClick: false,
        allowEscapeKey: false
    }).then((result) => {
        if (result.isConfirmed) {
            navigate('/login', { state: location.pathname }); 
        }
    });
  }
  else{
    return  children
    
  }
};

export default PrivateRouter;