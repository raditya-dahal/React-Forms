import { useNavigate, Link } from "react-router-dom";
import useForm from "../hooks/formHooks";
import { useUserContext } from "../hooks/contextHooks";

const RegisterForm = () => {
  const { handleRegister } = useUserContext();
  const navigate = useNavigate();
  const initValues = { username: "", password: "", email: "" };

  const doRegister = async () => {
    try {
      const result = await handleRegister(inputs);
      console.log("Register result:", result);
      navigate("/login");
    } catch (err) {
      alert("Register failed!");
    }
  };

  const { inputs, handleInputChange, handleSubmit } = useForm(doRegister, initValues);

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="username"
        value={inputs.username}
        onChange={handleInputChange}
        placeholder="Username"
      />
      <input
        name="email"
        value={inputs.email}
        onChange={handleInputChange}
        placeholder="Email"
      />
      <input
        name="password"
        type="password"
        value={inputs.password}
        onChange={handleInputChange}
        placeholder="Password"
      />
      <button type="submit">Register</button>
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </form>
  );
};

export default RegisterForm;
