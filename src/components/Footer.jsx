import PropTypes from "prop-types";

const Footer = ({ className }) => {
  return <div className={className}>This is a footer</div>;
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
