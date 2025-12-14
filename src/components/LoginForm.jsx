import { useNavigate, Link } from "react-router-dom";
import useForm from "../hooks/formHooks";
import { useUserContext } from "../hooks/contextHooks";

const LoginForm = () => {
  const { handleLogin } = useUserContext();
  const navigate = useNavigate();
  const initValues = { username: "", password: "" };

  const doLogin = async () => {
    try {
      const result = await handleLogin(inputs);
  console.log("Login result:", result);
  navigate("/");
    } catch (err) {
      alert("Login failed!");
    }
  };

  const { inputs, handleInputChange, handleSubmit } = useForm(doLogin, initValues);

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="username"
        value={inputs.username}
        onChange={handleInputChange}
        placeholder="Username"
      />
      <input
        name="password"
        type="password"
        value={inputs.password}
        onChange={handleInputChange}
        placeholder="Password"
      />
      <button type="submit">Login</button>
      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </form>
  );
};

export default LoginForm;
