// Home.jsx
import { useNavigate } from 'react-router-dom';
import "./Projects.css"
import { Project } from "./components"
import { back } from "./assets"
import projects from "./projectsData"
import { motion } from "motion/react"

function Projects() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/'); // programmatic navigation
  };

  return (
    <motion.div
      initial={{ opacity: .5, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div>
        <div className="containerOver">
          <button onClick={goToHome} className="backbutton">
            <img src={back} alt="back" />
            Projects</button>
          <div className="containerMenu">
            {projects.map((p, i) => (
              <Project
                key={i}
                title={p.title}
                description={p.description}
                link={p.link}
                img={p.img}
              />
            ))}
          </div>
        </div>
        <br/>
        <a href="https://github.com/mach3333" target="_blank">Github</a>
        <div className='highlight2'>
That's all for now!
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;