import TextSlider from "../components/text-typing/TextTyping";
import ContactList from "../components/contact-list/ContactList";

import "../assets/pages/_main.scss";

export default function Main() {
  return (
    <main className="main">
      <TextSlider />
      <ContactList></ContactList>
    </main>
  );
}
