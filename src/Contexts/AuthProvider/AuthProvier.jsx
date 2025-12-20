import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from '../../Firebase/firebase.init';



// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null)

const AuthProvier = ({children}) => {

  const auth = getAuth(app);

  const createUser =(email , password) =>{
    return createUserWithEmailAndPassword(auth , email , password)
  }

  const data ={
    createUser
  }

  return (
    <AuthContext value={data}>
      {children}
    </AuthContext> 
  );
};

export default AuthProvier;