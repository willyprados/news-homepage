import { BREAKPOINTS } from "../constants";

export const media = {
  mobile: `@media (min-width: ${BREAKPOINTS.small})`,
  tablet: `@media (min-width: ${BREAKPOINTS.medium})`,
  tabletLarge: `@media (min-width: ${BREAKPOINTS.large})`,
  desktop: `@media (min-width: ${BREAKPOINTS.xlarge})`,
  desktopLarge: `@media (min-width: ${BREAKPOINTS.xlarge})`,
  desktopXLarge: `@media (min-width: ${BREAKPOINTS.xxlarge})`,
};
