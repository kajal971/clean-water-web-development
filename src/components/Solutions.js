import React from "react";
import Slider from "react-slick";
import {
  Flex,
  Stack,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import img1 from "../Asset/WaterSolutions1.jpg";
import img2 from "../Asset/WaterSolutions2.jpg";
import { useRouter } from "next/router";

export default function Solutions() {
  const router = useRouter()
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (

    <Stack pb="10vw">
      <Flex justify={"center"}>
        <Text
          mt='6rem'
          fontWeight={"bold"}
          fontSize={["7vw", "6vw", "2.5vw"]}
          color="#165983"
          borderBottom={"5px solid rgba(66, 141, 85, 1)"}
        >
          Products
        </Text>
      </Flex>
      <Flex justify={"center"} mb="3vw">
        <Text
          textAlign={"center"}
          as='h4'
          fontWeight={"bold"}
          fontSize={["4vw", "6vw", "2.5vw"]}
          color="#165983"
        >
          Floating Wetlands, Aerators, Bacterial Cultures
        </Text>
      </Flex>
      <Flex w="100%" display={["flex", "none", "none"]} justify="center">
        <Text
          w={["95%", "80%", "80%"]}
          fontWeight={"bold"}
          fontSize={["var(--fs--250)", "var(--fs--250)", "var(--fs--200)"]}
          mb="2.5vw"
          textAlign="center"
        >
          Innovative Water Infrastructure for a Sustainable Future
        </Text>
      </Flex>
      <Flex flexDirection={["column-reverse", "column-reverse", "row-reverse"]}>
        <Stack
          w={["100%", "100%", "51%"]}
          align={["center", "center", "flex-start"]}
          pl={["0px", "0px", "10px"]}
          textAlign={["left", "left", "left"]}
          mt={["5vw", "3vw", "0"]}
        >
          <Text
            w="80%"
            fontWeight={"bold"}
            fontSize={["var(--fs--250)", "var(--fs--250)", "var(--fs--200)"]}
            mb="1.5vw"
            display={["none", "block", "block"]}
          >
            Innovative Water Infrastructure for a Sustainable Future
          </Text>
          <Text
            w="80%"
            fontSize={["var(--fs--150)", "var(--fs--150)", "var(--fs--100)"]}
          >
            Our solutions are deeply inspired by natural ecosystems,
            ensuring a harmonious coexistence with the environment while also
            contributing to groundwater preservation and fostering
            sustainability.
            <br />
            <br />
            We offer floating islands in different shapes, sizes, and materials,
            incorporating specialised wetland plants and bio media for
            bioremediation. These islands are unique in their use of biomedia
            which enable the development of biofilms of friendly bacteria that
            take up excess nutrients upto 4 times faster than plants. The
            islands also serve as habitats for various species of aquatic
            animals, insects and birds ensuring the development of a robust
            ecosystem.
            <br />
            <br />
            Our floating aerators facilitate efficient
            water mixing, improving oxygen levels for a healthier aquatic
            ecosystem while reducing loss of water to evaporation.
            <br />
            <br />
            We provide bacterial solutions to tackle eutrophication quickly
            and safely, curbing the spread of algal blooms and other species
            such water hyacinths.
            <br />
          </Text>
        </Stack>
        <Stack mb={["6vw", "6vw", "0px"]} w={["100%", "100%", "55%"]}>
          <Stack>
            <Slider {...settings}>
              <div>
                <Image
                  alt=""
                  src={img1.src}
                  w={["95%", "90vw", "40vw"]}
                  h={["70vw", "60vw", "30vw"]}
                  mx={["2.5vw", "5vw", "5vw"]}
                  mt={["5vw", "2vw", "4vw"]}
                  borderRadius={"30px"}
                />
              </div>
              <div>
                <Image
                  alt=""
                  src={img2.src}
                  w={["95%", "90vw", "40vw"]}
                  h={["70vw", "60vw", "30vw"]}
                  mx={["2.5vw", "5vw", "5vw"]}
                  mt={["5vw", "2vw", "4vw"]}
                  borderRadius={"30px"}
                />
              </div>
            </Slider>
          </Stack>
          <Stack w="100%" align={"center"} mt={["70px", "100px", "100px"]}>
            <Button w="240px" h="35px" bg="#0090E7" color="white"
              onClick={() => {
                router.push("/products")
              }}
            >
              Learn more
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
}
