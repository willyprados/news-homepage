import { css } from "styled-components";
import { FONT_FAMILY } from "./../constants/index";

const fonstURL = "https://fonts.googleapis.com/css2?family=Inter";

const fontStyles = css`
  @font-face {
    font-family: ${FONT_FAMILY.heading}, sans-serif;
    src: url(${fonstURL}) format("woff2");
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: ${FONT_FAMILY.caption}, sans-serif;
    src: url(${fonstURL}) format("woff2");
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: ${FONT_FAMILY.body}, sans-serif;
    src: url(${fonstURL}) format("woff2");
    font-weight: 400;
    font-style: normal;
  }
`;

export default fontStyles;
