export default function ContactListItem({ text, link, icon }) {
  return (
    <div>
      <a href={link} target="_blank" rel="noreferrer">
        <i className={icon}></i>
        <span>{text}</span>
      </a>
    </div>
  );
}
