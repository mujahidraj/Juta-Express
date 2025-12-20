import React, { use } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvier';
import { Navigate, useLocation } from 'react-router';

const PrivateRouter = ({children}) => {
  const {user , loading} = use(AuthContext)
  const location = useLocation()
  console.log(location.pathname);
  

  
  if(loading){
    return <span className="loading loading-bars loading-xl"></span>
  }
  
  if(!user){

    return <Navigate to='/login' state={location.pathname}/>
  }
  else{
    return  children
    
  }
};

export default PrivateRouter;