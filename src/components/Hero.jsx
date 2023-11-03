import PropTypes from "prop-types";

const Hero = ({ className }) => {
  return <h1 className={className}>FakeShop</h1>;
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;
