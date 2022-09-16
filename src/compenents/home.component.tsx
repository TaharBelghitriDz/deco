import { Box, Image, Text, VStack } from "@chakra-ui/react";

const HomeComponent = () => {
  return (
    <VStack
      pos="relative"
      w="full"
      h="auto"
      spacing="0"
      textAlign="center"
      color="white"
    >
      <Image
        w="full"
        src="https://images.unsplash.com/photo-1540638349517-3abd5afc5847?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        h="100vh"
        objectFit="cover"
      />
      <Box pos="absolute" h="full" w="full" bg="rgb(0,0,0,50%)" />
      <VStack
        pos="absolute"
        bottom="30px"
        w="full"
        top="200px"
        justifyContent="space-between"
      >
        <Box fontSize="60px" maxW="900px" fontWeight="bold" lineHeight="60px">
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
        <Text color="gray" maxW="500px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos.
        </Text>
      </VStack>
    </VStack>
  );
};
export default HomeComponent;
