import React from "react";
import "./state.css"; // Optional for styling
import { useNavigate } from "react-router-dom"; // If using React Router

const states = [
  { name: "KARNATAKA", image: "./mysore.jpg" },
  { name: "KERALA", image: "./kerala.webp" },
  { name: "GOA", image: "goa.png" },
  { name: "MAHARASHTRA", image: "maharastra.jpeg" },
  { name: "ANDHRA PRADESH", image: "TIR.jpg" },
  { name: "JK", image: "ladakh.jpeg" },
  { name: "UTTARAKHAND", image: "nath2.jpg" },
  { name: "UTTAR PRADESH", image: "kashi.jpg" },
  { name: "TAMIL NADU", image: "ooty.jpg" },
  { name: "NEW DELHI", image: "gate.jpeg" },
  { name: "GUJARAT", image: "guj.jpg" },
  { name: "RAJASTHAN", image: "raj.jpg" },
  
  // Add more states as needed
];

const State = () => {
  const navigate = useNavigate();

  const handleStateClick = (stateName) => {
    navigate(`/${stateName.toLowerCase()}`);
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
