import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        --primary-black: #081c15;
        --primary-cream: #d8f3dc;
        --dark-green: #2d6a4f;
        --middle-green: #40916c;
        --light-green: #52b788;
        --bright-green: #d8f3dc;
    };

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }
    h1, h2, h3, h4 {
        line-height: 1.2;
    }
    h1, h2, h3, h4, p {
        margin: 0;
    }

    body {
        font-family: Calibri;
        background-color: var(--primary-black);
        margin: 0;
    }

`;
