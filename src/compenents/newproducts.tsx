import {
  Box,
  Collapse,
  HStack,
  Image,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { motion, useAnimationControls, useInView } from "framer-motion";
import { forwardRef, useEffect, useRef, useState } from "react";
import { StateType } from "types";
import { useGetFun, useGetState } from "utils/state";
import { Arrow } from "./icons";

const Array = forwardRef((props: { key: number; i: number }, ref: any) => {
  const isLeftVIew = useInView(ref);
  const controls = useAnimationControls();
  useGetFun("isViewed")(props.i, isLeftVIew);

  return (
    <>
      <VStack
        {...props}
        as={motion.div}
        ref={ref}
        onHoverStart={() => controls.start({ opacity: 1 })}
        onHoverEnd={() => controls.start({ opacity: 0 })}
        flex="none"
        spacing="0"
        w="300px"
        h="400px"
        alignItems="flex-end"
        overflow="hidden"
        flexGrow={1}
        pos="relative"
      >
        <Image
          src="/cover.png"
          objectFit="cover"
          flex="none"
          userSelect="none"
          pos="absolute"
          top="0"
          left="0"
          w="full"
          h={400}
        />
        <Box
          h="full"
          w="full"
          zIndex={4}
          bgGradient="linear(#FFFFFF00 0%, rgb(0,0,0,50%) 100%)"
        />
        <VStack
          as={motion.div}
          animate={controls}
          alignItems="flex-start"
          flex="none"
          w="full"
          h="auto"
          p="10px"
          bg="rgb(0,0,0,50%)"
          zIndex={3}
          opacity="0"
        >
          <Text
            fontSize="32px"
            lineHeight="32px"
            fontWeight="bold"
            color="white"
          >
            some product name
          </Text>
          <Text color="yellow">$ 134.68</Text>
        </VStack>
      </VStack>
    </>
  );
});

const NewProducts = () => {
  const ref = useRef(null);

  const products = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const viewedItems = useGetState("viewdItems") as StateType["viewdItems"];

  return (
    <VStack maxW="1500px" spacing="50px" pt="150px">
      <Text fontSize="50px" fontWeight="bold" fontFamily="playFair">
        Our New Products
      </Text>
      <Text color="gray" textAlign="center" maxW="700px">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Curabitur tempus urna at turpis condimentum lobortis.
      </Text>
      <HStack>
        <ArrowAni
          onClick={() => {
            (ref.current as any).scrollBy({
              top: 0,
              left: -325,
              behavior: "smooth",
            });
          }}
        />
        <ArrowAni
          onClick={() => {
            (ref.current as any).scrollBy({
              top: 0,
              left: 325,
              behavior: "smooth",
            });
          }}
          transform="rotate(180deg)"
        />
      </HStack>
      <HStack
        overflow="hidden"
        w="1300px"
        flexGrow={1}
        ref={ref}
        spacing="25px"
      >
        {products.map((e, i) => {
          return <Array i={i} key={i} ref={products[i]} />;
        })}
      </HStack>
    </VStack>
  );
};

const ArrowAni = (props: any) => {
  const [hover, setHover] = useState<boolean | string>(true);
  return (
    <>
      {hover && (
        <Box
          as={motion.div}
          animate={{ transition: { delay: 1 } }}
          onHoverStart={() => setHover(false)}
          rounded="full"
          cursor="pointer"
          {...props}
        >
          <Arrow
            color="black"
            h="50px"
            w="50px"
            cursor="pointer"
            p="5px"
            rounded="full"
          />
        </Box>
      )}
      {!hover && (
        <Box
          as={motion.div}
          animate={{ transition: { delay: 1 } }}
          onHoverEnd={() => setHover(true)}
          rounded="full"
          cursor="pointer"
          {...props}
        >
          <Arrow
            color="white"
            h="50px"
            w="50px"
            bg="black"
            cursor="pointer"
            p="5px"
            rounded="full"
          />
        </Box>
      )}
    </>
  );
};

export default NewProducts;
