import React from "react";
import { Outlet, Link } from "react-router-dom";
import './Home.css'

const HomePage = () => {
  return (
    <div className="my-5">
      <header>
        <h1>React Home Page</h1>
      </header>
      <main>
        <p>
          Welcome to my simple React home page! This is a basic example of a
          React project...
        </p>
        {/* <img src="https://picsum.photos/200/100" alt="Placeholder" className="mb-3" /> */}
        <ul>
          <li>
            <Link to="/"><div className="home-button">Home</div></Link>
          </li>
          <li>
            <Link to="/login"><div className="login-button">Login</div></Link>
          </li>
          <li>
            <Link to="/userdash"><div className="Dash-button" >Userdash</div></Link>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default HomePage;
