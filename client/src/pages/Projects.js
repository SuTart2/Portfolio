import React from 'react'
import "./styles.css"
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <a href="http://127.0.0.1:5500/portfolio/mini%20project/index.html"> <button>Memory Game</button> </a>
      <a href="../../public/bootstrap_project/painting1.html"> <button>Bootstrap paintings</button> </a>
      <a href=""><button>Weather App</button></a>
    </div>
  );
}