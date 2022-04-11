import Wheater from "./Wheater";
import { useForecast, useWheater } from "../../Context/WheaterContext";
import { useEffect, useState } from "react";

const WheaterContainer = () => {
  const [background, setBackground] = useState("container");
  const { wheater } = useWheater();
  const { forecast, setForecast } = useForecast();
  const checkTemperature = wheater?.main.feels_like > 25 ? "container warm" : "container cold";

  useEffect(() => {
    function getForecast(id) {
      return fetch(
        `https://api.openweathermap.org/data/2.5/forecast?id=${id}&units=metric&APPID=b1502fce42dd4c060eb30b394654bc1d`
      )
        .then((response) => response.json())
        .then((data) => {
          setForecast(data);
          setBackground(checkTemperature)
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    if (wheater != null) {
      getForecast(wheater.id);
    }
  }, [wheater]);

  const AwaitSearch = () => {
    return <h1>Para iniciar, digite uma cidade</h1>;
  };

  return (
    <div className={background}>
      {wheater === null ? (
        <AwaitSearch />
      ) : (
        <Wheater wheater={wheater} forecast={forecast} />
      )}
    </div>
  );
};

export default WheaterContainer;
