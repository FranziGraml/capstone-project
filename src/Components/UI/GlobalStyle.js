import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        --primary-black: #081c15;
        --primary-cream: #d8f3dc;
        --dark-green: #2d6a4f;
        --middle-green: #40916c;
        --light-green: #52b788;
        --bright-green: #d8f3dc;
        --darker-green:#1B4332;

        --light-cream: #A0F6EB;
        --light-grey: #707070;
        --light-blue: #8ECAE6;
        --light-orange: #E6AD9A;
        --primary-orange: #F4A261;
        --dark-orange: #997140;
        --dark-blue: #3259A8;
        
  
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
        background-color: #99B9E6;
        margin: 0;
    }

`;
