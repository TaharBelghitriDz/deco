import { Box, HStack, Image, Img, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useAnimatedView } from "hooks";
import { useEffect, useState } from "react";
import { useGetState } from "utils/state";

const WhatWeDo = () => {
  const whatwedo = useAnimatedView(1);
  const newProduct = useAnimatedView(2);
  const someGood = useAnimatedView(3);
  const statePlace = useGetState("viewedItem");

  const [place, setPlace] = useState<number>(0);

  useEffect(() => {
    console.log("place");
    console.log(statePlace);
    setPlace(() => statePlace as number);
  }, [statePlace]);

  return (
    <VStack
      w="full"
      pt="150px"
      px={{ start: "2%", md: "50px" }}
      spacing="150px"
    >
      <VStack spacing="30px">
        <HStack
          spacing="30px"
          w="full"
          alignItems="end"
          maxW="1300px"
          pos="relative"
        >
          <VStack spacing="0" h="full" w="auto" justifyContent="space-between">
            <Text />
            <Text
              fontFamily="playFair"
              fontSize={{ start: "30px", lg: "50px" }}
              whiteSpace="nowrap"
              ref={whatwedo}
            >
              What We Do
            </Text>
          </VStack>

          <Box
            pos="relative"
            w="full"
            h="auto"
            display={{ start: "none", md: "block" }}
            position="relative"
          >
            <Image
              h="auto"
              maxH="500px"
              w="full"
              src="/home-decoration.jpg"
              opacity={0}
            />

            {place === 1 ? (
              <Image
                left="0"
                bottom="0"
                pos="absolute"
                as={motion.img}
                h="auto"
                w="full"
                maxH="500px"
                layoutId="oneId"
                src="/home-decoration.jpg"
                objectFit="cover"
              />
            ) : (
              <p />
            )}
          </Box>
        </HStack>
        <Box color="gray" maxW="1300px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </Box>
        <Box
          h="auto"
          w="full"
          display={{ start: "block", md: "none" }}
          pos="relative"
        >
          <Image
            as={motion.img}
            layoutId="two"
            opacity={0}
            h="full"
            w="full"
            src="/home-decoration.jpg"
          />
          {place === 1 && (
            <Image
              left="0"
              bottom="0"
              pos="absolute"
              as={motion.img}
              h="full"
              layoutId="two"
              w="full"
              src="/home-decoration.jpg"
              objectFit="cover"
            />
          )}
        </Box>
      </VStack>

      <HStack
        w="full"
        spacing="50px"
        justifyContent="space-between"
        alignItems="start"
        pt="250px"
        maxW="1300px"
      >
        <VStack
          alignItems="start"
          w={{ start: "full", md: "55%" }}
          spacing="30px"
        >
          <Text
            fontFamily="playFair"
            fontSize={{ start: "30px", lg: "50px" }}
            whiteSpace="nowrap"
            ref={newProduct}
          >
            our collections
          </Text>
          <Img
            as={motion.img}
            src="/wood-chair-table.jpg"
            layoutId="two"
            top="0"
            left="0"
            w="full"
            display={{ start: "block", md: "none" }}
            h="full"
            objectFit="cover"
          />
          <Box color="gray" pl={{ start: "30%", md: "50px" }} w="auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </Box>
        </VStack>
        <Box
          display={{ start: "none", md: "block" }}
          w="40%"
          h="auto"
          pos="relative"
        >
          <Img opacity={0} src="/wood-chair-table.jpg" w="full" h="full" />
          {place === 2 && (
            <Img
              as={motion.img}
              pos="absolute"
              src="/wood-chair-table.jpg"
              layoutId="oneId"
              top="0"
              left="0"
              w="full"
              h="full"
              objectFit="cover"
            />
          )}
        </Box>
      </HStack>
      <VStack w="full" h="auto" pos="relative">
        <Image
          src="/small-home.jpg"
          objectFit="cover"
          opacity={0}
          border="none"
          h="full"
          maxH="90vh"
          minH="700px"
        />
        {place === 3 && (
          <Image
            pos="absolute"
            src="/small-home.jpg"
            objectFit="cover"
            top="0"
            left="0"
            minH="700px"
            as={motion.img}
            layoutId="oneId"
            w="full"
            h="full"
            border="none"
            maxH="90vh"
          />
        )}
        <VStack w="full" h="auto" pos="absolute" bottom="0" p="10px">
          <Text
            ref={someGood}
            fontSize={{ start: "30px", lg: "50px" }}
            fontFamily="playFair"
            color="white"
            textAlign="center"
          >
            the house you can live in
          </Text>
          <Box textAlign="center" color="gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu
            <Text /> ad litora torquent per conubia nostra, per inceptos
            himenaeos.
          </Box>
        </VStack>
      </VStack>
    </VStack>
  );
};
export default WhatWeDo;
