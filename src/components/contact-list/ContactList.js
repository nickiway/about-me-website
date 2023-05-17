import ContactListItem from "./ContactListItem";
export default function ContactList() {
  return (
    <div>
      <ContactListItem
        text={"My instagram"}
        link={"/"}
        icon={"instagram"}
      ></ContactListItem>
    </div>
  );
}
