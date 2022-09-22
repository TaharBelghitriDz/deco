import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import TextAnimation from "utils/textAnimation";
import textAnimation from "utils/textAnimation";

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
        display={{ start: "none", md: "block" }}
        objectFit="cover"
        objectPosition="center"
        src="https://images.unsplash.com/photo-1540638349517-3abd5afc5847?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      />
      <Image
        left="0"
        top="0"
        pos="absolute"
        as={motion.img}
        w="full"
        h="full"
        display={{ start: "block", md: "none" }}
        objectFit="cover"
        objectPosition="center"
        src="/phone-cover.jpg"
      />
      <VStack
        zIndex={2}
        pos="absolute"
        bottom="30px"
        w="full"
        top="200px"
        spacing="50px"
      >
        <HStack
          fontSize={{ start: "30px", md: "45px", lg: "60px" }}
          maxW="900px"
          fontWeight="bold"
          lineHeight={{ start: "40px", md: "45px", lg: "60px" }}
          fontFamily="playFair"
          spacing="0"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
        >
          {textAnimation({ content: '"Be faithful to your own taste, ' })}
          {textAnimation({
            content: 'because nothing you really like is ever out of style."',
          })}
        </HStack>
        <Box color="gray" lineHeight="20px">
          {textAnimation({ content: "shop furniture for greate prices," })}
          {textAnimation({ content: "stylish furnishings and home decore" })}
        </Box>
        <Text
          as={motion.p}
          p="20px"
          px="60px"
          cursor="pointer"
          fontWeight="bold"
          bg="black"
          opacity={0}
          animate={{ opacity: 1, transition: { delay: 0.3 } }}
        >
          discover
        </Text>
        <Box />
        <Box />
      </VStack>
    </VStack>
  );
};

export default HomeComponent;
