import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUserContext must be used within UserProvider");
  return context;
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleLogin = async ({ username, password }) => {
    console.log("Login called:", username, password);
    setUser({ username });
    return { username };
  };

  const handleLogout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};
