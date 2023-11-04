import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Checkout from "./Checkout";

const MainRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/cart",
      element: <Checkout />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default MainRouter;
