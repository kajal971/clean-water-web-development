import { Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import img from "@/Asset/mission.png";
const AboutMission = () => {
  return (
    <Stack width={"100%"}>
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
      >
        <Text color={"white"} fontSize={"30px"} fontWeight={"bold"}>
          Our Mission
        </Text>
      </Flex>
      <Flex justify={"center"} mt={["30px", "30px", "50px"]} mb="80px">
        <Text
          textAlign={"center"}
          width={["90%", "90%", "60%"]}
          fontSize={["var(--fs--150)", "var(--fs--150)", "var(--fs--100)"]}
        >
          Our mission is to revitalize and safeguard 1,00,000 water bodies,
          sparking a nationwide movement for water body restoration, empowering
          local entrepreneurs, and inspiring the next generation of climate and
          social entrepreneurs, while becoming a leading advocate for driving
          positive social change beyond water restoration.
        </Text>
      </Flex>
    </Stack>
  );
};
export default AboutMission;
