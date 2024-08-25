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
import arrow from "@/Asset/Arrow1.png";
import img1 from "../Asset/implementation-img-1.png";
import img2 from "../Asset/implementation-img-2.png";
import img3 from "../Asset/implementation-img-3.png";
import img4 from "../Asset/implementation-img-4.png";

export default function Row1() {
  return (
    <Stack align="center" pb={["170px", "200px", "300px"]}>
      <Flex
        w={["90%","30%","35%"]}
        justify="center"
        flexDirection={["column", "column", "row"]}
        pb="10px"
        align={"center"}
      >
        <Image src={img1.src} alt="" />
      </Flex>
      <Flex justify={"center"} pb="80px">
        <Image alt="" src={arrow.src} w="20px" h="150px" />
      </Flex>
      <Flex
        justify="center"
        w={["90%","30%","35%"]}
        pb="10px"
        flexDirection={["column", "column", "row"]}
        align={"center"}
      >
        <Image src={img2.src} alt="" />
      </Flex>
      <Flex justify={"center"} pb="80px">
        <Image alt="" src={arrow.src} w="20px" h="150px" />
      </Flex>
      <Flex
        justify="center"
        w={["90%","30%","35%"]}
        pb="10px"
        flexDirection={["column", "column", "row"]}
        align={"center"}
      >
        <Image src={img3.src} alt="" />
      </Flex>
      <Flex justify={"center"} pb="80px">
        <Image alt="" src={arrow.src} w="20px" h="150px" />
      </Flex>
      <Flex
        justify="center"
        w={["90%","30%","35%"]}
        pb="10px"
        flexDirection={["column", "column", "row"]}
        align={"center"}
      >
        <Image src={img4.src} alt="" />
      </Flex>
      <Text color="white" fontWeight={"bold"} fontSize={"20px"}>
        Nature takes its course
      </Text>
    </Stack>
  );
}
