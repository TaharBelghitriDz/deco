import { Image, Stack } from "@chakra-ui/react";

export default () => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      h="100vh"
      w="100vw"
      backgroundImage="url('/loading-background.png')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Image src="/loading-text.svg" w="90%" />
    </Stack>
  );
};
