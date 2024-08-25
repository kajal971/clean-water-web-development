import React, { useRef } from "react";
import ReactPlayer from "react-player";
import {
  Box,
  Flex,
  Stack,
  Text,
  Button,
  Image,
  Center,
} from "@chakra-ui/react";
import logo from "../Asset/CleanWaterLogo2.png";
// import img from '../Asset/Group14.png'
const VIDEO_PATH = "/Clean-water-Waterbodies-Technology.mp4";

export default function Cleanwater() {
  const playerRef = useRef(null);
  return (
    <Stack align={"center"} py={5}>
      {/* <Image alt="" w={["35%", "25%", "15%"]} pb="4.5vw" src={logo.src} /> */}
      <div>
        <ReactPlayer
          width={"75vw"}
          height={"42vw"}
          ref={playerRef}
          url={VIDEO_PATH}
          controls={true}
          playing={true}
          loop={true}
          muted="true"
        />
      </div>
    </Stack>
  );
}
