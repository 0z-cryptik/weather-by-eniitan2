import { MyToggleButton } from "./toggleButton";
import { NavBarLink } from "./navBarComponents";

export const NavBar = () => {
  return (
    <nav className="md:text-2xl text-sm flex flex-row min-[100px]:max-md:bg-[#004346] md:justify-center relative py-6">
      <NavBarLink city={"Tokyo"} />

      <NavBarLink city={"London"} />

      <NavBarLink city={"Paris"} />

      <NavBarLink city={"Sydney"} />

      <NavBarLink city={"Istanbul"} />

      <MyToggleButton />
    </nav>
  );
};
