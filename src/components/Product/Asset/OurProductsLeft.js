import React from "react";
import {
  Box,
  Flex,
  Stack,
  Text,
  Button,
  Image,
  Center,
  Heading,
} from "@chakra-ui/react";

export default function OurProductsLeft(props) {
  return (
    <Flex position="relative" justifyContent={["center", "right", "right"]}>
      <Image
        alt=""
        w={["95%", "90%", "40rem"]}
        h={"400px"}
        borderRadius={["20px"]}
        src={props.img}
        mt="100px"
      />
      <Stack
        padding={2}
        w={["95%", "70%", "25rem"]}
        bgColor="#292929"
        opacity={0.7}
        borderRadius={["20px"]}
        position={"absolute"}
        color={"white"}
        left={["2.5%", "0rem", "0rem"]}
        bottom={["-90px"]}
        backdropBlur={"0.5"}
      >
        <Stack direction="row" align={["center"]} justify='space-between' px={5}>
          <Text fontWeight="bold">Number:</Text>
          <Text>{props.number}</Text>
        </Stack>
        <Stack direction="row" align={["center"]} justify='space-between' px={5}>
          <Text fontWeight="bold">Size:</Text>
          <Text>{props.size}</Text>
        </Stack>
        <Stack direction="row" align={["center"]} justify='space-between' px={5}>
          <Text fontWeight="bold">Max. Load:</Text>
          <Text>{props.maxLoad}</Text>
        </Stack>
        <Stack direction="row" align={["center"]} justify='space-between' px={5}>
          <Text fontWeight="bold">Operational Load:</Text>
          <Text>{props.opLoad}</Text>
        </Stack>
        <Stack direction="row" align={["center"]} justify='space-between' px={5}>
          <Text fontWeight="bold">Frame:</Text>
          <Text>{props.frame}</Text>
        </Stack>
        <Stack direction="row" align={["center"]} justify='space-between' px={5}>
          <Text fontWeight="bold">Finish:</Text>
          <Text>{props.finish}</Text>
        </Stack>
        <Stack direction="row" align={["center"]} justify='space-between' px={5}>
          <Text fontWeight="bold">Expected Life:</Text>
          <Text>{props.life}</Text>
        </Stack>
        <Stack direction="row" align={["center"]} justify='space-between' px={5}>
          <Text fontWeight="bold">Ideal For:</Text>
          <Text>{props.ideal}</Text>
        </Stack>
      </Stack>
    </Flex>
  );
}
