import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    backgroundColors: {
      primary: "#faf6e9",
      secondary: "#ece8d9",
      third: "#fffdf6",
      forth: "#494949"
    },
    textColors: {
      primary: "#212121",
      secondary: "#757575"
    },
    dividerColor: "#BDBDBD",
    iconColor:{
      primary: "#fffdf6",
      activePrimary: "#ece8d9"
    }
  },
  fonts: ["Roboto", "sans-serif"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
