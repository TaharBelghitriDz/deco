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
      <Image w="full" src="/cover.png" h="100vh" objectFit="cover" />
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
