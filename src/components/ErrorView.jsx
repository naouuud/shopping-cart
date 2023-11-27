import { Link } from "react-router-dom";

const ErrorView = () => {
  return (
    <h1>
      Apologies shopper, we are having a hard time finding the page you
      requested! Please <Link to="/">return to the homepage</Link> and try
      again.
    </h1>
  );
};

export default ErrorView;
