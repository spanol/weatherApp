export default function getForecast({setState,setBackground,id}) {
    return fetch(
      `https://api.openweathermap.org/data/2.5/forecast?id=${id}&units=metric&APPID=b1502fce42dd4c060eb30b394654bc1d`
    )
      .then((response) => response.json())
      .then((data) => {
        setState(data);
        setBackground(checkTemp)
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }