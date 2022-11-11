// import { FONT_FAMILY } from '../../styles/constants/index';
import { FONT_FAMILY } from "@/styles/constants/index";

const TYPOGRAPHY = Object.freeze({
  h1: {
    fontFamily: FONT_FAMILY.heading,
    fontSize: {
      mobile: 32,
      desktop: 60,
    },
    lineHeight: {
      mobile: 32,
      desktop: 60,
    },
  },
  h2: {
    fontFamily: FONT_FAMILY.heading,
    fontSize: {
      mobile: 24,
      desktop: 36,
    },
    lineHeight: {
      mobile: 32,
      desktop: 43.2,
    },
  },
  subtitle: {
    fontFamily: FONT_FAMILY.body,
    fontSize: {
      mobile: 16,
      desktop: 16,
    },
    lineHeight: {
      mobile: 20,
      desktop: 20,
    },
  },
  caption: {
    fontFamily: FONT_FAMILY.heading,
    fontSize: {
      mobile: 16,
      desktop: 22,
    },
    lineHeight: {
      mobile: 21.6,
      desktop: 28,
    },
  },
  body: {
    fontFamily: FONT_FAMILY.body,
    fontSize: {
      mobile: 16,
      desktop: 16,
    },
    lineHeight: {
      mobile: 24,
      desktop: 24,
    },
  },
  button: {
    fontFamily: FONT_FAMILY.caption,
    fontSize: {
      mobile: 16,
      desktop: 16,
    },
    lineHeight: {
      mobile: 18,
      desktop: 18,
    },
  },
});
export default TYPOGRAPHY;
