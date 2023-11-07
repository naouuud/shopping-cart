import { useState } from "react";
import MainRouter from "./MainRouter";
import DataContext from "./DataContext";

const DataProvider = () => {
  const [cart, setCart] = useState({});
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const value = {
    cart,
    setCart,
    data,
    setData: setData,
    error,
    setError: setError,
    loading,
    setLoading: setLoading,
  };

  return (
    <DataContext.Provider value={value}>
      <MainRouter />
    </DataContext.Provider>
  );
};

export default DataProvider;
