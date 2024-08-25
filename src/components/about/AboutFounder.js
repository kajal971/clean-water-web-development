import React from "react";
import img from "@/Asset/founder-img.png";
import {
  Box,
  Flex,
  Stack,
  Text,
  Button,
  Image,
  Center,
} from "@chakra-ui/react";

export default function AboutFounder() {
  return (
    <Stack my={["30px", "30px", "100px"]}>
      <Text
        textAlign={"center"}
        w="100%"
        fontWeight={"bold"}
        fontSize={["var(--fs--250)", "var(--fs--250)", "var(--fs--200)"]}
        display={["block", "block", "none"]}
      >
        About the founder
      </Text>
      <Text
        w="100%"
        textAlign={"center"}
        fontWeight={"semi-bold"}
        fontSize={"25px"}
        mb="20px"
        display={["block", "block", "none"]}
      >
        Priyanshu Kumath{" "}
      </Text>
      <Flex flexDirection={["column-reverse", "column-reverse", "row"]}>
        <Stack
          //   pt={["0", "0", "3vw"]}
          w={["100%", "100%", "51%"]}
          align={["center", "center", "flex-end"]}
          pr={["0px", "0px", "30px"]}
          textAlign={["left", "left", "left"]}
        >
          <Text
            w="80%"
            fontWeight={"bold"}
            fontSize={["var(--fs--250)", "var(--fs--250)", "var(--fs--200)"]}
            display={["none", "none", "block"]}
          >
            About the founder
          </Text>
          <Text
            w="80%"
            fontWeight={"semi-bold"}
            fontSize={"25px"}
            mb="1.5vw"
            display={["none", "none", "block"]}
          >
            Priyanshu Kumath{" "}
          </Text>
          <Text
            w="80%"
            fontSize={["var(--fs--150)", "var(--fs--150)", "var(--fs--100)"]}
            dangerouslySetInnerHTML={{
              __html:
                "With a passion for preserving India's precious water bodies, Priyanshu embarked on a transformative journey after graduating from IIT Bombay. Inspired by the urgent need for sustainable solutions, he pioneered the concept of using artificial floating islands to revitalize and purify precious water sources.<br/><br/>His unwavering dedication led to the successful implementation of multiple floating island projects, including the remarkable restoration of the Nalanda Sarovar in Indore. This pivotal achievement earned him the prestigious Water Hero award by the Jal Shakti Mantralaya, Government of India, as a testament to his commitment to environmental preservation.<br/> <br/>Priyanshu's innovative approach transcends traditional conservation efforts, as he recognizes the vital importance of a sustainable business model in tackling the magnitude of India's water crisis. Through Clean Water he seeks to pioneer the RaaS (Restoration as a Service) model for waterbody restoration. The model seeks to not just restore water bodies but also fosters economic growth, striking a delicate balance between environmental welfare and community prosperity.<br/> <br/>Driven by his belief in the transformative power of responsible entrepreneurship, Priyanshu Kumath continues to inspire change and shape a more sustainable future for India's invaluable natural resources.",
            }}
          ></Text>
        </Stack>
        <Stack align={"center"} w={["100%", "100%", "55%"]}>
          <Image
            alt=""
            src={img.src}
            w={["85vw", "60vw", "42vw"]}
            h={["85vw", "60vw", "33vw"]}
            pb={["3vw", "0", "0"]}
            px={["0", "0", "4.5vw"]}
            mb={["20px", "30px", "1vw"]}
          />
        </Stack>
      </Flex>
    </Stack>
  );
}
