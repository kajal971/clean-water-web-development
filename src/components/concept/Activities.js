import React from "react";
import {
  Box,
  Flex,
  Stack,
  Text,
  Button,
  Image,
  Center,
} from "@chakra-ui/react";
import img from "@/Asset/Concept/conceptActivities2.jpg";

export default function Activities() {
  return (
    <Flex
      flexDirection={["column", "column", "row"]}
      alignItems={["center", "center", "flex-start"]}
      pb="10vw"
    >
      <Text
        fontWeight={"bold"}
        fontSize={["var(--fs--250)", "var(--fs--250)", "var(--fs--200)"]}
        mb="4vw"
        display={["block", "none", "none"]}
        textAlign={"center"}
        mx="20px"
      >
        Floating Islands for Recreational Activities
      </Text>
      <Image
        alt=""
        src={img.src}
        w={["95%", "93vw", "45.5vw"]}
        h={["70vw", "60vw", "30vw"]}
        mx={["0", "0", "4.5vw"]}
        mb={["20px", "10px", "0px"]}
        borderRadius={"20px"}
        boxShadow={"0px 0px 10px 0px black"}
      />
      <Stack
        pt="2vw"
        alignItems={["center", "center", "flex-start"]}
        ml={["0px", "0px", "50px"]}
      >
        <Text
          w={["0", "80%", "60%"]}
          fontWeight={"bold"}
          fontSize={["var(--fs--250)", "var(--fs--250)", "var(--fs--200)"]}
          mb="1.5vw"
          display={["none", "block", "block"]}
        >
          Floating Islands for Recreational Activities
        </Text>
        <Text
          w={["85%", "80%", "80%"]}
          fontSize={["var(--fs--150)", "var(--fs--150)", "var(--fs--100)"]}
        >
          Escape to floating parks that redefine leisure and relaxation. Our
          floating islands create expansive recreational spaces for picnics,
          yoga sessions, and leisure activities. Unwind amidst the soothing
          water and lush surroundings, and find serenity in the heart of nature.
        </Text>
      </Stack>
    </Flex>
  );
}
