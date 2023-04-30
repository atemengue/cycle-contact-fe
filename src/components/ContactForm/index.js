import PropTypes from 'prop-types';
import Button from '../Button';
import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import { ButtonContainer, Container } from './styles';

export default function ContactFrom({ buttonLabel }) {
  return (
    <Container>
      <FormGroup>
        <Input placeholder="Nom" />
      </FormGroup>

      <FormGroup>
        <Input placeholder="Email" />
      </FormGroup>

      <FormGroup>
        <Input placeholder="Telephone" />
      </FormGroup>

      <FormGroup>
        <Select>
          <option value="instangram">Instangram</option>
        </Select>
      </FormGroup>

      <ButtonContainer>

        <Button type="submit">
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Container>
  );
}

ContactFrom.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
