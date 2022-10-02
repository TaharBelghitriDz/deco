import {
  Box,
  ChakraProps,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion, useAnimationControls, useInView } from "framer-motion";
import { useRef } from "react";
import products from "utils/products";

const Elmnt = (
  props: ChakraProps & { products: { src: string; main: string }[] }
) => {
  const ref = [useRef(null), useRef(null), useRef(null)];
  const isViewed = [useInView(ref[0]), useInView(ref[1]), useInView(ref[2])];

  const controllers = [
    useAnimationControls(),
    useAnimationControls(),
    useAnimationControls(),
  ];

  return (
    <Stack w={{ start: "200px", md: "full" }} {...props}>
      {props.products.map((e, i) => (
        <Box
          h="auto"
          w="auto"
          key={i}
          pos="relative"
          as={motion.div}
          opacity={0}
          animate={
            isViewed[i]
              ? { opacity: 1, transition: { duration: 0.2, delay: 0.5 } }
              : {}
          }
          ref={ref[i]}
          onHoverStart={() => controllers[i].start({ opacity: 1 })}
          onHoverEnd={() => controllers[i].start({ opacity: 0 })}
          overflow="hidden"
        >
          <Image src={e.src} w="300px" />
          <Box
            top="0"
            left="0"
            pos="absolute"
            h="full"
            w="full"
            bg="rgb(0,0,0,50%)"
            p="20px"
            opacity={0}
            as={motion.div}
            animate={controllers[i]}
          >
            <Text color="white" fontWeight="bold" fontSize="30px">
              {e.main}
            </Text>
            <Text color="gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum,
            </Text>
          </Box>
        </Box>
      ))}
    </Stack>
  );
};

const Goals = () => {
  const ref = useRef(null);
  const isVIewed = useInView(ref);
  return (
    <VStack
      py="150px"
      w="full"
      maxW="1000px"
      alignItems="starts"
      spacing="50px"
      px={{ start: "5%", md: "50px" }}
    >
      <Text
        as={motion.div}
        fontSize={{ start: "30px", md: "50px" }}
        fontWeight="bold"
        fontFamily="playFair"
        opacity={0}
        animate={isVIewed && { opacity: 1 }}
      >
        Our Goals
      </Text>
      <Text
        color="gray"
        maxW="700px"
        ref={ref}
        opacity={0}
        as={motion.div}
        animate={isVIewed && { opacity: 1, transition: { duration: 0.5 } }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Curabitur tempus urna at turpis condimentum lobortis.
      </Text>
      <Image
        src="/our-goal.jpg"
        w="full"
        objectFit="cover"
        opacity={0}
        as={motion.img}
        animate={isVIewed ? { opacity: 1, transition: { duration: 0.5 } } : {}}
      />
      <Text
        pt="100px"
        as={motion.div}
        fontSize={{ start: "30px", md: "50px" }}
        fontWeight="bold"
        fontFamily="playFair"
        opacity={0}
        animate={isVIewed && { opacity: 1 }}
        w="full"
        textAlign="center"
      >
        What we gonna Give you
      </Text>
      <HStack w="full" pt="50px" justifyContent="center">
        <Elmnt products={products.slice(0, 3)} />
        <Elmnt products={products.slice(3, 6)} />
        <Elmnt
          display={{ start: "none", md: "flex" }}
          products={products.slice(6, 9)}
        />
      </HStack>
    </VStack>
  );
};

export default Goals;
