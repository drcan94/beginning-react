import React, { useState, createContext, useContext } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {

    const [user] = useState({
        username: "john134",
        name: "John Doe",
        email: "john@example.com",
        dob: "01/01/2000",
    });
  return (
    <UserContext.Provider
      value={{user}}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};

export default UserProvider;
