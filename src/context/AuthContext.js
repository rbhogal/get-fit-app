import React, { useState, useEffect, createContext } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

const AuthContext = createContext({
  token: '',
  currentUserId: '',
  isSignedIn: false,
  isNewUser: false,
  openWelcome: '',
  signIn: token => {},
  signOut: () => {},
  openWelcomeHandler: booleanString => {},
});

export const AuthContextProvider = props => {
  const initialToken = localStorage.getItem('token');
  const [token, setToken] = useState(initialToken);
  const userIsSignedIn = !!token;
  const initialOpenWelcome = localStorage.getItem('openWelcome');
  const [openWelcome, setOpenWelcome] = useState(initialOpenWelcome);
  const [currentUserId, setCurrentUserId] = useState();

  const signInHandler = token => {
    setToken(token);
    localStorage.setItem('token', token);
  };
  const signOutHandler = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  const openWelcomeHandler = booleanString => {
    setOpenWelcome(booleanString);
    localStorage.setItem('openWelcome', booleanString);
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
    openWelcome: openWelcome,
    isSignedIn: userIsSignedIn,
    signIn: signInHandler,
    signOut: signOutHandler,
    openWelcomeHandler,
    currentUserId,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
