import { Box, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { SearchIcon, ShoppingIcon } from "compenents/icons";
import { motion } from "framer-motion";
import { useWindowScroll } from "hooks";
import { useEffect, useState } from "react";

export const categories = [
  "chairs",
  "tables",
  "desk",
  "beds",
  "lights",
  "sofa",
];

const Navbar = () => {
  const [hover, setHoverd] = useState<number>(-1);
  const [mousLeave, setMousLeave] = useState<boolean>(false);

  const ElementsHover = (e: string, i: number) => (
    <Stack
      pos="relative"
      h="full"
      w="full"
      alignItems="center"
      justifyContent="center"
      spacing="0"
      key={i}
    >
      {hover === i && (
        <Box
          as={motion.div}
          layoutId="i"
          pos="absolute"
          bottom="0"
          h="10px"
          w="10px"
          bg="yellow"
          rounded="full"
          style={{ opacity: "1" }}
          zIndex={-1}
          animate={mousLeave! ? { opacity: "0.0" } : undefined}
        />
      )}
      <Text
        h="auto"
        w="full"
        as={motion.div}
        key={i}
        p="10px"
        px="20px"
        pos="relative"
        color="gray"
        cursor="pointer"
        onHoverStart={() => setHoverd(i)}
        whileHover={{ color: "#F6AA1C" }}
      >
        {e}
      </Text>
    </Stack>
  );

  return (
    <Stack
      w="full"
      h="75px"
      pos="fixed"
      zIndex={10000}
      alignItems="center"
      justifyContent="center"
      bg="black"
    >
      <HStack
        justifyContent="space-between"
        w="full"
        h="75px"
        maxW="1200px"
        px="50px"
        color="white"
        alignItems="center"
      >
        <Image src="/Deco.svg" />

        <HStack
          as={motion.div}
          spacing="0"
          alignItems="center"
          onHoverEnd={() => setMousLeave(true)}
          onHoverStart={() => setMousLeave(false)}
          display={{ start: "none", lg: "flex" }}
        >
          {categories.map(ElementsHover)}
        </HStack>
        <HStack spacing="0px" alignItems="center">
          <Box
            as={motion.div}
            whileHover={{
              backgroundColor: "#ffffff",
              color: "#000000",
            }}
            cursor="pointer"
            rounded="full"
          >
            <SearchIcon h="50px" w="50px" p="15px" />
          </Box>
          <Box
            as={motion.div}
            whileHover={{
              backgroundColor: "#ffffff",
              color: "#000000",
            }}
            cursor="pointer"
            rounded="full"
          >
            <SearchIcon h="50px" w="50px" p="15px" />
          </Box>
          <Box
            as={motion.div}
            whileHover={{
              backgroundColor: "#ffffff",
              color: "#000000",
            }}
            cursor="pointer"
            rounded="full"
          >
            <ShoppingIcon h="50px" w="50px" p="15px" />
          </Box>
        </HStack>
      </HStack>
    </Stack>
  );
};

export default Navbar;
