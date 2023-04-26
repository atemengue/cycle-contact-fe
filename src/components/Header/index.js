import { Container, InputSearchContainer } from "./styles";

import logo from "../../assets/images/logo.svg";
import ContactList from "../ContactsList";

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="MyContacts" />

      <InputSearchContainer>
        <input type="text" placeholder="Recherche un contact" />
      </InputSearchContainer>
      <ContactList />
    </Container>
  );
}
