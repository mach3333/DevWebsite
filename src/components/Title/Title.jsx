import "./Title.css"
import { bubble,  dark, triangle } from "../../assets"
//light asset exists ^^ when dark mode added

const Title = () => {
  return (
    <div>
      <div className="container">
        <button className="modes" id="mode_toggle">
          <span className="tooltiptext">Darkmode in progress...</span>
          <img src={dark} alt="light_mode" />
        </button>
        <div className="top_bit">
          <div>software developer and designer</div>
        </div>
        <div className="bubble">
          <img src={bubble} alt="bubble" />
          <div className="text"> hi, it's <span className="highlight">marissa</span>...</div>
        </div>
        <img className="triangle" src={triangle} alt="triangle" />
      </div>
    </div>
  )
}

export default Title