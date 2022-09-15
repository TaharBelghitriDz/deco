import { extendTheme } from "@chakra-ui/react";
export default extendTheme({
  styles: {
    global: {
      "html , body": {
        fontFamily: "'Josefin Sans', sans-serif;",
        bg: "#F0F0F0",
        color: "#111111",
        fontSize: "18px",
        m: "0",
        p: "0",
      },
    },
  },
  colors: {
    white: "#F0F0F0",
    gray: "#B9B9B9",
    black: "#111111",
  },
  fonts: {
    Formal: "'Petit Formal Script', serif;",
    Josefin: "'Josefin Sans', sans-serif;",
  },
});
