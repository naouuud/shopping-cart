import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeView from "./HomeView";
import CartView from "./CartView";

const MainRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeView />,
    },
    {
      path: "/cart",
      element: <CartView />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default MainRouter;
