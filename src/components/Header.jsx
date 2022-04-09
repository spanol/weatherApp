import { useForecast, useSearch } from "../Context/WheaterContext";
import { useWheater } from "../Context/WheaterContext";
import axios from "axios";

const Header = () => {
  const { search, setSearch } = useSearch();
  const { wheater, setWheater } = useWheater();
  const { forecast, setForecast } = useForecast();

  const GetWheater = () => {
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&APPID=b1502fce42dd4c060eb30b394654bc1d`;
    axios
      .get(baseURL)
      .then((data) => {
        setWheater(data.data);
        console.log(data.data);
      })
      .catch((err) => console.log(err));
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(search);
    GetWheater();
  };

  return (
    <nav className="flex header">
      <form className="flex  form" onSubmit={handleOnSubmit}>
      <input
        value={search}
        className="input "
        type="text"
        placeholder="Search for place..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="fa fa-search search"></button>
    </form>
    </nav>
  );
};

export default Header;
