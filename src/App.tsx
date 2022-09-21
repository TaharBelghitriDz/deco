import { ChakraProvider, Divider, VStack } from "@chakra-ui/react";
import Goals from "compenents/goals.component";
import HomeComponent from "compenents/home.component";
import NewProducts from "compenents/newproducts";
import WhatWeDo from "compenents/whatwedo.component";
import { AnimatePresence } from "framer-motion";
import Footer from "layouts/footer";
import Navbar from "layouts/navbar";
import theme from "theme";

function App() {
  return (
    <VStack w="full" spacing="0">
      <Navbar />
      <HomeComponent />
      <WhatWeDo />
      <NewProducts />
      <Goals />
      <Footer />
    </VStack>
  );
}

export default () => (
  <ChakraProvider theme={theme}>
    <AnimatePresence>
      <App />
    </AnimatePresence>
  </ChakraProvider>
);
