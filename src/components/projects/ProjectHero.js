import React from "react";
import {
  Flex,
  Stack,
  Text,
} from "@chakra-ui/react";
import img from "@/Asset/blog/blog-bg.png";
import cardImg1 from "@/Asset/blog/blog-img1.png";
import cardImg2 from "@/Asset/blog/blog-img2.png";
import cardImg3 from "@/Asset/blog/blog-img3.png";
import cardImg4 from "@/Asset/blog/blog-img4.png";
import cardImg5 from "@/Asset/blog/blog-img5.png";
import cardImg6 from "@/Asset/blog/blog-img6.png";
import BlogsCard from "./ProjectsCard";
import { PROJECTS_DATA } from "./PROJECTS_DATA";
import ProjectsCard from "./ProjectsCard";

export default function ProjectHero() {

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
          Our Projects
        </Text>
        <Flex w="100%" justify={"space-evenly"} flexWrap={"wrap"}>
          {PROJECTS_DATA.map((data, index) => (
            <ProjectsCard key={index} data={data} />
          ))}
        </Flex>
      </Stack>
    </Flex>
  );
}
