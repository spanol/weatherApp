import "./App.css";
import Header from "./components/header/Header";
import WeatherProvider from "./Context/WeatherContext";
import WheaterContainer from "./components/weather/WeatherContainer";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <WeatherProvider>
      <div className="App">
        <Header />
        <WheaterContainer />
        <Footer />
      </div>
    </WeatherProvider>
  );
}

export default App;
