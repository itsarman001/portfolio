import React, { createContext, useContext } from "react";
import {USER, NAVIGATION_LINKS, SOCIAL_LINKS, WORKS, TECH_STACK } from './constants'

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  
  return <UserContext.Provider value={{USER, NAVIGATION_LINKS, SOCIAL_LINKS, WORKS, TECH_STACK}}>{children}</UserContext.Provider>;
};
