import {
  Box,
  ChakraProps,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion, useAnimationControls, useInView } from "framer-motion";
import { forwardRef, useEffect, useRef, useState } from "react";
import { StateType } from "types";
import products from "utils/products";
import { useGetFun, useGetState } from "utils/state";
import { Arrow } from "./icons";

const Array = forwardRef(
  (props: ChakraProps & { key: number; i: number; product: any }, ref: any) => {
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
          minH="300px"
          alignItems="start"
          justifyContent="start"
          overflow="hidden"
          flexGrow={1}
          pos="relative"
        >
          <Image
            src={props.product.src}
            objectFit="contain"
            flex="none"
            userSelect="none"
            top="0"
            left="0"
            //w="300px"
            maxW={{ start: "300px", os: "500px" }}
            maxH={{ start: "300px", os: "700px" }}
          />
        </VStack>
      </>
    );
  }
);

const NewProducts = () => {
  const ref = useRef(null);
  const newProductView = useInView(ref);
  const detecter = useRef(null);
  const productsRef = products.map((e: any) => ((e.ref = useRef(null)), e));
  const [isOnShow, setShow] = useState(false);
  const isViewed = useInView(detecter);
  const [isHovered, setHover] = useState<[boolean, "right" | "left"]>([
    false,
    "left",
  ]);

  useEffect(() => {
    setShow(true);
    console.log("here");
  }, [isViewed]);

  useEffect(() => {
    if (isHovered[0]) {
      function scrollFun() {
        const date = new Date();
        console.log(isHovered[1] + " _ " + date.toLocaleDateString());
        (ref.current as any).scrollBy({
          top: 0,
          behavior: "smooth",
          left: isHovered[1] === "right" ? -50 : 50,
        });
      }
      const interval = setInterval(scrollFun, 100);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isHovered[0]]);

  document.body.style.overflow = "";
  const viewedItems = useGetState("viewdItems") as StateType["viewdItems"];

  return (
    <VStack
      maxW="1500px"
      w="full"
      spacing="50px"
      pt="150px"
      px={{ start: "5%", md: "50px" }}
    >
      <Text
        fontSize={{ start: "30px", lg: "50px" }}
        fontWeight="bold"
        fontFamily="playFair"
      >
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
          onHoverEnd={() => setHover(() => [false, "right"])}
          onHoverStart={() => setHover(() => [true, "right"])}
          onClick={() => {
            (ref.current as any).scrollBy({
              top: 0,
              left: -325,
              behavior: "smooth",
            });
          }}
        />
        <ArrowAni
          onHoverEnd={() => setHover(() => [false, "right"])}
          onHoverStart={() => setHover(() => [true, "left"])}
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
        w="full"
        flexGrow={1}
        ref={ref}
        spacing="25px"
        alignItems="start"
      >
        {productsRef.map((e, i) => {
          return <Array i={i} key={i} ref={e.ref} product={e} />;
        })}
      </HStack>
      <p ref={detecter} />
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
