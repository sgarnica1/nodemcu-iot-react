import { useEffect, useState } from "react";

function useFetchMultiple(endpoints, callback) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    function fetchData() {
      const promises = [];
      endpoints.forEach((endpoint) => {
        promises.push(fetch(endpoint));
      });

      Promise.all(promises)
        .then((responses) => {
          const jsonPromises = responses.map((res) => {
            return res.json();
          });
          return Promise.all(jsonPromises);
        })
        .then((data) => {
          if (callback) {
            callback(data, setData, setLoading);
            if (isLoading) setLoading(false);
          } else {
            if (isLoading) setLoading(false);
            setData(data);
          }
        })
        .catch((err) => setError(err));
    }
    fetchData();
  }, [callback, isLoading]);

  return { isLoading, data, error };
}

export { useFetchMultiple };
