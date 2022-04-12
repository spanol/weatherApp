import "./App.css";
import Header from "./components/header/Header";
import WeatherProvider from "./Context/WeatherContext";
import WheaterContainer from "./components/weather/WeatherContainer";
import Footer from "./components/footer/Footer";
import ErrorComponent from "./components/error/error";
function App() {
  return (
    <WeatherProvider>
      <div className="App">
        <Header />
        {Response.code === 404 ? <ErrorComponent/> : <WheaterContainer />}
        <Footer />
      </div>
    </WeatherProvider>
  );
}

export default App;
