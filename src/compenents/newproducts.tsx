import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import {
  forwardRef,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { UseState } from "types";
import useStore, { useGetFun, useGetState } from "utils/state";
import { Arrow } from "./icons";

const useView = (ref: any) => useInView(ref);

const Array = forwardRef(
  (
    props: { key: number; ref: MutableRefObject<null>; i: number },
    ref: any
  ) => {
    const setView = useStore((state) => ({
      setView: state.isViewed,
    }))["setView"];

    const useGetFun1 = (key: keyof Omit<UseState, "state">) =>
      useStore((state) => state[key] as UseState[typeof key]);

    // console.log("typeof useGetFun1");
    // console.log(typeof useGetFun1("change"));
    // console.log(useGetFun1("isViewed"));
    // const r = useGetFun1("isViewed");
    // console.log("t");
    // console.log(r(0, true));

    setView(props.i, useView(ref));
    //  console.log("item" + props.i + " => " + useView(ref));

    return (
      <Box {...props} ref={ref} h="50px" w="300px" bg="green" flex="none" />
    );
  }
);

const NewProducts = () => {
  const [current, setCurrent] = useState<number>(0);

  const detecters = [useRef(null), useRef(null)];

  const products = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const viewedItems = useGetState("viewdItems");

  useEffect(() => {
    console.log("viewedItems");
    console.log(viewedItems);
  }, [viewedItems]);

  return (
    <VStack maxW="1000px" spacing="50px" pt="150px">
      <Text fontSize="50px" fontWeight="bold">
        our new products
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
            console.log("here");
            console.log(viewedItems);

            (products[3].current as any).scrollIntoView({
              behavior: "smooth",
            });
            // if (current + 1 <= products.length) {
            //   setCurrent((i) => i + 1);
            //   (products[current].current as any).scrollIntoView({
            //     behavior: "smooth",
            //   });
            // }
          }}
        />
        <ArrowAni
          onClick={() => {
            if (current >= 1) {
              setCurrent((i) => i - 1);
              (products[current].current as any).scrollIntoView({
                behavior: "smooth",
              });
            }
          }}
          transform="rotate(180deg)"
        />
      </HStack>
      <HStack overflow="hidden" w="full" flexGrow={1}>
        <p ref={detecters[0]} />
        {products.map((e, i) => {
          return <Array i={i} key={i} ref={products[i]} />;
        })}
        <p ref={detecters[1]} />
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
