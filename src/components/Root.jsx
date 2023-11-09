import { StyledHero } from "../styled/StyledHero";
import { StyledNavBar } from "../styled/StyledNavBar";
import { StyledFooter } from "../styled/StyledFooter";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <StyledHero />
      <StyledNavBar />
      <Outlet />
      <StyledFooter />
    </>
  );
};

Root.propTypes = {
  children: PropTypes.element,
};

export default Root;
