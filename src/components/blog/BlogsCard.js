import React from "react";
import {
  Box,
  Flex,
  Stack,
  Text,
  Button,
  Image,
  FormControl,
  Input,
  Textarea,
} from "@chakra-ui/react";
import arrow from "@/Asset/blog/blog-arrow-icon.png";

export default function BlogsCard(props) {
  const { data } = props;
  return (
    <Stack
      className="blogCard"
      //   w={["90%", "70%", "200px"]}
      bg="white"
      p="10px"
      borderRadius={"15px"}
      //   mx={["0px", "0px", "100px"]}
      //   my="30px"
    >
      <Image src={data.img} alt="" />
      <Text fontWeight={"medium"}>{data.heading}</Text>
      <Flex w="100%" mt="15px" justify={"space-between"} align="center">
        <Text color="gray" fontSize={"15px"}>
          {data.date}
        </Text>
        <Image src={arrow.src} alt="" w="20px" />
      </Flex>
    </Stack>
  );
}
