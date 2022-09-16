import { Box } from "@chakra-ui/react";
import useStore, { useGetFun, useGetState } from "utils/state";

const Footer = () => {
  const state = useStore((state) => ({
    values: state.state,
    add: state.change,
  }));

  const setIsTop = useGetState("cart");

  console.log("footer build");
  console.log(setIsTop);

  return (
    <Box fontFamily="Josefin" onClick={() => state.add()}>
      {state.values.isTop}
    </Box>
  );
};
export default Footer;
