import React from "react";
import {
  Flex,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";
import arrow from "@/Asset/blog/blog-arrow-icon.png";
import { useRouter } from "next/router";

export default function ProjectsCard(props) {
  const { data } = props;
  const router = useRouter();
  return (
    <Stack
    cursor={'pointer'}
      className="blogCard"
      bg="white"
      p="10px"
      borderRadius={"15px"}
      onClick={() => {
        router.push(`/projects/${data.slug}`)
      }}
    >
      <Image borderRadius={'10px'} src={data.defaultImage} alt="" />
      <Text fontWeight={"bold"} textAlign={'center'}>{data.title}</Text>
      <Flex w="100%" mt="15px" justify={"center"} align="center">
        <Image
          cursor={'pointer'}
          // onClick={() => {
          //   router.push(`/projects/${data.slug}`)
          // }}
          src={arrow.src} alt="" w="20px" />
      </Flex>
    </Stack>
  );
}
