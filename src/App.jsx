import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Reservation from "./pages/reservation";
import "./App.css";
import State from "./pages/state";
import Kerala from "./pages/kerala";
import Karnataka from "./pages/karnataka";
import Goa from "./pages/goa";
import Maharashtra from "./pages/maharashtra";
import AndhraPradesh from "./pages/andhra pradesh";
import JK from "./pages/jk";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <React.Fragment>
          <nav className="navbar">
            <div className="logo">
              <NavLink to={"/contact"}></NavLink>
            </div>
            <div className="navlinks">
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/about"}>About</NavLink>
              <NavLink to={"/contact"}>Contact</NavLink>
              <NavLink to={"/reservation"}>Reservation</NavLink>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/state" element={<State />} />
            <Route path="/kerala" element={<Kerala />} />
            <Route path="/karnataka" element={<Karnataka />} />
            <Route path="/goa" element={<Goa />} />
            <Route path="/maharashtra" element={<Maharashtra />} />
            <Route path="/andhra pradesh" element={<AndhraPradesh />} />
            <Route path="/jk" element={<JK />} />
            
          </Routes>
        </React.Fragment>
      </BrowserRouter>
    </div>
  );
}
export default App;
