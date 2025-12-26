import Home from "./Home";
import Mhome from "../mobile/Mhome.jsx";

export default function HomeSwitcher() {
  const isMobile = window.innerWidth <= 768;
  return isMobile ? <Mhome /> : <Home />;
}
