import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-size: 62.5%; //to better styling font in rem (now: 1.5rem = 15px)
    }
    *, *::after, *::before {
        box-sizing: inherit;
    }
    body {
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
    }
    a, button {
        font-family: 'Roboto', sans-serif;
    }
`;
