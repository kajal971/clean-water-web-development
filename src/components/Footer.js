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
import logo from "@/Asset/CleanWaterLogo2.png";
import facebook from "@/Asset/Footer/facebook-logo.png";
import linkedin from "@/Asset/Footer/linkedin-logo.png";
import twitter from "@/Asset/Footer/twitter-logo.png";
import youtube from "@/Asset/Footer/youtube-logo.png";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  return (
    <Stack bg="#00131F" pt="80px">
      <Flex
        justifyContent={"space-evenly"}
        align={["center", "center", "flex-start"]}
        pb="30px"
        flexDirection={["column", "column", "row"]}
      >
        <Stack
          w={["50%", "50%", "21%"]}
          mb={["50px", "50px", "0px"]}
          alignItems={["center", "center", "flex-start"]}
        >
          <Image alt="" src={logo.src} w={["50%", "50%", "40%"]} pb="10px" />
          <Text
            color="white"
            fontSize={["15px", "15px", "13px"]}
            pb="25px"
            textAlign={["center", "center", "left"]}
          >
            Clean water provides nature based solutions for water quality
            improvement and ecological restoration.
          </Text>
          <Button
            w="140px"
            h="35px"
            bg="#0090E7"
            color="white"
            cursor={"pointer"}
            onClick={() => {
              router.push("/contact");
            }}
            _hover={{
              bg: "#0090E7",
            }}
          >
            Get in touch
          </Button>
        </Stack>
        <Stack w="20%" align={"center"} mb={["50px", "50px", "0px"]}>
          <Text color="#0090E7" as="b" fontSize={["29px", "29px", "27px"]}>
            Explore
          </Text>
          <Stack
            color="white"
            fontSize={["15px", "15px", "13px"]}
            align="center"
          >
            <Text
              cursor={"pointer"}
              onClick={() => {
                router.push("/");
              }}
            >
              Home
            </Text>
            <Text
              cursor={"pointer"}
              onClick={() => {
                router.push("/products");
              }}
            >
              Products
            </Text>
            <Text
              cursor={"pointer"}
              onClick={() => {
                router.push("/impact");
              }}
            >
              Impact
            </Text>
            <Text
              cursor={"pointer"}
              onClick={() => {
                router.push("/projects");
              }}
            >
              Projects
            </Text>
            <Text
              cursor={"pointer"}
              onClick={() => {
                router.push("/concepts");
              }}
            >
              Concepts
            </Text>
          </Stack>
        </Stack>
        <Stack w={["30%", "20%", "20%"]} align={"center"}>
          <Text color="#0090E7" as="b" fontSize={["29px", "29px", "27px"]}>
            About
          </Text>
          <Stack
            color="white"
            fontSize={["15px", "15px", "13px"]}
            align="center"
          >
            <Text
              cursor={"pointer"}
              onClick={() => {
                router.push("/about");
              }}
            >About us</Text>
            <Text
              cursor={"pointer"}
              onClick={() => {
                router.push("/contact");
              }}
            >
              Contact us
            </Text>
            <Text
              cursor={"pointer"}
              onClick={() => {
                router.push("/blog");
              }}
            >
              Blogs
            </Text>
          </Stack>
        </Stack>
      </Flex>
      <Flex justify={"flex-end"} mx="20px" pb="10px">
        <Image
          alt="linkedin-logo"
          src={linkedin.src}
          cursor="pointer"
          h="20px"
          mx="5px"
          onClick={() => {
            router.push("https://www.linkedin.com/company/cleanwater/");
          }}
        />
        <Image
          alt="facebook-logo"
          src={facebook.src}
          cursor="pointer"
          h="20px"
          mx="5px"
          onClick={() => {
            router.push("https://www.facebook.com/cleanwater.global");
          }}
        />
        <Image
          alt="youtube-logo"
          src={youtube.src}
          cursor="pointer"
          h="20px"
          mx="5px"
          onClick={() => {
            router.push("https://www.youtube.com/@clean-water8915");
          }}
        />
        <Image
          alt="twitter-logo"
          src={twitter.src}
          cursor="pointer"
          h="20px"
          mx="5px"
        />
      </Flex>
      <Flex justify={"center"} borderTop="1px solid white" p="15px">
        <Text color="white" fontSize={"13px"}>
          © Copyright 2022 Clean-Water (Sustainable Water Technologies Pvt.
          Ltd.)
        </Text>
      </Flex>
    </Stack>
  );
}
