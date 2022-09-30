import {
  Box,
  ChakraProvider,
  Image,
  Progress,
  Text,
  VStack,
} from "@chakra-ui/react";
import LoadingText from "compenents/loading.text";
import { motion } from "framer-motion";
import theme from "theme";

export default () => {
  return (
    <ChakraProvider theme={theme}>
      <VStack h="100vh" w="full" justifyContent="center" bg="#FFFFFF">
        <VStack h="200px" w="90%" spacing="50px" overflow="hidden">
          <Box
            as={motion.div}
            h="auto"
            animate={{ height: 0, opacity: 0, transition: { delay: 4 } }}
          >
            <LoadingText />
          </Box>
          <Text
            as={motion.span}
            color="black"
            fontSize="25px"
            animate={{ opacity: 1, transition: { duration: 0.5, delay: 4.5 } }}
            initial={{ opacity: 0 }}
          >
            Fashion and interior design are one and the same
          </Text>

          <Progress w="30%" size="xs" colorScheme="red" isIndeterminate />
        </VStack>
      </VStack>
    </ChakraProvider>
  );
};
