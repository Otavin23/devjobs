import { extendTheme } from "@chakra-ui/react";

const themeChakra = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "light" ? "#F5F6F8" : "#121721",
      },
    }),
  },

  fonts: {
    heading: `Kumbh Sans, sans-serif`,
    body: `Kumbh Sans', sans-serif`,
  },

  breakpoint: {
    sm: "480px",
    md: "725px",
    lg: "990px",
    xl: "1250px",
  },

  config: { initialColorMode: "light", useSystemColorMode: false },
});

export { themeChakra };
