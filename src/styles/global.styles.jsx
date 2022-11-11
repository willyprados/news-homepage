import { createGlobalStyle } from "styled-components";

import fontStyles from "./global/fonts.styles";
import resetStyles from "./global/reset.styles";
import contentStyles from "./global/content.styles";

const GlobalStyle = createGlobalStyle`
  ${fontStyles}
  ${resetStyles}
  ${contentStyles}
`;

export default GlobalStyle;
