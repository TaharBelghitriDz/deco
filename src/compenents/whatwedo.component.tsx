import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useAnimatedView } from "hooks";
import { useGetState } from "utils/state";

const WhatWeDo = () => {
  const whatwedo = useAnimatedView(1);
  const newProduct = useAnimatedView(2);
  const someGood = useAnimatedView(3);
  const place = useGetState("viewedItem");

  return (
    <VStack w="full" pt="150px" px="50px" spacing="150px">
      <VStack spacing="30px">
        <HStack
          spacing="30px"
          w="full"
          alignItems="end"
          maxW="1300px"
          pos="relative"
        >
          <VStack spacing="0" h="full" w="auto" justifyContent="space-between">
            <Text ref={whatwedo} />
            <Text fontFamily="playFair" fontSize="50px" whiteSpace="nowrap">
              What We Do
            </Text>
          </VStack>

          <Box pos="relative" w="full" h="300px">
            {place === 1 ? (
              <Image
                left="0"
                top="0"
                pos="absolute"
                as={motion.img}
                w="full"
                initial={false}
                h="full"
                bg="green"
                layoutId="one"
                src="https://cdn.dribbble.com/users/1254731/screenshots/16899784/media/9d83b579cc6279663ac0324bfc15d94f.jpg?compress=1&resize=1000x750&vertical=top"
              />
            ) : (
              <Box w="full" h="300px" />
            )}
          </Box>
        </HStack>
        <Text color="gray" maxW="1300px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </Text>
      </VStack>

      <HStack
        w="full"
        spacing="50px"
        justifyContent="space-between"
        alignItems="start"
        pt="250px"
        maxW="1300px"
      >
        <VStack alignItems="start" w="55%" spacing="30px">
          <Text
            fontFamily="playFair"
            fontSize="50px"
            whiteSpace="nowrap"
            ref={newProduct}
          >
            some profuct name
          </Text>
          <Box color="gray" pl="50px" w="auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </Box>
        </VStack>
        <Box w="40%" h="300px" pos="relative">
          {place === 2 && (
            <Box
              as={motion.div}
              layoutId="one"
              pos="absolute"
              top="0"
              left="0"
              w="full"
              h="full"
              bg="green"
            />
          )}
        </Box>
      </HStack>
      <VStack w="full" h="auto" pos="relative">
        <Image opacity="0" w="full" h="500px" border="none" />
        {place === 3 && (
          <Image
            pos="absolute"
            src="/cover.png"
            top="0"
            left="0"
            as={motion.img}
            layoutId="one"
            w="full"
            h="full"
            border="none"
          />
        )}
        <VStack w="full" h="auto" pos="absolute" bottom="0" p="30px">
          <Text fontSize="50px" fontFamily="playFair">
            some goood words
          </Text>
          <Box textAlign="center" color="gray" ref={someGood}>
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
