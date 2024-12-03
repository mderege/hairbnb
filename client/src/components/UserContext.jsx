import React, { createContext, useContext, useState } from "react";

// Create UserContext
export const UserContext = createContext(); // Export UserContext here

// Create a custom hook to use the UserContext
export const useUser = () => useContext(UserContext);

// Create a UserProvider to wrap your app and provide user context
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
