import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container } from './styles';

import arrow from '../../assets/images/arrow.svg';

export default function PageHeader({ title }) {
  return (
    <Container>
      <Link to="/">
        <img src={arrow} alt="Back" />
        <span>Retour</span>
      </Link>
      <h1>
        {title}
      </h1>
    </Container>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
