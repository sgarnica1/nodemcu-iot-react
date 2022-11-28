import { useEffect, useState } from "react";

function useFetchMultiple(endpoints, callback) {
  const [data, setData] = useState([]);
  const [refetch, setRefetch] = useState(true);
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
    if (refetch === true) fetchData();
  }, [callback, isLoading, refetch]);

  return { isLoading, data, error, refetch, setRefetch };
}

export { useFetchMultiple };
