import PropTypes from "prop-types";

const LoadingPage = ({ item }) => {
  return <h1>The {item} is loading...</h1>;
};

LoadingPage.propTypes = {
  item: PropTypes.string,
};

export default LoadingPage;
