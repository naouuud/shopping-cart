import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Shopping from "./Shopping";
import Checkout from "./Checkout";

const MainRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Shopping />,
    },
    {
      path: "/cart",
      element: <Checkout />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default MainRouter;
