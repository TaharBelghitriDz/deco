import { ChakraProvider, Spinner, VStack } from "@chakra-ui/react";
import Goals from "compenents/goals.component";
import HomeComponent from "compenents/home.component";
import NewProducts from "compenents/newproducts";
import products from "compenents/products";
import WhatWeDo from "compenents/whatwedo.component";
import { AnimatePresence } from "framer-motion";
import Footer from "layouts/footer";
import Navbar from "layouts/navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import theme from "theme";

const compList = {
  HomeComponent,
  WhatWeDo,
  NewProducts,
  Goals,
  products,
};

export const App = (props: { compList: (keyof typeof compList)[] }) => (
  <VStack w="full" spacing="0">
    <Navbar />
    {props.compList.map((e: keyof typeof compList, i: number) => {
      const Comp = compList[e];
      return <Comp key={i} />;
    })}
    <Footer />
  </VStack>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App compList={["HomeComponent", "WhatWeDo", "NewProducts", "Goals"]} />
    ),
  },
  {
    path: "/products",
    element: <App compList={["products"]} />,
  },
]);

export default () => {
  return (
    <ChakraProvider theme={theme}>
      <AnimatePresence>
        <RouterProvider router={router} fallbackElement={<Spinner />} />
      </AnimatePresence>
    </ChakraProvider>
  );
};
