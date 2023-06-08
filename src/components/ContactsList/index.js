import {
  Card, Container, Header, ListContainer,
} from '../../pages/Home/styles';

import arrow from '../../assets/images/arrow.svg';
import trash from '../../assets/images/delete.svg';
import edit from '../../assets/images/edit.svg';
import Modal from '../Modal';

export default function ContactList() {
  return (
    <Container>
      <Modal />
      <Header>
        <strong>3 contacts</strong>
        <a href="/">Nouveau contact</a>
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
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>
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
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>

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
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
