import React from "react";
import Slider from "react-slick";
import {
  Box,
  Flex,
  Stack,
  Text,
  Button,
  Image,
  Center,
} from "@chakra-ui/react";
// import img from '../Asset/WaterPollution.png'
import img1 from "../Asset/WaterProblem1.jpg";
import img2 from "../Asset/WaterProblem2.jpg";

export default function Problems() {
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
      <Flex justify={"center"} mb="3vw">
        <Text
          fontWeight={"bold"}
          fontSize={["7vw", "6vw", "2.5vw"]}
          color="#165983"
          borderBottom={"5px solid rgba(66, 141, 85, 1)"}
        >
          Problems
        </Text>
      </Flex>
      <Flex w="100%" display={["flex", "none", "none"]} justify="center">
        <Text
          w="80%"
          fontWeight={"bold"}
          fontSize={["var(--fs--250)", "var(--fs--250)", "var(--fs--200)"]}
          mb="2.5vw"
          textAlign="center"
        >
          Navigating Water Pollution and Water Scarcity
        </Text>
      </Flex>
      <Flex flexDirection={["column-reverse", "column-reverse", "row"]}>
        <Stack
          w={["100%", "100%", "51%"]}
          align={["center", "center", "flex-end"]}
          pr={["0px", "0px", "30px"]}
          textAlign={["left", "left", "left"]}
          mt={["10vw", "8vw", "0"]}
        >
          <Text
            w="80%"
            fontWeight={"bold"}
            fontSize={["var(--fs--250)", "var(--fs--250)", "var(--fs--200)"]}
            mb="1.5vw"
            display={["none", "block", "block"]}
          >
            Navigating Water Pollution and Water Scarcity
          </Text>
          <Text
            w="80%"
            fontSize={["var(--fs--150)", "var(--fs--150)", "var(--fs--100)"]}
          >
            Water pollution and water scarcity are interconnected challenges
            that demand urgent attention.
            <br />
            <br />
            Rapid industrialization, improper waste disposal, and agricultural
            runoff have led to severe contamination of our water bodies,
            disrupting delicate ecosystems and threatening public health. This
            degradation of water ecosystems has far-reaching consequences,
            including the loss of biodiversity, destruction of habitats,
            compromised access to clean drinking water, and depletion of local
            water resources, exacerbating water scarcity in our communities.
            <br />
            <br />
            From the detrimental effects of eutrophication caused by excessive
            nutrient runoff to the harmful impact of industrial effluents on our
            water bodies, we understand the complexity and severity of these
            problems. Through innovation, determination, and an ardent
            understanding of the environment we have developed sustainable
            solutions to address these pressing issues.
            <br />
          </Text>
          <Text
            w="80%"
            className="grad2"
            fontWeight={"bold"}
            fontSize={["var(--fs--150)", "var(--fs--150)", "var(--fs--100)"]}
          >
            <br />
            {
              "Together, let's create a future where clean water is abundant and our ecosystems thrive"
            }
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
                  mx={["2.5vw", "5vw", "6vw"]}
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
                  mx={["2.5vw", "5vw", "6vw"]}
                  mt={["5vw", "2vw", "4vw"]}
                  borderRadius={"30px"}
                />
              </div>
            </Slider>
          </Stack>
          {/* <Flex justify={'center'}>
                    <Box w='15px' h='15px' mr='10px' borderRadius={'50%'} border='1px solid black' bg='#428D55'></Box>
                    <Box w='15px' h='15px' borderRadius={'50%'} border='1px solid black'></Box>
                </Flex> */}
        </Stack>
      </Flex>
    </Stack>
  );
}
