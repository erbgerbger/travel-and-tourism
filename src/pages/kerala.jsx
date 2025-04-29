import React from "react";
import "./state.css"; // Optional for styling
import { useNavigate } from "react-router-dom"; // If using React Router

const states = [
  { name: "MUNNAR", image: "./munnar.jpg" },
  { name: "WAYANAD", image: "./way.jpeg" },
  { name: "KOCHI", image: "koc.jpg" },
  { name: "ALLEPPEY", image: "all.jpg" },
  { name: "KOVALAM", image: "kol.jpeg" },
  
  
  
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
