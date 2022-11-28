import { useEffect } from "react";
import { config } from "../../config/config";
import { HomeHeader } from "./components/HomeHeader";
import { HomeBody } from "./components/HomeBody";
import { useFetchMultiple } from "../../hooks/useFetchMultiple";
import { useTempHum } from "../../hooks/useTempHum";
import "./home.scss";

const Home = () => {
  // FETCH DATA
  const { isLoading, data, error, refetch, setRefetch } = useFetchMultiple([
    `${config.BASE_API_URL}/data/get`,
    `${config.BASE_API_URL}/data/params`,
  ]);

  // FORMAT HOUR
  const { formatDate } = useTempHum();
  if (!isLoading) {
    data[0] = formatDate(data[0]);
  }

  useEffect(() => {
    setInterval(() => {
      setRefetch(!refetch);
    }, 10000);
  }, [refetch]);

  const user = "Sergio";

  return (
    <div className="Home">
      {/* LOADING SKELETONS */}
      {isLoading && (
        <>
          <p> Loading... </p>
        </>
      )}

      {!isLoading && (
        <>
          {/* HEAD*/}
          <HomeHeader data={data} refetch={refetch} />
          {/* BODY */}
          <HomeBody data={data} />
        </>
      )}
    </div>
  );
};

export { Home };
