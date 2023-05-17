import NavigationItem from "./NavigationItem";

import {
  faUser,
  faLaptop,
  faList,
  faBlog,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

import "../../assets/components/_navigation.scss";

export default function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <NavigationItem icon={faHouse} text="Home" />
        <NavigationItem icon={faUser} text="About" />
        <NavigationItem icon={faLaptop} text="Projects" />
        <NavigationItem icon={faList} text="Resume" />
        <NavigationItem icon={faBlog} text="My Blog" />
      </ul>
    </nav>
  );
}
