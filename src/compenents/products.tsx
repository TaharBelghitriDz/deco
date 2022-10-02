import { ChakraProps, Checkbox, Stack, Text, VStack } from "@chakra-ui/react";
import { categories } from "layouts/navbar";

const CompCheckBox = (props: ChakraProps & { text: string }) => (
  <Checkbox
    {...props}
    colorScheme="blackAlpha"
    borderColor="#000000"
    m="0"
    children={props.text}
  />
);

export default () => {
  return (
    <Stack
      flexDir={{ start: "column", md: "row" }}
      pt="100px"
      justifyContent="space-between"
      alignItems="start"
      maxWidth="1200px"
      w="full"
      spacing="0"
    >
      <VStack spacing="0px">
        <Text fontSize="24px">categories</Text>
        {categories.map((e, i) => (
          <CompCheckBox text={e} key={i} />
        ))}
        <CompCheckBox text="chair" />
      </VStack>
      <VStack>
        <Text>hi</Text>
      </VStack>
    </Stack>
  );
};
