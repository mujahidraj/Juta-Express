import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../../Firebase/firebase.init';



// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null)

const provider = new GoogleAuthProvider()

const AuthProvier = ({children}) => {

    const [user , setUser] = useState(null)


  const auth = getAuth(app);

  const createUser =(email , password) =>{
    return createUserWithEmailAndPassword(auth , email , password)
  }

  const loginUser = (email , password)=>{
    return signInWithEmailAndPassword(auth , email , password)
  }

  const logOutUser =()=>{
    return signOut(auth)
  }

   useEffect(()=>{
    const unSubcribe = onAuthStateChanged(auth , (currentUser)=>{
      setUser(currentUser);

    });
    return()=>{
      unSubcribe();
    }
  } ,[auth]);


  const userUpdate =(updatedUser)=>{
    return updateProfile(auth.currentUser , updatedUser)
  }

  const googleSignUp = ()=>{
    return signInWithPopup(auth,provider)
  }

  const data ={
    user,
    createUser,
    loginUser,
    logOutUser,
    userUpdate,
    googleSignUp,
    setUser

  }

  return (
    <AuthContext value={data}>
      {children}
    </AuthContext> 
  );
};

export default AuthProvier;