import PropTypes from "prop-types";

const LoadingMessage = ({ item }) => {
  return <h1>The {item} is loading...</h1>;
};

LoadingMessage.propTypes = {
  item: PropTypes.string,
};

export default LoadingMessage;
