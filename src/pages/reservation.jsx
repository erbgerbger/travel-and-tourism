import React from "react";
import "./reservation.css";

const reservation = () => {
  return (
    <div className="reservation">
      <header>
        <div class="container">
          <h1>Make a Reservation</h1>
        </div>
      </header>

      <section class="reservation-form">
        <div class="container">
          <h2>Select a Place for Reservation</h2>

          <form id="reservationForm">
            <div class="form-group">
              <label for="place">Choose a Place</label>
              <select id="place" name="place" required>
                <option value="" disabled selected>
                  Select your place
                </option>
                <option value="hotel">Hotel</option>
                <option value="event">Event</option>
                <option value="service">Service</option>
              </select>
            </div>

            <div class="form-group">
              <label for="date">Reservation Date</label>
              <input type="date" id="date" required />
            </div>

            <div class="form-group">
              <label for="time">Reservation Time</label>
              <input type="time" id="time" required />
            </div>

            <div class="form-group">
              <label for="guests">Number of Guests</label>
              <input type="number" id="guests" min="1" max="20" required />
            </div>

            <button type="submit">Submit Reservation</button>
          </form>

          <div id="confirmationMessage" class="hidden">
            🎉 Your reservation is confirmed!
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2025 BookEasy</p>
      </footer>
    </div>
  );
};

export default reservation;
