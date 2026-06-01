// src/components/Analytics.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Analytics() {
  const location = useLocation();

  useEffect(() => {
    window.gtag?.("config", "G-Z2F8G1PK1D", {
      page_path: "/portfolio/#" + location.pathname,
    });
  }, [location]);

  return null;
}

export default Analytics;