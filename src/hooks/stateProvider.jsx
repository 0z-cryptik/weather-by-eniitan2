import React, { useContext, createContext, useState } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import axios from "axios";

const ListContext = createContext();
export const useList = () => useContext(ListContext);

export const StateProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);
  const [activeCategory, setActiveCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [hour, setHour] = useState(0);
  const [fahrenheit, setFahrenheit] = useLocalStorage("fahrenheit", false);
  const [error, setError] = useState("");

  const reqFunc = (query) => {
    const weatherReq = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
      params: {
        q: query,
        days: "3"
      },
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com"
      }
    };

    return weatherReq;
  };

  const fetch = async (arg) => {
    try {
      const response = await axios.request(reqFunc(arg));
      setWeather(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return (
    <ListContext.Provider
      value={{
        weather,
        setWeather,
        activeCategory,
        setActiveCategory,
        searchTerm,
        setSearchTerm,
        loading,
        setLoading,
        hour,
        setHour,
        fahrenheit,
        setFahrenheit,
        error,
        setError,
        fetch
      }}>
      {children}
    </ListContext.Provider>
  );
};
