import { Box, Image, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const HomeComponent = () => {
  return (
    <VStack
      pos="relative"
      w="full"
      spacing="0"
      textAlign="center"
      color="white"
      h="100vh"
    >
      <Box zIndex={1} h="100vh" w="full" bg="rgb(0,0,0,50%)" />

      <Image
        left="0"
        top="0"
        pos="absolute"
        as={motion.img}
        w="full"
        h="full"
        bg="green"
        src="https://images.unsplash.com/photo-1540638349517-3abd5afc5847?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      />
      <VStack
        zIndex={2}
        pos="absolute"
        bottom="30px"
        w="full"
        top="200px"
        spacing="50px"
      >
        <Box
          fontSize="60px"
          maxW="900px"
          fontWeight="bold"
          lineHeight="60px"
          fontFamily="playFair"
        >
          "Be faithful to your own taste, <Text /> because nothing you really
          like is ever out of style."
        </Box>
        <Box color="gray">
          shop furniture for greate prices,
          <Text /> stylish furnishings and home decore
        </Box>
        <Text p="20px" px="60px" cursor="pointer" fontWeight="bold" bg="black">
          discover
        </Text>
        <Box />
        <Box />
      </VStack>
    </VStack>
  );
};
export default HomeComponent;
