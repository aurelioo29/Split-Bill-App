import PropTypes from "prop-types";
import bgImage from "../assets/bg.png";

const Background = ({ children }) => {
  return (
    <div className="relative w-screen h-screen">
      {/* Background Image */}
      <img
        src={bgImage}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content Wrapper */}
      <div className="relative z-10">
        {/* Render Children */}
        {children}
      </div>
    </div>
  );
};

Background.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Background;
