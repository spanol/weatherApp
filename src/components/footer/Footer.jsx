import { useBackground } from "../../Context/WeatherContext";
import { Socials } from "./Socials";

export default function Footer() {
  return (
    <footer className="w-full h-16 flex justify-center items-center bg-gray-800 text-white">
      <Socials />
    </footer>
  );
}
