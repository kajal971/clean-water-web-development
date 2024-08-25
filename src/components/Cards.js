import React from "react";
import LandingCards from "./common/LandingCards";
import {
  Box,
  Flex,
  Stack,
  Text,
  Button,
  Image,
  Center,
} from "@chakra-ui/react";
import img1 from "./common/img1.png";
import img2 from "./common/img2.png";
import img3 from "./common/img3.png";

export default function Cards() {
  return (
    <>
      <Stack py="5vw">
        <Flex justify={"center"}>
          <Text
          color="#165983"
            fontSize={["25px", "30px", "30px"]}
            fontWeight={"bold"}
            borderBottom={"5px solid rgba(66, 141, 85, 1)"}
          >
            Testimonials
          </Text>
        </Flex>
        <Flex my="30px" justify={"space-evenly"} flexWrap={"wrap"}>
          <LandingCards
            cont={
              "We are working with Clean-water for one of our R&D; project from past one year. The Main thing that we have experienced with Clean-water is their eagerness for innovation and commitment to work taken by them. We wish them all the best"
            }
            name="Rohini Pradeep"
            desg="Subject coordinator -R&D,Consortium for DEWATS Dissemination Society"
            img={img1.src}
          />
          <LandingCards
            cont="Clean-Water gave us an cost & space concern effective solution for STP at Shiva Statue project, Nathdwara. They promptly dealt with the issues that arose while installing and commissioning of the STP. I will be happy to recommend them for Water treatment Projects."
            name="Manoj Kundu"
            desg="Manager Services,Shapoorji Pallonji Co. Pvt Ltd."
            img={img2.src}
          />
          <LandingCards
            cont="Clean-water is a group of young, energetic and enthusiastic professionals who are committed to find sustainable solutions for better management of polluted water. It is the need of the hour to provide such solutions to address the environmental problems."
            name="Dr. Jaishree Sikka"
            desg="HOD Botany,Gujarati College, Indore, India"
            img={img3.src}
          />
        </Flex>
      </Stack>
    </>
  );
}
