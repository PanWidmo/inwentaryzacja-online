import './Root.styles.js';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <p> Projekt Inz- Start :) </p>
      </Wrapper>
    </ThemeProvider>
  );
}

export default Root;
