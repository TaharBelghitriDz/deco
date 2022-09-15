import { ChakraProvider, Divider, VStack } from "@chakra-ui/react";
import HomeComponent from "compenents/home.component";
import Footer from "layouts/footer";
import Navbar from "layouts/navbar";
import theme from "theme";

function App() {
  return (
    <VStack w="full" spacing="0">
      <Navbar />

      <HomeComponent />
      <Footer />
    </VStack>
  );
}

export default () => (
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
