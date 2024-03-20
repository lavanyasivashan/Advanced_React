import React from "react";
import NavBar from "./NavBar";
import Hero from '../pages/hero';
import Featured from "./featured";
import "../assets/css/dashboard.css"; 

function Dashboard() {
  return (
    <div className="dashboard-container">
      <NavBar className="navbar" />
      
        <Hero />
     
      
    </div>
  );
}

export default Dashboard;
