import React, { useRef } from "react";
import {
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import ReactPlayer from "react-player";
const VIDEO_PATH = "https://ik.imagekit.io/o0spphqdc/Clean-water/Clean-water_hero_media_j71u-OXnG%20(1)_WMMWC-eIb.mp4?updatedAt=1700471150715 ";

export default function Herosection() {
  const playerRef = useRef(null);
  return (
    <Box position="relative">
      <Flex>
        <Text
          background={"rgba(255, 255, 255, 0.5)"}
          width={'100%'}
          textAlign={'center'}
          position={"absolute"}
          fontSize={"var(--fs--300)"}
          fontWeight={"bold"}
          top={"0"}
          zIndex={1}
        >
          Nature Based Solutions for{" "}
          <span style={{ color: "rgba(66, 141, 85, 1)" }}>Sustainable</span>{" "}
          <span style={{ color: "rgba(0, 144, 231, 1)" }}>Water</span> Ecosystems
        </Text>
      </Flex>
      <Box h={["140vw", "57vw", "57vw"]} position={"relative"}>
        <Box width={"100%"} height={["100%", "100%", "100%"]}>
          <ReactPlayer
            width={"100%"}
            height={["100%"]}
            ref={playerRef}
            url={VIDEO_PATH}
            controls={false}
            playing={true}
            loop={true}
            muted="true"
          />
        </Box>
      </Box>
    </Box>
  );
}
