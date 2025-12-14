import { Link } from "react-router-dom";
import { useUserContext } from "../hooks/contextHooks";

const Layout = ({ children }) => {
  const { user, handleLogout } = useUserContext();

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        {!user && <Link to="/login">Login</Link>}
        {user && <Link to="/logout" onClick={handleLogout}>Logout</Link>}
      </nav>
      <main>{children}</main>
    </>
  );
};

export default Layout;
