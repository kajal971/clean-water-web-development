import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React, { useRef } from "react";
import img from "@/Asset/solution.png";
import ReactPlayer from "react-player";
const VIDEO_PATH = "/Clean-water-Waterbodies-Technology.mp4";
const AboutSolution = () => {
  const playerRef = useRef(null);
  return (
    <Stack width={"100%"} mb={"85px"}>
      <Flex
        w={"97%"}
        bg={`url(${img.src})`}
        borderRadius={"18px"}
        margin={["5px", "10px", "20px"]}
        backgroundSize={"cover"}
        backgroundRepeat={"no-repeat"}
        backgroundPosition={"center"}
        h={"30vh"}
        align={"center"}
        justify={"center"}
        mb={["20px", "10px", "85px"]}
      >
        <Text color={"white"} fontSize={"30px"} fontWeight={"bold"}>
          How our solutions work
        </Text>
      </Flex>

      <Flex
        width={"100%"}
        justify={"space-evenly"}
        align={"center"}
        flexDir={["column", "column", "row"]}
        mt={["0px", "40px", "0px"]}
      >
        <Text
          w={["90%", "90%", "40%"]}
          mb={["30px", "30px", "0px"]}
          fontSize={["var(--fs--150)", "var(--fs--150)", "var(--fs--100)"]}
        >
          Artificial floating islands function by utilizing plants and
          microorganisms to treat water in natural and artificial water bodies.
          They create a unique ecosystem where plants are grown on floating
          platforms and provide habitats for the local ecology, both above and
          below the water.{" "}
        </Text>
        <Stack>
          {/* <Image alt="" w={["35%", "25%", "15%"]} pb="4.5vw" src={logo.src} /> */}
          <Box display={["none", "none", "block"]}>
            <ReactPlayer
              width={"30vw"}
              height={"25vw"}
              ref={playerRef}
              url={VIDEO_PATH}
              controls={true}
              playing={true}
              loop={true}
              muted="true"
            />
          </Box>
        </Stack>
        <Stack>
          {/* <Image alt="" w={["35%", "25%", "15%"]} pb="4.5vw" src={logo.src} /> */}
          <Box display={["block", "block", "none"]}>
            <ReactPlayer
              width={"90vw"}
              height={"50vw"}
              ref={playerRef}
              url={VIDEO_PATH}
              controls={true}
              playing={true}
              loop={true}
              muted="true"
            />
          </Box>
        </Stack>
      </Flex>
    </Stack>
  );
};
export default AboutSolution;
