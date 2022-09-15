import { Image, VStack } from "@chakra-ui/react";

const HomeComponent = () => {
  return (
    <VStack w="full">
      <Image w="full" src="/cover.png" objectFit="cover" />
    </VStack>
  );
};
export default HomeComponent;
