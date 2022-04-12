import { useBackground } from "../../Context/WeatherContext";
import { Socials } from "./Socials";

export default function Footer() {
  const { background } = useBackground();

  return (
    <footer
      style={{ backgroundColor: background }}
      className="flex pagecontainer footer"
    >
      <Socials />
    </footer>
  );
}
