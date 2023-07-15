import { createGlobalStyle } from 'styled-components';
import AutoScape from '../fonts/AutoScape.otf';
import CarbonPlusRegular from '../fonts/carbon-plus-regular.woff2';
import CarbonPlusBold from '../fonts/carbon-plus-bold.woff2';

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: AutoScape;
    src: url('${AutoScape}');
    font-weight: normal;
  }

  @font-face {
    font-family: CarbonPlus;
    src: url('${CarbonPlusRegular}');
    font-weight: normal;
  }

  @font-face {
    font-family: CarbonPlus;
    src: url('${CarbonPlusBold}');
    font-weight: bold;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    background-repeat: no-repeat;
  }

  html {
    font-family: CarbonPlus, monospace;
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.blue}; 
    overflow-y: scroll;
  }

  body {
    margin: 0;
  }

  audio,
  canvas,
  iframe,
  img,
  svg,
  video  {
    max-width: 100%;
    vertical-align: middle;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  textarea {
    resize: vertical;
  }
`;

export default GlobalStyle;
