import {
  Highlight,
  HStack,
  Image,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
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
      alignItems="center"
      p="30px"
      color="white"
      spacing="30px"
      pt="100px"
    >
      <Stack maxW="1000px" w="full" alignItems="start">
        <VStack alignItems="inherit">
          <Image src="/deco-footer.svg" w="300px" />
          <Link href="https://github.com/TaharBelghitriDz" isExternal>
            <Text>
              <Highlight query="tahar belghitri" styles={{ color: "blue.300" }}>
                made by tahar belghitri
              </Highlight>
            </Text>
          </Link>
        </VStack>
        <HStack alignItems="start" spacing="0" flexWrap="wrap">
          {footerData.map((e: any, i: number) => {
            return (
              <VStack key={i} alignItems="start" p="30px">
                <Text>{e.title}</Text>

                {e.subtitles.map((e: any, i: number) => (
                  <Text
                    key={i}
                    color="gray"
                    as={motion.div}
                    cursor="pointer"
                    whileHover={{
                      color: "#F6AA1C",
                      transition: { duration: 0.2 },
                    }}
                  >
                    {e}
                  </Text>
                ))}
              </VStack>
            );
          })}
        </HStack>
      </Stack>
    </VStack>
  );
};

export default Footer;
