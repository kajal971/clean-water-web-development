import { Flex, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "@/Asset/CleanWaterLogo2.png";
const AboutHero = () => {
  return (
    <Stack width={"100%"}>
      <Text
        textAlign={"center"}
        mt={"40px"}
        fontSize={"30px"}
        fontWeight={"bold"}
      >
        About
      </Text>
      <Stack width={"100%"} align={"center"}>
        <Image marginY={"20px"} src={Logo.src} alt="Logo" width={"150px"} />
        <Text
          w={["90%", "90%", "51%"]}
          textAlign={"center"}
          fontSize={["var(--fs--150)", "var(--fs--150)", "var(--fs--100)"]}
        >
          We are an indore based startup specializing in waterbody rejuvenation
          and ecological restoration through the use of nature based solutions.
          Through various bioremediation techniques we aim to restore balance to
          ecosystems and rejuvenate water bodies across India in order to
          benefit people, the environment, and future generations.
        </Text>
      </Stack>
    </Stack>
  );
};
export default AboutHero;
