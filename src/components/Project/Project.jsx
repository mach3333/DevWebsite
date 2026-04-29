import React from 'react'
import "./Project.css"
import { back} from "../../assets"

const Project = ({ title, description, link, img}) => {
  return (
    <div className="container3">
      <div className="bubble3">
        <img src={img} alt="img"></img>
        <div className="textbox2">
             <a href={link} target="_blank" rel="noreferrer">{title}</a> <br></br>
            <div className="text3"> {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;