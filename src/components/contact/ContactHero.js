import React from "react";
import {
  Box,
  Flex,
  Stack,
  Text,
  Button,
  Image,
  FormControl,
  Input,
  Textarea,
} from "@chakra-ui/react";
import img from "@/Asset/Contact/contact-img.png";
import map from "@/Asset/Contact/map-icon.png";
import phone from "@/Asset/Contact/phone-icon.png";
import message from "@/Asset/Contact/message-icon.png";
import useEmail from "@/hooks/emailSender";

export default function ContactHero() {
  const { formData, handleChange, handleSubmit } = useEmail();
  return (
    <>
      <Flex
        w="100%"
        py="50px"
        bgImage={`url(${img.src})`}
        bgSize={"cover"}
        bgPosition={"center"}
        justify={"center"}
        align={"center"}
      >
        <Stack w="90%" h="90%" className="glass2" py="20px">
          <Text
            w="100%"
            textAlign={"center"}
            fontWeight={"bold"}
            fontSize={["var(--fs--250)", "var(--fs--250)", "var(--fs--200)"]}
            py="10px"
          >
            Get in Touch With Us
          </Text>
          <Flex flexDir={["column", "column", "row"]}>
            <Stack
              w={["100%", "100%", "50%"]}
              px="7vw"
              py="50px"
              spacing={"40px"}
              align={["center", "center", "normal"]}
            >
              <Flex align={"center"}>
                <Image w="60px" h="70px" mx="10px" src={map.src} alt="" />
                <Text fontWeight={"medium"} fontSize={"18px"}>
                  “Clean-Water” E-8, Ratlam Kothi, Indore, [MP] India 452001
                </Text>
              </Flex>
              <Flex align={"center"}>
                <Image w="60px" h="60px" mx="10px" src={phone.src} alt="" />
                <Text fontWeight={"medium"} fontSize={"18px"}>
                  (India) +91 79994 54226
                </Text>
              </Flex>
              <Flex align={"center"}>
                <Image w="60px" h="60px" mx="10px" src={message.src} alt="" />
                <Text fontWeight={"medium"} fontSize={"18px"}>
                  contact@clean-water.co.in
                </Text>
              </Flex>
            </Stack>
            <FormControl
              w={["100%", "100%", "50%"]}
              py={["20px", "50px", "50px"]}
            >
              <Stack>
                <Flex
                  w="100%"
                  justify={"space-evenly"}
                  pb="40px"
                  flexDir={["column", "row", "row"]}
                  align={["center", "normal", "normal"]}
                >
                  <Input
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                    w={["70%", "40%", "40%"]}
                    placeholder="Name"
                    border="1px solid black"
                    borderRadius="12px"
                    _hover={{
                      border: "1px solid black",
                    }}
                    mb={["40px", "0", "0"]}
                  />
                  <Input
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                    w={["70%", "40%", "40%"]}
                    placeholder="Email"
                    border="1px solid black"
                    borderRadius="12px"
                    _hover={{
                      border: "1px solid black",
                    }}
                  />
                </Flex>
                <Flex
                  w="100%"
                  justify={"space-evenly"}
                  pb="40px"
                  flexDir={["column", "row", "row"]}
                  align={["center", "normal", "normal"]}
                >
                  <Input
                    name="company"
                    onChange={handleChange}
                    value={formData.company}
                    w={["70%", "40%", "40%"]}
                    placeholder="Company"
                    border="1px solid black"
                    borderRadius="12px"
                    _hover={{
                      border: "1px solid black",
                    }}
                    mb={["40px", "0", "0"]}
                  />
                  <Input
                    w={["70%", "40%", "40%"]}
                    placeholder="Phone"
                    border="1px solid black"
                    borderRadius="12px"
                    _hover={{
                      border: "1px solid black",
                    }}
                  />
                </Flex>
                <Flex w="100%" justify={"center"} pb="40px">
                  <Textarea
                    name="message"
                    onChange={handleChange}
                    value={formData.message}
                    w="70%"
                    border="1px solid black"
                    borderRadius="12px"
                    placeholder="Message"
                    rows="4"
                    _hover={{
                      border: "1px solid black",
                    }}
                  />
                </Flex>
                <Flex w="100%" justify={"center"}>
                  <Button
                    className="brochure-btn"
                    onClick={() => {
                      handleSubmit;
                      window.location.reload();
                    }}
                    onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                  >
                    Submit
                  </Button>
                </Flex>
              </Stack>
            </FormControl>
          </Flex>
        </Stack>
      </Flex>
    </>
  );
}
