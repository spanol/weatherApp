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

  const wheaterClass = (temperature) => {
    switch (temperature) {
      case temperature > 25:
        return "container warm";
      case temperature < 25:
        return "container cold";
      default:
        return "container";
    }
  };

  // useEffect(()=>{
  //   console.log()
  // })

  const AwaitSearch = () => {
    return <h1>Para iniciar, digite uma cidade</h1>;
  };

  return (
    <div
      className={wheater?.main.feels_like > 25 ? "container warm" : "container cold"}
    >
      {wheater === null ? (
        <AwaitSearch />
      ) : (
        <Wheater wheater={wheater} forecast={forecast} />
      )}
    </div>
  );
};

export default WheaterContainer;
