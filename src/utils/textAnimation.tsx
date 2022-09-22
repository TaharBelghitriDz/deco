import { Box, ChakraProps, HStack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default (props: ChakraProps & { content: string }) => {
  return (
    <HStack spacing="0" flexWrap="wrap" justifyContent="center">
      {props.content.split(" ").map((e, i) => {
        return (
          <HStack spacing="0" h="auto" {...props} key={i}>
            <Box
              as={motion.div}
              top="30px"
              pos="relative"
              opacity={0}
              p="0"
              m="0"
              rotate="40deg"
              initial={{
                transform: "rotate(5deg)",
              }}
              animate={{
                top: "0px",
                opacity: 1,
                transform: "rotate(0deg)",
                transition: { type: "just", delay: 0.015 * i },
              }}
            >
              {e + "\u00a0"}
            </Box>
          </HStack>
        );
      })}
    </HStack>
  );
};
