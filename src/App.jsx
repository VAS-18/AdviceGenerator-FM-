import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="Card">
      <div className="Top-card">
        <p className="Heading">A D V I C E # 1 1 7</p>
        <p className="Content">
          "It is easy to sit up and take notice, whats difficult is getting up
          and taking action."
        </p>
      </div>
      <div className="Bottom-card">
        <div className="Line1"></div>
        <svg
          className="Divider"
          width="444"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fill-rule="evenodd">
            <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
            <g transform="translate(212)" fill="#CEE3E9">
              <rect width="6" height="16" rx="3" />
              <rect x="14" width="6" height="16" rx="3" />
            </g>
          </g>
        </svg>
        <div className="Line2"></div>
      </div>
      <div className="Button">
            <div className="Circle">
              
            </div>
            <img src="/images/icon-dice.svg" alt="Dice" />
          </div>
    </div>
  );
}

export default App;
