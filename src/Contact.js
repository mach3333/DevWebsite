import { useNavigate } from 'react-router-dom';
import { back, bubble2 } from "./assets"
import { motion } from "motion/react"
import "./Contact.css"

function Contact() {
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
          Contact</button>
      <div className="container2">
        <div className="bubble">
          <img src={bubble2} alt="bubble" />
          <div className="textbox">
            <div className="text2"> My preferred contact method is through email at <br></br>
              <span className="highlight">mhirakawa04@gmail.com</span>
            </div>
            <div className="text2"> <br></br>Connect on LinkedIn! <br></br>
              <a href="https://www.linkedin.com/in/marissa-hirakawa" target="_blank" rel="noreferrer">
                <span className="highlight">linkedin.com/in/marissa-hirakawa</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
</motion.div>
  );
}

export default Contact;