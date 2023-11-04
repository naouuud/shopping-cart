import { Link } from "react-router-dom";

const ErrorView = () => {
  return (
    <div>
      Apologies shopper, we are having a hard time finding the page you
      requested! Please <Link to="/">return to the homepage</Link> and try
      again.
    </div>
  );
};

export default ErrorView;
