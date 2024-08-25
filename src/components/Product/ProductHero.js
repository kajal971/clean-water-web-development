import React from "react";
import {
  Box,
  Flex,
  Stack,
  Text,
  Button,
  Image,
  Center,
} from "@chakra-ui/react";
import bkg from "@/Asset/Product/ProductHero.png";
import icon from "@/Asset/Product/productHeroIcon.png";

export default function ProductHero() {
  return (
    <>
      <Stack
        backgroundImage={bkg.src}
        backgroundSize={"cover"}
        backgroundPosition={"center"}
        spacing={["100", "200", "300"]}
        color="white"
        px="70px"
        pt="10vw"
        pb="2vw"
      >
        <Stack>
          <Text
            fontSize={"var(--fs--200)"}
            fontWeight={"medium"}
            borderBottom={"4px solid #428D55"}
            className="product_hero_heading"
          >
            Products
          </Text>
          <Text fontSize={"var(--fs--300)"} fontWeight={"bold"}>
            Highest Quality Products to <br /> Suit Your Needs
          </Text>
        </Stack>
        <Stack align={"center"}>
          <Text fontSize={["var(--fs--150)", "var(--fs--150)", "1.2rem"]}>
            Explore our products
          </Text>
          <Image alt="" w="20px" src={icon.src} />
        </Stack>
      </Stack>
      <Flex justify={"center"} py="10vw">
        <Text
          w={["80%", "70%", "60%"]}
          textAlign={"center"}
          fontSize={["var(--fs--150)", "var(--fs--150)", "1.2rem"]}
        >
          Discover our innovative, nature-based products for sustainable water
          management. From floating wetlands to efficient aerators and powerful
          bacteria solutions, our products deliver effective water treatment,
          enhance biodiversity, and promote ecological balance. Join us in
          creating a cleaner, healthier, and more sustainable future for our
          water bodies and ecosystems.
        </Text>
      </Flex>
    </>
  );
}
