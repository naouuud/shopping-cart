import { useState, useEffect } from "react";

const useData = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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
  }, [url]);

  return { data, error, loading };
};

export default useData;
