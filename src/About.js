import { useNavigate } from 'react-router-dom';
import { back, propic } from "./assets"
import { Tag } from "./components"
import { tags, info } from "./aboutData"
import { motion } from "motion/react"
import "./About.css"

function About() {
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
      <button onClick={goToHome} className="backbutton">
        <img src={back} alt="back" />
        About</button>
      <div className="centerAbout">
        <div className="container5">
          <div className="bubbleAbout">
            <div className="textlayout">
              <div className="profile-row">
                <img src={propic} alt="profile" className="profile-img" />

                <div className="profile-content">
               <div className="boldeder">Marissa Hirakawa</div>
               <div className="nametag">Front-end developer and designer</div>

                  <p>{info.intro}</p>

                  <div className="bolded">EDUCATION</div>
                  <span>{info.education}</span>
                  <span className='school'>| Virginia Tech (2025)</span>
                  <br></br>
                  <div className="bolded">OTHER INTERESTS</div>
                  <span>{info.interests}</span>
                </div>

              </div>
              <div className="skills-section">
                <div className="bolded">SKILLS</div>
                <div className="skillsMenu">
                  {tags.map((p) => (
                    <Tag key={p} skill={p} />
                  ))}
                </div>
                <p>For more information, view my <span className="highlight"><a href={"https://drive.google.com/file/d/1keRzuMoSA7JMcM1oBIufisS02Rwq-kZq/view?usp=sharing"}target="_blank" rel="noreferrer">resume</a></span>!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</motion.div>
  );
}

export default About;