import { Box, HStack, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [hover, setHoverd] = useState<number>(-1);
  const [mousLeave, setMousLeave] = useState<boolean>(false);

  const categories = ["chairs", "tables", "desk", "beds", "lights", "sofa"];

  const ElementsHover = (e: string, i: number) => (
    <Box pos="relative" key={i}>
      {hover === i && (
        <Box
          as={motion.div}
          layoutId="i"
          pos="absolute"
          h="full"
          top="0"
          w="full"
          bg="white"
          zIndex={-1}
          animate={
            mousLeave! ? { width: "0px", left: "50%", opacity: "0" } : undefined
          }
        />
      )}
      <Text
        h="full"
        w="full"
        as={motion.div}
        key={i}
        p="10px"
        px="20px"
        pos="relative"
        color="gray"
        cursor="pointer"
        onHoverStart={() => setHoverd(i)}
        whileHover={{ color: "#000000" }}
      >
        {e}
      </Text>
    </Box>
  );

  return (
    <HStack
      justifyContent="space-between"
      w="full"
      h="75px"
      maxW="1200px"
      pos="fixed"
      px="50px"
      color="white"
      zIndex={10000}
      alignItems="center"
    >
      <Image src="/Deco.svg" />
      <HStack
        as={motion.div}
        spacing="0"
        alignItems="center"
        onHoverEnd={() => setMousLeave(true)}
        onHoverStart={() => setMousLeave(false)}
      >
        {categories.map(ElementsHover)}
      </HStack>
      <HStack spacing="20px" alignItems="center">
        {/* <Box
          as={motion.div}
          whileHover={{ backgroundColor: "gren" }}
          cursor="pointer"
          src="/search-line.svg"
        />
        <Box
          as={motion.div}
          h="auto"
          w="auto"
          bg="green"
          whileHover={{ backgroundColor: "gren" }}
          cursor="pointer"
          src="/shopping-line.svg"
        /> */}
      </HStack>
    </HStack>
  );
};

export default Navbar;
