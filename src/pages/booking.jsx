import React, { useState } from "react";
import "./booking.css";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    people: 1,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In real app, send formData to backend here
    setSubmitted(true);
  };

  return (
    <div className="booking-container">
      <h2>Make a Reservation</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="booking-form">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Date:
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Time:
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Number of People:
            <input
              type="number"
              name="people"
              min="1"
              max="20"
              value={formData.people}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit">Book Now</button>
        </form>
      ) : (
        <div className="confirmation">
          <h3>Reservation Confirmed!</h3>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Date:</strong> {formData.date}</p>
          <p><strong>Time:</strong> {formData.time}</p>
          <p><strong>People:</strong> {formData.people}</p>
        </div>
      )}
    </div>
  );
};

export default Booking;
