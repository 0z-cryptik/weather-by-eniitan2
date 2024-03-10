import { useList } from "../hooks/stateProvider";
import ToggleButton from "react-toggle-button";

export const NavBar = () => {
  const {
    activeCategory,
    setActiveCategory,
    setLoading,
    setSearchTerm,
    fahrenheit,
    setFahrenheit,
    setError,
    fetch
  } = useList();

  const searchWeather = (place) => {
    setActiveCategory(place);
    setError("");
    setLoading(true);
    setSearchTerm(place);
    fetch(place);
  };

  return (
    <nav className="md:text-2xl text-sm flex flex-row min-[100px]:max-md:bg-[#004346] md:justify-center relative py-6">
      <span
        onClick={() => searchWeather("tokyo")}
        className={`md:mr-[3rem] min-[300px]:mx-[1rem] mx-2 ${
          activeCategory == "tokyo"
            ? "md:text-[#004346] text-[rgb(62,130,247)]"
            : "md:hover:text-[#004346]"
        } cursor-pointer`}>
        Tokyo
      </span>

      <span
        onClick={() => searchWeather("london")}
        className={`mr-[3rem] hidden lg:flex ${
          activeCategory == "london"
            ? "text-[#004346]"
            : "hover:text-[#004346]"
        } cursor-pointer`}>
        London
      </span>

      <span
        onClick={() => searchWeather("paris")}
        className={`md:mr-[3rem] min-[300px]:mr-[1rem] mr-2 ${
          activeCategory == "paris"
            ? "md:text-[#004346] text-[rgb(62,130,247)]"
            : "md:hover:text-[#004346]"
        } cursor-pointer`}>
        Paris
      </span>

      <span
        onClick={() => searchWeather("sydney")}
        className={`md:mr-[3rem] min-[300px]:mr-[1rem] mr-2 ${
          activeCategory == "sydney"
            ? "md:text-[#004346] text-[rgb(62,130,247)]"
            : "md:hover:text-[#004346]"
        } cursor-pointer`}>
        Sydney
      </span>

      <span
        onClick={() => searchWeather("istanbul")}
        className={`md:mr-[3rem] ${
          activeCategory == "istanbul"
            ? "md:text-[#004346] text-[rgb(62,130,247)]"
            : "hover:text-[#004346]"
        } cursor-pointer`}>
        Istanbul
      </span>

      <span className="absolute right-1 min-[300px]:right-3 top-6 md:right-[5%] md:top-7">
        <ToggleButton
          value={fahrenheit}
          onToggle={() => setFahrenheit(!fahrenheit)}
          activeLabel="ºC"
          inactiveLabel="ºF"
          colors={{
            activeThumb: {
              base: "rgb(62,130,247)"
            },
            inactiveThumb: {
              base: "rgb(62,130,247)"
            },
            active: {
              base: "rgb(65,66,68)",
              hover: "rgb(65,66,68)"
            },
            inactive: {
              base: "rgb(65,66,68)",
              hover: "rgb(65,66,68)"
            }
          }}
        />
      </span>
    </nav>
  );
};
