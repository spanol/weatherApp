import Wheater from "./Wheater";
import { useForecast, useWheater } from "../../Context/WheaterContext";
import { useEffect } from "react";

const WheaterContainer = () => {
  const { wheater } = useWheater();
  const { forecast, setForecast } = useForecast();

  useEffect(() => {
    function getForecast(id) {
      return fetch(
        `https://api.openweathermap.org/data/2.5/forecast?id=${id}&units=metric&APPID=b1502fce42dd4c060eb30b394654bc1d`
      )
        .then((response) => response.json())
        .then((data) => {
          setForecast(data);
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

  if (wheater === null) return <AwaitSearch />;

  return <Wheater wheater={wheater} forecast={forecast} />;
};

export default WheaterContainer;
