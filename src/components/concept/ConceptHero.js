import React from "react";
import bkg from "../../Asset/Concept/conceptBkg3.jpg";
import icon from "@/Asset/Product/productHeroIcon.png";

import { Flex, Stack, Text, Image } from "@chakra-ui/react";

export default function ConceptHero() {
  return (
    <>
      <Stack
        align={"center"}
        color="white"
        pt={["100px", "300px", "500px"]}
        pb={["30px", "50px", "70px"]}
        spacing="10px"
        backgroundImage={bkg.src}
        backgroundSize={"cover"}
        backgroundPosition={"center"}
      >
        <Text
          fontWeight={"bold"}
          fontSize="var(--fs--300)"
          textAlign={"center"}
        >
          Ideating for the future
        </Text>
        <Image
          alt=""
          w={["20px", "25px", "25px"]}
          color="black"
          src={icon.src}
        />
      </Stack>
      <Flex justify={"center"} py="10vw">
        <Text
          w={["75%", "65%", "55%"]}
          textAlign={"center"}
          fontSize={["var(--fs--150)", "var(--fs--150)", "1.2rem"]}
        >
          Explore our concepts that reimagine water-body management and showcase
          the potential of our solutions on a larger scale.
        </Text>
      </Flex>
    </>
  );
}
