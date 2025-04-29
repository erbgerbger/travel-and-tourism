import React from "react";
import "./home.css"; // Optional CSS for styling
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="video-container">
      
      <video autoPlay loop muted className="background-video">
        <source src="./Wildlife.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay-content">
        <h1>Start Your New Destination</h1>
        <br />
        
        <NavLink to={"/state"} className="reservation-button">
          Select Your Reservation
        </NavLink>
        <br/>
        <br/>
        <NavLink to="/login" className="login-button">
          Login
        </NavLink>

        
      </div>

      <div className="video-overlay-content">
        <h1></h1>
        <p></p>
        {/* You can also add buttons, images, etc. here */}
      </div>
    </div>
  );
};

export default Home;
