import { useEffect, useState } from "react";
import Home from "./Home";
import Mhome from "../mobile/Mhone";

export default function HomeSwitcher() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkDevice(); // initial check
    window.addEventListener("resize", checkDevice);

    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, []);

  // 🔥 Mobile gets Mhome, Desktop gets Home
  return isMobile ? <Mhome /> : <Home />;
}
