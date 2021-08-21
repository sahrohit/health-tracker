import React, { useContext, useEffect, useState } from "react";
import {
  auth,
  googleProvider,
  facebookProvider,
  githubProvider,
} from "../firebase";

const AuthContext = React.createContext();

const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const signUp = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const logIn = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const signInWithGoogle = () => {
    return auth.signInWithPopup(googleProvider);
  };

  const signInWithFacebook = () => {
    return auth.signInWithPopup(facebookProvider);
  };

  const signInWithGithub = () => {
    return auth.signInWithPopup(githubProvider);
  };

  const logOut = () => {
    return auth.signOut();
  };

  const resetPassword = (email) => {
    return auth.sendPasswordResetEmail(email);
  };

  const updateEmail = (email) => {
    return currentUser.updateEmail(email);
  };

  const updatePassword = (password) => {
    return currentUser.updatePassword(password);
  };

  const unsubscribe = useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signUp,
    logIn,
    logOut,
    resetPassword,
    updateEmail,
    updatePassword,
    signInWithGoogle,
    signInWithFacebook,
    signInWithGithub,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
export { useAuth };
