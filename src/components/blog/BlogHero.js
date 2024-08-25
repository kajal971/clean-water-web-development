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
  SimpleGrid,
} from "@chakra-ui/react";
import img from "@/Asset/blog/blog-bg.png";
import cardImg1 from "@/Asset/blog/blog-img1.png";
import cardImg2 from "@/Asset/blog/blog-img2.png";
import cardImg3 from "@/Asset/blog/blog-img3.png";
import cardImg4 from "@/Asset/blog/blog-img4.png";
import cardImg5 from "@/Asset/blog/blog-img5.png";
import cardImg6 from "@/Asset/blog/blog-img6.png";
import BlogsCard from "./BlogsCard";

export default function BlogHero() {
  const card1 = {
    img: `${cardImg1.src}`,
    heading: "Anand Malligavad - Saviour Of The Dying Lakes Of Bangalore",
    date: "December 9, 2021",
  };
  const card2 = {
    img: `${cardImg2.src}`,
    heading: "Floating Islands - A Green Solution for Restoring Water Bodies",
    date: "November 30, 2021",
  };
  const card3 = {
    img: `${cardImg3.src}`,
    heading:
      "Floating Islands: An Eco-Friendly Approach to Water Body Restoration",
    date: "March 20, 2019",
  };
  const card4 = {
    img: `${cardImg4.src}`,
    heading: "The Need for Waste-Water Treatment in India",
    date: "February 25, 2019",
  };
  const card5 = {
    img: `${cardImg5.src}`,
    heading: "Why we need to invest in sustainable water management",
    date: "February 25, 2019",
  };
  const card6 = {
    img: `${cardImg6.src}`,
    heading: "India's plan to clean up the Ganga River is flawed, say experts",
    date: "February 25, 2019",
  };
  return (
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
          Blogs
        </Text>
        <Flex w="100%" justify={"space-evenly"} flexWrap={"wrap"}>
          <BlogsCard data={card1} />
          <BlogsCard data={card2} />
          <BlogsCard data={card3} />
          <BlogsCard data={card4} />
          <BlogsCard data={card5} />
          <BlogsCard data={card6} />
        </Flex>
      </Stack>
    </Flex>
  );
}
