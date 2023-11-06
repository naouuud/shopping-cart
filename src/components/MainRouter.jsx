import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PropTypes from "prop-types";
import HomeView from "./HomeView";
import CartView from "./CartView";
import ErrorView from "./ErrorView";
// import ProductContainer from "./ProductContainer";
import ShopContainer from "./ShopContainer";
import ProductFilter from "./ProductFilter";

const MainRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeView />,
      errorElement: <ErrorView />,
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
      element: <CartView />,
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
