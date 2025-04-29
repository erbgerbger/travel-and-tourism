import React from "react";
import "./state.css"; // Optional for styling
import { useNavigate } from "react-router-dom"; // If using React Router

const states = [
  { name: "VAISHNO DEVI", image: "vai.jpeg" },
  { name: "AMAR NATH", image: "amar.jpg" },
  { name: "SONAMARG", image: "sona.jpeg" },
  { name: "SRI NAGAR", image: "nagar.jpg" },
  { name: "GULMARG", image: "gul.jpg" },
  { name: "PAHALGAM", image: "paha.jpeg" },
 
  
  
  // Add more states as needed
];

const State = () => {
  const navigate = useNavigate();

  const handleStateClick = (stateName) => {
    navigate(`/reservation/${stateName.toLowerCase()}`);
  };

  return (
    <div className="states-page">
      <h2>Select Your Destination</h2>
      <div className="states-grid">
        {states.map((state) => (
          <div
            key={state.name}
            className="state-card"
            onClick={() => handleStateClick(state.name)}
          >
            <img src={state.image} alt={state.name} />
            <h3>{state.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default State;
