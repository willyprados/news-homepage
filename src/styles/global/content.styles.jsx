import { css } from "styled-components";

export const buttonWrapperStyles = theme => css`
  appearance: none;
  background-color: ${theme.colors.primary};
  border: none;
  border-radius: 4px;
  color: ${theme.colors.white};
  height: ${theme.spacing.layout.buttonHeight ?? 40}px;
  line-height: ${theme.spacing.layout.buttonHeight ?? 40}px;
  padding: 0 ${theme.spacing.small}px;
  text-align: center;
  transition: all 0.4s;
`;

const contentStyles = ({ theme }) => css`
  /** GLOBAL */
  body {
    font-family: ${theme.typography.body.fontFamily};
    font-size: ${theme.typography.body.fontSize.mobile}px;
    line-height: ${theme.typography.body.lineHeight.mobile}px;
    overflow-x: hidden;
  }

  p {
    margin-bottom: ${theme.spacing.medium}px;
  }

  /** FORMS */
  textarea {
    height: 100px;
  }

  [type="text"],
  [type="password"],
  [type="date"],
  [type="datetime"],
  [type="datetime-local"],
  [type="month"],
  [type="week"],
  [type="email"],
  [type="number"],
  [type="search"],
  [type="tel"],
  [type="time"],
  [type="url"],
  [type="color"],
  textarea {
    appearance: none;
    background-color: transparent;
    border-radius: 4px;
    border: 1px solid ${theme.colors.white};
    color: ${theme.colors.white};
    font-family: ${theme.typography.button.fontFamily};
    font-size: ${theme.typography.button.fontSize.mobile}px;
    height: ${theme.spacing.layout.buttonHeight}px;
    line-height: ${theme.spacing.layout.buttonHeight}px;
    outline: none;
    padding: 0 ${theme.spacing.small}px;
    transition: border-color 0.2s;
    width: 100%;
    &:focus {
      border-color: ${theme.colors.primary};
    }
  }

  input[type="submit"] {
    ${buttonWrapperStyles(theme)}
  }
`;

export default contentStyles;
