import {
  Box,
  ChakraProps,
  Checkbox,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { categories } from "layouts/navbar";
import { useParams } from "react-router-dom";
import products from "utils/products";

const CompCheckBox = (props: ChakraProps & { text: string }) => (
  <Checkbox
    {...props}
    colorScheme="blackAlpha"
    borderColor="#000000"
    m="0"
    p="0"
    children={props.text}
  />
);

const Products = () => {
  const prms = useParams();
  console.log(prms);

  return (
    <Stack
      flexDir={{ start: "column", md: "row" }}
      pt="100px"
      justifyContent="space-between"
      alignItems="start"
      w="full"
      spacing="0"
      pb="100px"
      maxW="1200px"
    >
      <VStack
        spacing="50px"
        alignItems="start"
        justifyContent="space-between"
        w="20%"
      >
        <VStack alignItems="start" spacing="30px">
          <Text fontSize="24px">categories</Text>
          <VStack spacing="10px" alignItems="start">
            {categories.map((e, i) => (
              <CompCheckBox text={e} key={i} />
            ))}
          </VStack>
        </VStack>
        <VStack alignItems="start" spacing="30px">
          <Text fontSize="24px">sub categories</Text>
          <VStack spacing="10px" alignItems="start">
            {categories.map((e, i) => (
              <CompCheckBox text={e} key={i} />
            ))}
          </VStack>
        </VStack>
      </VStack>

      <Stack
        h="auto"
        w="80%"
        spacing="0"
        alignItems="start"
        justifyContent="space-between"
        flexDir="row"
        flexWrap="wrap"
      >
        {products.map((e, i) => (
          <Box
            h="320px"
            key={i}
            pos="relative"
            as={motion.div}
            opacity={1}
            flexGrow="1"
            p="10px"
          >
            <Image
              src={e.src}
              w="full"
              objectFit="cover"
              h="full"
              objectPosition="center"
              cursor="pointer"
            />
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};

export default Products;
