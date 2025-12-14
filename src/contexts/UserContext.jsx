import { createContext, useState } from "react";
import { useNavigate } from "react-router";

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (credentials) => {
    try {
      // For now just set credentials as user
      setUser({ username: credentials.username });
      localStorage.setItem("token", "dummy-token");
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <UserContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
