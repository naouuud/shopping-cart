import { useEffect, useContext } from "react";
import DataContext from "./DataContext";

const FetchData = (url) => {
  const { setData, setError, setLoading } = useContext(DataContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await (await fetch(url)).json();
        setData(data);
        setError(null);
      } catch (error) {
        setError(new Error("Data fetching failed"));
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  });

  return;
};

export default FetchData;
