const Forecast = ({ forecast, temperature }) => {
  const tempColor =
    temperature > 25
      ? "bg-orange-100"
      : temperature < 10
      ? "bg-blue-100"
      : "bg-green-100";

  return (
    <div className={`${tempColor} rounded-xl p-4 mt-6 shadow-md`}>
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Previsão para os próximos dias
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {forecast &&
          forecast?.list?.slice(0, 4).map(({ dt_txt, main, weather }, idx) => (
            <div
              className={`bg-white bg-opacity-70 rounded-lg p-3 text-center shadow-sm hover:shadow-md transition-shadow ${
                idx === 0 ? "border-2 border-blue-300" : ""
              }`}
              key={idx}
            >
              <p className="font-medium text-gray-700 mb-2">
                {dateFormater(dt_txt)}
              </p>
              {weather.map(({ icon }, iconIdx) => (
                <img
                  key={iconIdx}
                  className="w-16 h-16 mx-auto"
                  src={`https://openweathermap.org/img/w/${icon}.png`}
                  alt="weather icon"
                />
              ))}
              <p className="text-sm text-gray-600 mt-2">
                Min: {Math.round(main.temp_min)}°C
              </p>
              <p className="text-sm text-gray-600">
                Max: {Math.round(main.temp_max)}°C
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export const dateFormater = (date) => {
  const [datePart, timePart] = date.split(" ");
  const [year, month, day] = datePart.split("-");
  return `${day}/${month}/${year} às ${timePart.slice(0, 5)}`;
};

export default Forecast;
