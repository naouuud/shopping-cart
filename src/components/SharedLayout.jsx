import { StyledHero } from "../styled/StyledHero";
import { StyledNavBar } from "../styled/StyledNavBar";
import { StyledFooter } from "../styled/StyledFooter";
import PropTypes from "prop-types";

const SharedLayout = ({ children }) => {
  return (
    <>
      <StyledHero />
      <StyledNavBar />
      {children}
      <StyledFooter />
    </>
  );
};

SharedLayout.propTypes = {
  children: PropTypes.element,
};

export default SharedLayout;
