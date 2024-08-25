import React from "react";
import img from "@/Asset/Concept/conceptArtificial2.jpg";
import {
  Box,
  Flex,
  Stack,
  Text,
  Button,
  Image,
  Center,
} from "@chakra-ui/react";

export default function Artificial() {
  return (
    <Stack align={"center"} pb="6vw">
      <Image
        alt=""
        src={img.src}
        mb="5vw"
        w="60vw"
        borderRadius={"20px"}
        boxShadow={"0px 0px 10px 0px black"}
      />
      <Button
        bg="rgba(0, 144, 231, 1)"
        color="white"
        mx={["0px", "0px", "50px"]}
        w={["150px", "170px", "200px"]}
        fontSize={["var(--fs--150)", "var(--fs--150)", "var(--fs--100)"]}
      >
        Contact Us Now
      </Button>
    </Stack>
  );
}
