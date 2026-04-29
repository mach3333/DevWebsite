import "./Fish.css"
import { juvenile, fingerling } from "../../assets"

const fishType = {
  juvenile,
  fingerling
};

const Fish = ({ type = "juvenile", className = "", style}) => {
  return (
    <div
      className={`fish ${className}`}
      style={{
        ...style,
        backgroundImage: `url(${fishType[type]})`
      }}
    />
  );
};


export default Fish