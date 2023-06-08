import Button from '../Button';
import { Container, Footer, Overlay } from './styles';

export default function Modal() {
  return (
    <Overlay>
      <Container>
        <h1>Message de Modal</h1>
        <p>Corps du modal</p>
        <Footer>
          <button type="button" className="cancel-button">
            Annuler
          </button>
          <Button type="button">
            Supprimer
          </Button>
        </Footer>
      </Container>
    </Overlay>
  );
}
