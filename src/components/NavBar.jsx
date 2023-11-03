import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavBar = ({ className }) => {
  return (
    <nav className={className}>
      <ul>
        <li>
          <Link to="/">Shop</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

NavBar.propTypes = {
  className: PropTypes.string,
};

export default NavBar;
