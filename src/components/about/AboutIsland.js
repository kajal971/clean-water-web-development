import { Flex, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import img from "@/Asset/About/about-island-img2.png";
const AboutIsland = () => {
  return (
    <Stack width={"100%"}>
      <Flex justify={"center"}>
        <Text
        textAlign={"center"}
          width={["90%", "90%", "80%"]}
          fontSize={["var(--fs--150)", "var(--fs--150)", "var(--fs--100)"]}
        >
          In each island, hundreds of plants and millions of bacteria work
          together to absorb and remove pollutants like nitrogen and phosphorus
          from the water, improving its quality. The biomedia included in each
          island along with the plant roots provide areas for helpful bacteria
          to form ‘Biofilms’. These biofilms are colonies of helpful bacteria
          that help break down pollutants and increase the efficiency of the
          islands as much as 4 to 5 times.
        </Text>
      </Flex>
      <Flex
        flexDirection={["column", "column", "row"]}
        alignItems={["center", "center", "center"]}
        my={["80px", "100px", "150px"]}
        mx={["20px", "30px", "50px"]}
        justify={"center"}
      >
        {/* <Text
          fontWeight={"bold"}
          fontSize={["var(--fs--250)", "var(--fs--250)", "var(--fs--200)"]}
          mb="4vw"
          display={["block", "none", "none"]}
          textAlign={"center"}
          mx="20px"
        >
          Floating Islands for Recreational Activities
        </Text> */}
        <Image
          alt=""
          src={img.src}
          // w={["100vw", "93vw", "50vw"]}
          // h={["70vw", "60vw", "35vw"]}
          w={["98vw", "93vw", "42vw"]}
          h={["60vw", "55vw", "27vw"]}
          mx={["0", "0", "4.5vw"]}
          mb={["20px", "10px", "0px"]}
          borderRadius={"20px"}
          boxShadow={"0px 0px 10px 0px black"}
        />
        <Stack
          alignItems={["center", "center", "flex-start"]}
          ml={["0px", "0px", "50px"]}
        >
          {/* <Text
            w={["0", "80%", "60%"]}
            fontWeight={"bold"}
            fontSize={["var(--fs--250)", "var(--fs--250)", "var(--fs--200)"]}
            mb="1.5vw"
            display={["none", "block", "block"]}
          >
            Floating Islands for Recreational Activities
          </Text> */}
          <Text
            mt={["20px", "30px", "0px"]}
            w={["95%", "95%", "80%"]}
            fontSize={["var(--fs--150)", "var(--fs--150)", "var(--fs--100)"]}
          >
            These biofilms are then eaten by other aquatic species such as fish
            and aquatic insects. The islands also serve as biodiversity
            hotspots, providing food and shelter to fish as well as nesting
            spots to above water species such as ducks and geese.
            <br />
            <br />
            The combined action of plants and microorganisms helps in water
            purification, reduces algal blooms and other infestations, and
            fosters biodiversity.
            <br />
            <br />
            Additionally, floating islands offer aesthetic value and can be
            customized for various applications, making them a sustainable
            solution for water quality management.
          </Text>
        </Stack>
      </Flex>
    </Stack>
  );
};
export default AboutIsland;
