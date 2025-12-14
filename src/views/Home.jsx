import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <nav>
        <div>Raditya Dahal</div>
        <div>
          <Link to="/login">Login | Register</Link>
        </div>
      </nav>
  <h1>Welcome to my React Forms demo</h1>
  <p>This is a small demo of controlled forms using React hooks — welcome!</p>
  <h4>Click the Login | Register link in the navbar to continue.</h4>
    </div>
  );
};

export default Home;
