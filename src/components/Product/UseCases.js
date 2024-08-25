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
import img from "@/Asset/Product/product_use_cases.jpg";

export default function UseCases() {
  return (
    <Stack align="center" gap={30}>
      <Text
        fontWeight={"bold"}
        fontSize={["7vw", "6vw", "2.5vw"]}
        color="#165983"
        borderBottom={"4px solid #428D55"}
      >
        Use Cases
      </Text>
      <Text
        fontWeight={"medium"}
        fontSize={["var(--fs--150)", "var(--fs--150)", "var(--fs--100)"]}
        textAlign={"center"}
      >
        Rejuvenate water bodies with our products to create beautiful landscapes
        and vibrant ecosystems.
      </Text>
      <Image
        alt=""
        src={img.src}
        w={["90%", "80%", "70%"]}
        borderRadius="20px"
        className="useImg"
      />
      <Text
        w={["90%", "80%", "72%"]}
        fontWeight={"medium"}
        fontSize={["var(--fs--150)", "var(--fs--150)", "var(--fs--100)"]}
        textAlign={"center"}
      >
        Our customizable floating ecosystems are not only effective in water
        body restoration but also are highly versatile, catering to a range of
        use cases.
      </Text>
    </Stack>
  );
}
