import { HStack, Image, Spinner, Text, VStack } from "@chakra-ui/react";

const Goals = () => {
  return (
    <VStack
      pt="150px"
      w="full"
      maxW="1000px"
      alignItems="starts"
      spacing="50px"
    >
      <Text color="green" fontSize="50px" fontWeight="bold">
        our new products
      </Text>
      <Text color="gray" maxW="700px">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Curabitur tempus urna at turpis condimentum lobortis.
      </Text>
      <Image src="/cover.png" w="full" />
      <VStack spacing="100px" pt="100px">
        <HStack justifyContent="space-between" w="full" alignItems="start">
          <p />
          <Image w="300px" src="/cover.png" />
          <VStack w="400px" alignItems="start">
            <Text fontWeight="bold" fontSize="30px">
              sofa
            </Text>
            <Text color="gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis.
            </Text>
          </VStack>
        </HStack>
        <HStack justifyContent="space-between" w="full" alignItems="start">
          <p />
          <VStack w="400px" alignItems="start">
            <Text fontWeight="bold" fontSize="30px">
              sofa
            </Text>
            <Text color="gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis.
            </Text>
          </VStack>
          <Image w="300px" src="/cover.png" />
        </HStack>{" "}
        <HStack justifyContent="space-between" w="full" alignItems="start">
          <p />
          <Image w="300px" src="/cover.png" />
          <VStack w="400px" alignItems="start">
            <Text fontWeight="bold" fontSize="30px">
              sofa
            </Text>
            <Text color="gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis.
            </Text>
          </VStack>
        </HStack>
        <HStack justifyContent="space-between" w="full" alignItems="start">
          <p />
          <VStack w="400px" alignItems="start">
            <Text fontWeight="bold" fontSize="30px">
              sofa
            </Text>
            <Text color="gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis.
            </Text>
          </VStack>
          <Image w="300px" src="/cover.png" />
        </HStack>{" "}
        <HStack justifyContent="space-between" w="full" alignItems="start">
          <p />
          <Image w="300px" src="/cover.png" />
          <VStack w="400px" alignItems="start">
            <Text fontWeight="bold" fontSize="30px">
              sofa
            </Text>
            <Text color="gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis.
            </Text>
          </VStack>
        </HStack>
        <HStack justifyContent="space-between" w="full" alignItems="start">
          <p />
          <VStack w="400px" alignItems="start">
            <Text fontWeight="bold" fontSize="30px">
              sofa
            </Text>
            <Text color="gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis.
            </Text>
          </VStack>
          <Image w="300px" src="/cover.png" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Goals;
