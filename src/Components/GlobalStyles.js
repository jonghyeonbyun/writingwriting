import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import bgImg from "assets/images/bgImg.png";
const globalStyles = createGlobalStyle`
    ${reset};

    *{
        box-sizing: border-box;
    }
  
    body{
        padding: 10px 20px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 12px;
        background-image: url(${bgImg});
        background-size: cover;

        color: black;
    } @font-face {
    font-family: 'MapoFlowerIsland';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/MapoFlowerIslandA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

`;

export default globalStyles;
