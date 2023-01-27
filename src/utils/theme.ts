import { createTheme } from "@nextui-org/react";

const breakpoints: any = {
  xs: "568px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
};

export const lightTheme = createTheme({
  type: "light",
  className: "light",
  theme: {
    breakpoints: breakpoints,
  },
});

export const darkTheme = createTheme({
  type: "dark",
  className: "dark",
  theme: {
    breakpoints: breakpoints,
  },
});
