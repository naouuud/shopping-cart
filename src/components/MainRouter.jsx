import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Root from "./Root";
import ErrorView from "./ErrorView";
import ShopLoader from "./ShopLoader";
import ShopContainer from "./ShopContainer";
import ProductFilter from "./ProductFilter";
import Cart from "./Cart";
import CartError from "./CartError";

const MainRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorView />,
      children: [
        {
          path: "",
          element: <ShopLoader />,
          children: [
            {
              path: "",
              element: <ShopContainer />,
            },
            {
              path: "products/:id",
              element: <ProductFilter />,
            },
          ],
        },
        {
          path: "/cart",
          element: <Cart />,
          errorElement: <CartError />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

MainRouter.propTypes = {
  cart: PropTypes.array,
  setCart: PropTypes.func,
};

export default MainRouter;
