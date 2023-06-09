import { ThemeProvider } from 'styled-components';
import Router from '../../Routes';
import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';
import Header from '../Header';
import { Container } from './style';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <Header />
        <Router />
      </Container>
    </ThemeProvider>
  );
}

export default App;
