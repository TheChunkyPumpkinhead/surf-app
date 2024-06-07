import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import surfjotz1 from "../images/surfjotz1.jpeg";

export default function LandingPage(props) {
  return (
    <main>
      <div className="landing-page">
        <div className="landing-page-header">
          <h1 className="landing-h1">Howzit !</h1>

          <img src={surfjotz1} alt="man on beach" />
        </div>
        <div className="landing-page-content">
          <p>Welcome to Surf Jots. </p>
          <p>It's time to write about it. </p>

          <button className="Landing-button" type="submit">
            {" "}
            <Link to="/about">Click to Enter</Link>
          </button>
        </div>
      </div>
    </main>
  );
}
