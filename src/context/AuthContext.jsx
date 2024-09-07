import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createWithPass = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginWithPass = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password).then((result) => {
      const loggedInUser = result.user;
      sessionStorage.setItem("user", JSON.stringify(loggedInUser));
      setUser(loggedInUser);
      setLoading(false);
      return result;
    });
  };

  const signOutProfile = () => {
    setLoading(true);
    return signOut(auth).then(() => {
      sessionStorage.removeItem("user"); 
      setUser(null);
      setLoading(false);
    });
  };

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setLoading(false);
    } else {
      const unSubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          sessionStorage.setItem("user", JSON.stringify(user));
          setUser(user);
        } else {
          sessionStorage.removeItem("user"); 
          setUser(null);
        }
        setLoading(false);
      });

      return () => {
        unSubscribe();
      };
    }
  }, [auth]);

  const authInfo = {
    createWithPass,
    loginWithPass,
    signOutProfile,
    user,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
