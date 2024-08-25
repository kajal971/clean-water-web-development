import React from "react";
import img from "@/Asset/Concept/conceptPersonalizing2.jpg";
import {
  Box,
  Flex,
  Stack,
  Text,
  Button,
  Image,
  Center,
} from "@chakra-ui/react";

export default function Personalizing() {
  return (
    <Stack pb="10vw">
      <Flex w="100%" display={["flex", "none", "none"]} justify="center">
        <Text
          w="80%"
          fontWeight={"bold"}
          fontSize={["var(--fs--250)", "var(--fs--250)", "var(--fs--200)"]}
          mb="4vw"
          textAlign={"center"}
        >
          Floating Islands for Personalizing and Elevating Your Space
        </Text>
      </Flex>
      <Flex flexDirection={["column-reverse", "column-reverse", "row"]}>
        <Stack
          pt={["0", "0", "3vw"]}
          w={["100%", "100%", "51%"]}
          align={["center", "center", "flex-end"]}
          pr={["0px", "0px", "30px"]}
          textAlign={["left", "left", "left"]}
        >
          <Text
            w="80%"
            fontWeight={"bold"}
            fontSize={["var(--fs--250)", "var(--fs--250)", "var(--fs--200)"]}
            mb="1.5vw"
            display={["none", "block", "block"]}
          >
            Floating Islands for Personalizing and Elevating Your Space
          </Text>
          <Text
            w="80%"
            fontSize={["var(--fs--150)", "var(--fs--150)", "var(--fs--100)"]}
          >
            Elevate your space and infuse it with personality using our
            versatile floating islands. From schools to cities, our innovative
            solutions allow you to personalize your water bodies and create
            unique landscapes.
          </Text>
        </Stack>
        <Stack align={"center"} w={["100%", "100%", "55%"]}>
          <Image
            alt=""
            src={img.src}
            w={["100%", "99%", "45.5vw"]}
            h={["70vw", "60vw", "30vw"]}
            mx={["0", "0", "4.5vw"]}
            mb={["20px", "10px", "0px"]}
            borderRadius={"20px"}
            boxShadow={"0px 0px 10px 0px black"}
          />
        </Stack>
      </Flex>
    </Stack>
  );
}
