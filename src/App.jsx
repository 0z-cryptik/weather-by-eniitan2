import React, { useEffect } from "react";
import "./App.css";
import { useList } from "./hooks/stateProvider";
import { NoNetwork, NotFound, OtherError } from "./components/errorComps";
import { InitialLoader } from "./components/initialLoader";
import { NewSearchLoader } from "./components/newSearchLoader";
import { WeatherDetails } from "./components/weatherDetails";

const App = () => {
  const {
    weather,
    loading,
    setLoading,
    error,
    fetch
  } = useList();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, fail);
  }, []);

  const success = (position) => {
    setLoading(true);
    const location = `${position.coords.latitude},${position.coords.longitude}`;
    fetch(location);
  };

  const fail = () => {
    fetch('accra');
  };

  if (error) {
    if (error.response) {
      if (error.response.status == 400) return <NotFound />;
    }

    if (error.code) {
      if (error.code == "ERR_NETWORK") return <NoNetwork />;
    }

    return <OtherError />;
  }

  if (!weather) return <InitialLoader />;

  if (loading) return <NewSearchLoader />;

  return <WeatherDetails />;
};

export default App;
