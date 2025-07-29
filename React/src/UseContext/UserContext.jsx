import React, { Children } from "react";
import { createContext, useState } from "react";

const UserContext = createContext();
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Ritesh",
  });
  const updateUser = (newName) => {
    setUser({ name: newName });
  };
  return(
  <div>
    <UserContext.Provider value={{ user, updateUser }}>
    {children}
  </UserContext.Provider>;
  </div>
  );
};
export { UserContext, UserProvider };
