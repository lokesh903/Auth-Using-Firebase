import React, { useContext, useState,useEffect } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
 
  var [currentUser, setCurrentUser] = useState("");

  var login =  (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };
  var logout =  () => {
    return auth.signOut();
  };


  var signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };
  var forgotPassword=(email)=>{
    return auth.sendPasswordResetEmail(email)
  }
  var updateEmail=(email)=>{
    return currentUser.updateEmail(email)
  }
  var updatePassword=(password)=>{
    return currentUser.updatePassword(password)
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
    })
    return unsubscribe
  }, [])

  const value = {
    currentUser,
    signup,
    login,
    logout,
    forgotPassword,
    updateEmail,
    updatePassword
  };

  return (
    <AuthContext.Provider value={value}>
      <div>{children}</div>
    </AuthContext.Provider>
  );
}


