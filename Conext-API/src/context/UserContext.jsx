import React, { createContext, useState } from 'react';

// Create a context
const MyContext = createContext();


// Create a provider component
const MyProvider = ({children}) => {
  const [user, setUser] = useState('');

  return (
    <MyContext.Provider value={{ user, setUser }}>
      {children}
    </MyContext.Provider>
  );
};


export { MyContext, MyProvider };
