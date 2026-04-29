import "./Tag.css"

const Tag = ({ skill }) => {
  return (
    <div className="tag">
      <div className="tagbox">
        <span>{skill}</span>
      </div>
    </div>
  );
};

export default Tag;