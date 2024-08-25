import React, { useEffect } from "react";
import {
    Box,
    Flex,
    Stack,
    Text,
    Button,
    Image,
    Center,
    Heading,
} from "@chakra-ui/react";
import img from "@/Asset/Footer/aerators.png";

export default function Aerators() {
    return (
        <Stack>
            <Flex
                flexDirection={["column", "column", "row"]}
                alignItems={["center", "center", "flex-start"]}
            >
                <Text
                    fontWeight={"bold"}
                    fontSize={["var(--fs--250)", "var(--fs--250)", "var(--fs--200)"]}
                    mb="4vw"
                    display={["block", "none", "none"]}
                    color={"#165A84"}
                >
                    Floating Aerators
                </Text>
                <Image
                    alt=""
                    src={img.src}
                    w={["100%", "96vw", "50vw"]}
                    h={["70vw", "60vw", "30vw"]}
                    px={["0", "0", "4.5vw"]}
                    mb={["20px", "10px", "0px"]}
                />
                <Stack
                    pt="0.5vw"
                    alignItems={["center", "center", "flex-start"]}
                    ml={["0px", "0px", "50px"]}
                >
                    <Text
                        fontWeight={"bold"}
                        fontSize={["var(--fs--250)", "var(--fs--250)", "var(--fs--200)"]}
                        mb="1.5vw"
                        display={["none", "block", "block"]}
                        color={"#165A84"}
                    >
                        Floating Aerators
                    </Text>
                    <Text
                        w="85%"
                        fontSize={["var(--fs--150)", "var(--fs--150)", "var(--fs--100)"]}
                    >
                        Breathe life into your water body with our floating aerators.
                        Our aerators efficiently enhance water quality by promoting oxygen circulation, mitigating foul odors, and preventing the formation of harmful layers.
                        <br />
                        <br />
                        With a commitment to environmental sustainability, our floating aerators offer a seamless blend of performance and energy efficiency, ensuring the longevity and vitality of your water bodies.
                        <br />
                        <br />
                        These floating aerators create an ideal habitat for a flourishing array of ecological life, fostering a balanced and thriving ecosystem.
                    </Text>
                </Stack>
            </Flex>

            {/* <Box className="parallax-container" my="80px">
        <Box className="parallax-background"></Box>
        <Box mt={"1000px"} w="100%">
          <Stack
            gap={["20px", "20px", "100px"]}
            justify="center"
            align={"center"}
            w="100%"
            my={["100px", "100px", "110px"]}
          >
            <OurProductsRight
              img={product1.src}
              number="FI01"
              size="1m x 1m x 0.25m"
              maxLoad="80kg"
              opLoad="40kg"
              frame="Aluminum"
              finish="Rexine"
              life=">3 Years"
              ideal="Lakes and Ponds"
            />
            <OurProductsLeft
              img={product2.src}
              number="FI02"
              size="1.2m x 1.2m x 0.25m"
              maxLoad="180kg"
              opLoad="90kg"
              frame="Wooden"
              finish="Rexine"
              life=">3 Years"
              ideal="Lakes and Ponds"
            />
            <OurProductsRight
              img={product3.src}
              number="FI03"
              size="2m x 2m x 1.2m"
              maxLoad="400kg"
              opLoad="200kg"
              frame="Wooden"
              finish="Rexine"
              life=">3 Years"
              ideal="Lakes and Ponds"
            />
            <OurProductsLeft
              img={product4.src}
              number="FI04"
              size="2m x 2m x 1.2m"
              maxLoad="400kg"
              opLoad="200kg"
              frame="Wooden"
              finish="Rexine"
              life=">3 Years"
              ideal="Lakes and Ponds"
            />
            <OurProductsRight
              img={product5.src}
              number="FI05"
              size="Diameter = 1m, h = 0.3m"
              maxLoad="100kg"
              opLoad="50kg"
              frame="EPE Sheets"
              finish="Rexine"
              life=">3 Years"
              ideal="Lakes and Ponds"
            />
            <OurProductsLeft
              img={product6.src}
              number="FI06"
              size="1m x 2m x 0.3m"
              maxLoad="250kg"
              opLoad="125kg"
              frame="Wooden"
              finish="Rexine"
              life=">3 Years"
              ideal="Lakes and Ponds"
            />
            <OurProductsRight
              img={product7.src}
              number="FI07"
              size="1m x 2m x 0.2m"
              maxLoad="200kg"
              opLoad="100kg"
              frame="Wooden"
              finish="Rexine"
              life=">3 Years"
              ideal="Lakes and Ponds"
            />
            <OurProductsLeft
              img={product8.src}
              number="FI08"
              size="Diameter = 1m, h = 0.3m"
              maxLoad="120kg"
              opLoad="60kg"
              frame="Metal"
              finish="Epoxy Paint"
              life=">5 Years"
              ideal="Lakes, Ponds, Rivers, Drains, Sea"
            />
            <OurProductsRight
              img={product9.src}
              number="FI09"
              size="0.5m x 1m x 0.3m"
              maxLoad="80kg"
              opLoad="40kg"
              frame="Wooden"
              finish="Rexine"
              life=">3 Years"
              ideal="Aquarium"
            />
            <OurProductsLeft
              img={product10.src}
              number="FI10"
              size="2m x 2m x 0.45m"
              maxLoad="900kg"
              opLoad="450kg"
              frame="Metal"
              finish="Epoxy Paint"
              life=">5 Years"
              ideal="Lakes, Ponds, Rivers, Drains, Sea"
            />
            <OurProductsRight
              img={product11.src}
              number="FI11"
              size="1.2m x 1.2m x 0.4m"
              maxLoad="230kg"
              opLoad="115kg"
              frame="FRP"
              finish="FRP"
              life=">10 Years"
              ideal="Lakes, Ponds, Rivers, Drains, Sea"
            />
            <OurProductsLeft
              img={product12.src}
              number="FI12"
              size="Custom"
              maxLoad="N/A"
              opLoad="N/A"
              frame="Custom"
              finish="Custom"
              life="N/A"
              ideal="As per requirements"
            />
          </Stack>
        </Box>
      </Box> */}
        </Stack>
    );
}
