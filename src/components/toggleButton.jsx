import ToggleButton from "react-toggle-button";
import { useList } from "../hooks/stateProvider";

export const MyToggleButton = () => {
  const { fahrenheit, setFahrenheit } = useList();
  
  return (
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
  );
};
