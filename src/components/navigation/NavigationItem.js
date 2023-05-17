import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavigationItem(props) {
  const { icon, text } = props;
  return (
    <li className="navigation__list-item">
      <FontAwesomeIcon icon={icon} className="navigation__list-icon" />
      {text}
    </li>
  );
}
