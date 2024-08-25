import React from "react";
import img from "@/Asset/Impact/impactSustainabilityImg.png";
import {
  Box,
  Flex,
  Stack,
  Text,
  Button,
  Image,
  Center,
} from "@chakra-ui/react";

export default function Sustainability() {
  return (
    <Stack>
      <Flex w="100%" display={["flex", "none", "none"]} justify="center">
        <Text
          w="80%"
          fontWeight={"bold"}
          fontSize={["var(--fs--250)", "var(--fs--250)", "var(--fs--200)"]}
          mb="4vw"
          textAlign={"center"}
        >
          Long-term sustainability of water resources
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
            Long-term sustainability of water resources
          </Text>
          <Text
            w="80%"
            fontSize={["var(--fs--150)", "var(--fs--150)", "var(--fs--100)"]}
          >
            Our efforts contribute to the long-term sustainability of water
            resources. We focus on improving groundwater quality, ensuring a
            reliable and clean water supply for present and future generations.
            By addressing water pollution and scarcity, we play a critical role
            in safeguarding public health and the environment.
          </Text>
        </Stack>
        <Stack align={"center"} w={["100%", "100%", "55%"]}>
          <Image
            alt=""
            src={img.src}
            w={["100%", "96vw", "50vw"]}
            h={["70vw", "60vw", "30vw"]}
            pb={["3vw", "0", "0"]}
            px={["0", "0", "4.5vw"]}
            mb="1vw"
          />
        </Stack>
      </Flex>
      <Stack align={"center"} my="12vw">
        <Text
          textAlign={"center"}
          boxShadow={"0px 0px 20px 0px green"}
          w="80%"
          fontSize={["var(--fs--200)", "var(--fs--200)", "var(--fs--150)"]}
          fontWeight={"bold"}
          borderRadius={"20px"}
          py="50px"
          px="30px"
          className="grad-text"
        >
          Beautifully restored water bodies become destinations for visitors,
          attracting tourists who appreciate the natural beauty and cultural
          significance of these rejuvenated environments.
        </Text>
      </Stack>
    </Stack>
  );
}
