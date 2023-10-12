import {React, createContext, useState} from 'react';

export const UserContext = createContext();

export const ContextProvider = ({children}) => {
  const [data, setData] = useState([]);
  return (
    <UserContext.Provider value={{data, setData}}>
      {children}
    </UserContext.Provider>
  );
};
