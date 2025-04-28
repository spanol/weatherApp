import "./App.css";
import Header from "./components/header/Header";
import WeatherProvider from "./Context/WeatherContext";
import WheaterContainer from "./components/weather/WeatherContainer";
import Footer from "./components/footer/Footer";
import ErrorComponent from "./components/error/error";
function App() {
  return (
    <WeatherProvider>
      <Header />
      <div className="App flex min-h-screen flex-col justify-center text-center items-center">
        {Response.code === 404 ? <ErrorComponent /> : <WheaterContainer />}
      </div>
      <Footer />
    </WeatherProvider>
  );
}

export default App;
