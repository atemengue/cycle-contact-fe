import { Link } from 'react-router-dom';
import {
  Card, Container, Header,
  InputSearchContainer,
  ListContainer,
} from './styles';

import arrow from '../../assets/images/arrow.svg';
import trash from '../../assets/images/delete.svg';
import edit from '../../assets/images/edit.svg';
import Modal from '../../components/Modal';

function Home() {
  return (
    <Container>

      <InputSearchContainer>
        <input type="text" placeholder="Recherche un contact" />
      </InputSearchContainer>

      <Modal />

      <Header>
        <strong>3 contacts</strong>
        <Link to="/new">Nouveau contact</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>None</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Mateus Silva</strong>
              <small>Instagram</small>
            </div>
            <span>mateus@devacademy.com.br</span>
            <span>(237) 6995-69855</span>
          </div>

          <div className="actions">
            <Link to="/edit/123">
              <img src={edit} alt="Edit" />
            </Link>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>

      </ListContainer>
    </Container>
  );
}

export default Home;
