import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PropTypes from "prop-types";
import HomeView from "./HomeView";
import CartView from "./CartView";
import ErrorView from "./ErrorView";
import ProductView from "./ProductView";

const MainRouter = ({ cart, setCart }) => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeView />,
      errorElement: <ErrorView />,
    },
    {
      path: "/cart",
      element: <CartView cart={cart} setCart={setCart} />,
      errorElement: <ErrorView />,
    },
    {
      path: "/products/:id",
      element: <ProductView />,
      errorElement: <ErrorView />,
    },
  ]);

  return <RouterProvider router={router} />;
};

MainRouter.propTypes = {
  cart: PropTypes.array,
  setCart: PropTypes.func,
};

export default MainRouter;
