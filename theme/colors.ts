import { merge } from "lodash";
import chroma from "chroma-js";

const colors: any = {
  white: "#fff",
  gray100: "#f8f9fa",
  gray200: "#e9ecef",
  gray300: "#dee2e6",
  gray400: "#ced4da",
  gray500: "#adb5bd",
  gray600: "#6c757d",
  gray700: "#495057",
  gray800: "#343a40",
  gray900: "#212529",
  black: "#000",
  blue: "#007bff",
  indigo: "#6610f2",
  purple: "#6f42c1",
  pink: "#e83e8c",
  red: "#dc3545",
  orange: "#fd7e14",
  yellow: "#ffc107",
  green: "#28a745",
  teal: "#20c997",
  cyan: "#17a2b8",
};
merge(colors, {
  gray: colors.gray600,
  grayDark: colors.gray800,
  primary: colors.blue,
  secondary: colors.gray600,
  success: colors.green,
  info: colors.cyan,
  warning: colors.yellow,
  danger: colors.red,
  light: colors.gray100,
  dark: colors.gray800,
});
merge(colors, {
  light: {
    primary: chroma(colors.primary).brighten().hex(),
  },
});
merge(colors, {
  light: {
    primaryHoverFocus: chroma(colors.light.primary).brighten(0.5).hex(),
  },
});
export default colors;
