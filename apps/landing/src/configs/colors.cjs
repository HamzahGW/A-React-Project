const colors = require("tailwindcss/colors");

module.exports = {
  theme: {
    colors: {
      ...colors,
      Primary: {
        DEFAULT: "#9e73d0",
        50: "#f8f6fc",
        100: "#f2eef9",
        200: "#e6dff5",
        300: "#d3c5ed",
        400: "#bda4e1",
        500: "#9e73d0",
        600: "#9662c5",
        700: "#864fb2",
        800: "#6f4295",
        900: "#5c387a",
        950: "#3b2352",
      },
      Alternative: "#bfcad4",
      PrimaryHighlight: {
        DEFAULT: "#0d87d8",
        50: "#f0f8ff",
        100: "#e0effe",
        200: "#bae0fd",
        300: "#7dc8fc",
        400: "#38acf8",
        500: "#0d87d8",
        600: "#0273c7",
        700: "#035ba1",
        800: "#074e85",
        900: "#0c416e",
        950: "#082949",
      },
      Accent: "#77838f",
      AccentAlternative: "#9ca6af",

      StaticBlack: "#000000",
      white: "#ffffff",
      whiteDarken: "#7e7e7e",

      Danger: "#d9534f",
      LightDanger: "#e79290",

      Warning: "#ffc107",
      Main: "#f5f7f9",
      Success: "#5cb85c",

      // Others
      transparent: "transparent",
    },
  },
};
