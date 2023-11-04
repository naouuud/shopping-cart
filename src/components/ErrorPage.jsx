import PropTypes from "prop-types";

const ErrorPage = ({ error }) => {
  console.log(error);
  return (
    <h1>Apologies, the shop has failed to load! Please refresh the page.</h1>
  );
};

ErrorPage.propTypes = {
  error: PropTypes.object,
};

export default ErrorPage;
