import { useEffect, useContext } from "react";
import DataContext from "./DataContext";

const useData = (url) => {
  const { data, error, setData, setError, setLoading } =
    useContext(DataContext);

  useEffect(() => {
    let ignore = false;
    const fetchData = async () => {
      try {
        const fetchedData = await (await fetch(url)).json();
        if (!ignore) {
          setData(fetchedData);
          setError(null);
        }
      } catch (error) {
        setError(new Error("Data fetching failed"));
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    !data && !error && fetchData();
    return () => {
      ignore = true;
    };
  });
};

export default useData;
