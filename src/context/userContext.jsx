import React, { useContext } from "react";
import {USER, NAVIGATION_LINKS, SOCIAL_LINKS, WORKS} from './constants'

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  
  return <UserContext.Provider value={{USER, NAVIGATION_LINKS, SOCIAL_LINKS, WORKS}}>{children}</UserContext.Provider>;
};
