import React from "react";
import bkg from "../../Asset/Impact/impact-bkg.png";
import icon from "@/Asset/Product/productHeroIcon.png";
import {
  Box,
  Flex,
  Stack,
  Text,
  Button,
  Image,
  Center,
} from "@chakra-ui/react";

export default function ImpactHero() {
  return (
    <>
      <Stack
        align={"center"}
        color="white"
        pt={["50px"]}
        pb="30px"
        spacing={["300px", "500px", "550px"]}
        backgroundImage={bkg.src}
        backgroundSize={"cover"}
        backgroundPosition={"center"}
      >
        <Text
          fontWeight={"bold"}
          fontSize={["30px", "50px", "65px"]}
          // fontSize={"var(--fs--300)"}
          filter={[
            "drop-shadow(-4px 6px 2px rgba(0,0,0,0.15))",
            "drop-shadow(-5px 10px 2px rgba(0,0,0,0.15))",
            "drop-shadow(-5px 12px 2px rgba(0,0,0,0.15))",
          ]}
        >
          Creating an Impact
        </Text>
        <Image
          alt=""
          w={["20px", "25px", "30px"]}
          color="white"
          src={icon.src}
        />
      </Stack>
      <Flex justify={"center"} py="10vw">
        <Text
          w={["80%", "70%", "60%"]}
          textAlign={"center"}
          fontSize={["var(--fs--150)", "var(--fs--150)", "1.2rem"]}
        >
          Our impacts are tangible and visible in every project we undertake.
          Through revitalized water bodies teeming with life and supporting
          cleaner, healthier ecosystems, our interventions leave a lasting
          imprint on the environment.
        </Text>
      </Flex>
    </>
  );
}
