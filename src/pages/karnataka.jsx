import React from "react";
import "./state.css"; // Optional for styling
import { useNavigate } from "react-router-dom"; // If using React Router

const states = [
  { name: "MYSURU", image: "./mysore.jpg" },
  { name: "BENGALURU", image: "./bang.jpeg" },
  { name: "BELAGAVI", image: "falls.jpg" },
  { name: "MANGALURU", image: "mang.jpg" },
  { name: "COORG", image: "coorg.jpg" },
  { name: "UDUPI", image: "kish.jpg" },
  { name: "DANDELI", image: "dandeli.jpg" },
  { name: "GOKARNA", image: "gok.jpg" },
  { name: "HUBLI", image: "matha.jpg" },
  { name: "SHIVAMOGGA", image: "jog.jpg" },
  { name: "DHARMASTHALA", image: "gowda.jpg" },
  { name: "MADIKERI", image: "madikeri.jpg" },
  { name: "HAMPI", image: "ham.jpeg" },
  
  
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
