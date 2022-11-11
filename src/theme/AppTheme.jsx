import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import GlobalStyle from "./../styles/global.styles";
import theme from "./theme";

function AppTheme({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
AppTheme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppTheme;
