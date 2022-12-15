import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-size: 62.5%; //to better styling in rem (now: 1.5rem = 15px)
    }
    *, *::after, *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        font-family: 'Roboto', sans-serif;
    }
    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
        color:inherit;
        
    }
`;
