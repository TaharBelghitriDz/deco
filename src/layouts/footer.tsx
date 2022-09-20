import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const footerData = [
  {
    title: "information",
    subtitles: ["who we are", "FAQ", "how to purchase", "support"],
  },
  {
    title: "custemur service",
    subtitles: ["who we are", "FAQ", "how to purchase", "support"],
  },
  {
    title: "conatct",
    subtitles: ["who we are", "FAQ", "how to purchase", "support"],
  },
];

const Footer = () => {
  return (
    <VStack
      bg="black"
      w="full"
      alignItems="start"
      p="30px"
      color="white"
      spacing="30px"
    >
      <VStack alignItems="inherit">
        <Image src="/deco-footer.svg" w="300px" />
        <Text>made by tahar belghitri</Text>
      </VStack>
      <HStack alignItems="start">
        {footerData.map((e: any, i: number) => {
          return (
            <VStack key={i}>
              <Text>{e.title}</Text>
              {e.subtitles.map((e: any, i: number) => {
                <Text
                  key={i}
                  color="white"
                  as={motion.div}
                  whileHover={{ color: "yellow" }}
                >
                  {e}
                </Text>;
              })}
            </VStack>
          );
        })}
      </HStack>
    </VStack>
  );
};

export default Footer;
