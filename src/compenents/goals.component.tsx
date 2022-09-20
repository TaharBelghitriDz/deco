import { HStack, Image, Spinner, Stack, Text, VStack } from "@chakra-ui/react";
import { motion, useAnimationControls, useInView } from "framer-motion";
import { useRef } from "react";

const Elmnt = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const ref1IsViewed = useInView(ref1);
  const ref2IsViewed = useInView(ref2);

  const controlls1 = useAnimationControls();
  const controlls2 = useAnimationControls();

  if (ref1IsViewed)
    controlls1.start({
      opacity: 1,
      transition: { duration: 0.2 },
    });

  if (ref2IsViewed)
    controlls2.start({
      opacity: 1,
      transition: { duration: 0.2 },
    });

  return (
    <>
      <HStack
        justifyContent="space-between"
        w="full"
        alignItems="start"
        h="auto"
        opacity={0}
        overflow="hidden"
        as={motion.div}
        animate={controlls1}
      >
        <p />

        <Image
          as={motion.img}
          initial={{ width: "0" }}
          animate={
            ref1IsViewed ? { width: "300px", transition: { type: "just" } } : {}
          }
          h="200px"
          src="/cover.png"
        />

        <Stack w="400px" h="300px" overflow="hidden" pos="relative">
          <VStack
            as={motion.div}
            alignItems="start"
            pos="absolute"
            top="0"
            left="0"
            opacity={0}
            initial={{ top: "100px", opacity: 0 }}
            animate={
              ref1IsViewed
                ? { top: "0px", opacity: 1, transition: { type: "just" } }
                : {}
            }
          >
            <Text fontWeight="bold" fontSize="30px">
              sofa
            </Text>
            <Text color="gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis.
            </Text>
          </VStack>
        </Stack>
      </HStack>
      <p ref={ref1} />

      <HStack
        justifyContent="space-between"
        w="full"
        alignItems="start"
        opacity={0}
        overflow="hidden"
        as={motion.div}
        animate={controlls2}
      >
        <p />
        <Stack w="400px" h="300px" overflow="hidden" pos="relative">
          <VStack
            as={motion.div}
            alignItems="start"
            pos="absolute"
            top="0"
            left="0"
            opacity={0}
            initial={{ top: "100px", opacity: 0 }}
            animate={
              ref2IsViewed
                ? { top: "0px", opacity: 1, transition: { type: "just" } }
                : {}
            }
          >
            <Text fontWeight="bold" fontSize="30px">
              sofa
            </Text>
            <Text color="gray" ref={ref2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis.
            </Text>
          </VStack>
        </Stack>
        <Image
          as={motion.img}
          initial={{ width: "0" }}
          animate={
            ref2IsViewed ? { width: "300px", transition: { type: "just" } } : {}
          }
          h="200px"
          src="/cover.png"
        />
      </HStack>
      <p ref={ref2} />
    </>
  );
};

const Goals = () => {
  const ref = useRef(null);
  const isVIewed = useInView(ref);
  return (
    <VStack
      pt="150px"
      w="full"
      maxW="1000px"
      alignItems="starts"
      spacing="50px"
    >
      <Text
        as={motion.div}
        color="green"
        fontSize="50px"
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
        animate={isVIewed && { opacity: 1, transition: { delay: 0.5 } }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Curabitur tempus urna at turpis condimentum lobortis.
      </Text>
      <Image
        src="/cover.png"
        w="full"
        opacity={0}
        as={motion.img}
        animate={isVIewed && { opacity: 1, transition: { delay: 1 } }}
      />
      <VStack spacing="0" pt="100px">
        <Elmnt />
        <Elmnt />
        <Elmnt />
      </VStack>
    </VStack>
  );
};

export default Goals;
