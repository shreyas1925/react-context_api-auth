import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(name, email, number, password) {
    return auth.createUserWithEmailAndPassword(name, email, number, password);
  }

  useEffect(() => {
    // Directly provided from tyhe firebase (user will be setted )
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user); //means only on adding user we are loading
      setLoading(false);
    });

    return unsubscribe;
    // Meaning is that when we call that particular onAuthStateChanged it return the method which unsubscribes
  }, []);

  const value = {
    currentUser,
    signup,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
