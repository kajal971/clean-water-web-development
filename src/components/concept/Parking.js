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
import img from "@/Asset/Concept/conceptParking2.jpg";

export default function Parking() {
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
        Creating Floating Real E state
      </Text>
      <Image
        alt=""
        src={img.src}
        w={["95%", "93vw", "45.5vw"]}
        h={["70vw", "60vw", "30vw"]}
        mx={["0", "0", "4.5vw"]}
        mb={["20px", "10px", "0px"]}
        borderRadius={"20px"}
        boxShadow={"0px 0px 5px 0px black"}
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
          Creating Floating Real Estate
        </Text>
        <Text
          w={["85%", "80%", "80%"]}
          fontSize={["var(--fs--150)", "var(--fs--150)", "var(--fs--100)"]}
        >
          Floating islands can revolutionize the concept of parking by offering
          floating parking spots in water bodies. With a blend of functionality
          and aesthetics, these floating parking areas provide a refreshing and
          eco-friendly alternative to traditional parking spaces.
        </Text>
      </Stack>
    </Flex>
  );
}
