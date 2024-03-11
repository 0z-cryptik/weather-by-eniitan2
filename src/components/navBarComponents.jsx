import { useList } from "../hooks/stateProvider";

export const NavBarLink = ({ city }) => {
  const {
    setActiveCategory,
    setError,
    setSearchTerm,
    setLoading,
    fetch,
    activeCategory
  } = useList();

  const searchWeather = (place) => {
    setActiveCategory(place);
    setError("");
    setLoading(true);
    setSearchTerm(place);
    fetch(place);
  };

  let primaryStyling;

  if (city === "Tokyo") {
    primaryStyling = "md:mr-[3rem] min-[300px]:mx-[1rem] mx-2";
  } else if (city === "London") {
    primaryStyling = "mr-[3rem] hidden lg:flex";
  } else if (city === "Paris") {
    primaryStyling = "md:mr-[3rem] min-[300px]:mr-[1rem] mr-2";
  } else if (city === "Sydney") {
    primaryStyling = "md:mr-[3rem] min-[300px]:mr-[1rem] mr-2";
  } else if (city === "Istanbul") {
    primaryStyling = "md:mr-[3rem]";
  }

  return (
    <span
      onClick={() => searchWeather(city)}
      className={`${primaryStyling} ${
        activeCategory == city
          ? "md:text-[#004346] text-[rgb(62,130,247)]"
          : "md:hover:text-[#004346]"
      } cursor-pointer`}>
      {city}
    </span>
  );
};
