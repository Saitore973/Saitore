import React from 'react';
import "./Portfolio.css"
import img1 from './images/logo-removebg-preview.png'
import "bootstrap/js/src/collapse.js";
import { FaGithub,FaTwitter,FaLinkedin } from "react-icons/fa";



export default function portfolio(){
    return (
        <div className="portfolio">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">

        <div class="container-fluid">
            <img src={img1} alt="saitore logo" className="img-responsive logo" width="100px" />
       
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto home mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Portfolio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">contact</a>
        </li>
       
        
       
      </ul>
      <ul class="navbar-nav me-auto socials mb-2 mb-lg-0">
         <li class="nav-item">
          <a class="nav-link" href="https://github.com/Saitore973"><FaGithub />  </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://twitter.com/SaitoreCodes"><FaTwitter /></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://www.linkedin.com/in/virginia-saitore-7a6b90191/"><FaLinkedin /></a>
        </li>
      </ul>
      <a href="https://drive.google.com/file/d/1yfvIjrp7Xs-JoDCfOcdMlViDiQSlS7iV/view?usp=sharing">
       <button class="resume">
      Resume
  </button></a>
      
    </div>
    
  </div>
  
</nav>
        </div>
    )
}