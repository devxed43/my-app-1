/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase.utils";

// as the actual value you want to access throughout the app
export const UserContext = createContext({
  // default value
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      // if user exists, create a user document with user data
      if (user) {
        createUserDocumentFromAuth(user);
      }
      // set current user
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
