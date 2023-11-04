import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Hero = ({ className }) => {
  return (
    <h1 className={className}>
      <Link to="/">FakeShop</Link>
    </h1>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;
