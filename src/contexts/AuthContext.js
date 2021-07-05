import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function resetpassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateemail(email) {
    return currentUser.updateemail(email);
  }

  function updatepassword(password) {
    return currentUser.updatepassword(password);
  }
  useEffect(() => {
    // Directly provided from tyhe firebase (user will be setted )
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
      //means only on adding user we are loading
    });

    return unsubscribe;
    // Meaning is that when we call that particular onAuthStateChanged it return the method which unsubscribes
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetpassword,
    updateemail,
    updatepassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
