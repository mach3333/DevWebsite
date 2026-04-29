import React from 'react'
import "./Homebar.css"
import { useNavigate } from 'react-router-dom';
import {contact, about, projects, bar} from "../../assets"

const Homebar = () => {
  const navigate = useNavigate();

  const goToProjects = () => {
    navigate('/Projects');
  };

    const goToAbout = () => {
    navigate('/About');
  };
    const goToContact = () => {
    navigate('/Contact');
  };

  return (
    
    <div className="rim">
      <img src={bar} alt="contact" />
      <div className="icons">
      <button className='bar_button' onClick={goToContact}>
        <span className="tooltiptext">Contact</span>
        <img src={contact} alt="contact" />
      </button>
        <button className='bar_button' onClick={goToAbout}>
           <span className="tooltiptext">About</span>
        <img src={about} alt="about" />
      </button>
        <button className='bar_button' onClick={goToProjects}>
           <span className="tooltiptext">Projects</span>
        <img src={projects} alt="projects" />
      </button>
      </div>
    </div>
  )
}

export default Homebar