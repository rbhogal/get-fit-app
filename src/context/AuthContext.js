import React, { useState, useEffect, createContext } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

const AuthContext = createContext({
  token: '',
  currentUserId: '',
  isSignedIn: false,
  isNewUser: false,
  signIn: token => {},
  signOut: () => {},
});

export const AuthContextProvider = props => {
  const initialToken = localStorage.getItem('token');
  const [token, setToken] = useState(initialToken);
  const userIsSignedIn = !!token;
  const [currentUserId, setCurrentUserId] = useState();
  const [isNewUser, setIsNewUser] = useState(false);

  const signInHandler = token => {
    setToken(token);
    localStorage.setItem('token', token);
  };
  const signOutHandler = () => {
    setToken(null);

    localStorage.removeItem('token');
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setCurrentUserId(user.uid);
      }
      return unsubscribe;
    });
  }, []);

  const contextValue = {
    token: token,
    isNewUser,
    isSignedIn: userIsSignedIn,
    signIn: signInHandler,
    signOut: signOutHandler,
    currentUserId,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
