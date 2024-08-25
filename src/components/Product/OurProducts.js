import React from 'react'
import product1 from "@/Asset/Product/FloatingImg.png";
import product2 from "@/Asset/Product/product-2.jpg";
import product3 from "@/Asset/Product/product-3.jpg";
import product4 from "@/Asset/Product/product-4.jpg";
import product5 from "@/Asset/Product/product-5.jpeg";
import product6 from "@/Asset/Product/product-6.jpg";
import product7 from "@/Asset/Product/product-7.jpg";
import product8 from "@/Asset/Product/product-8.jpg";
import product9 from "@/Asset/Product/product-9.jpg";
import product10 from "@/Asset/Product/product-10.jpg";
import product11 from "@/Asset/Product/product-11.jpg";
import product12 from "@/Asset/Product/product-12.jpg";
import OurProductsRight from "./Asset/OurProductsRight";
import OurProductsLeft from "./Asset/OurProductsLeft";
import { Box, Stack } from '@chakra-ui/react';

function OurProducts() {
    return (
        <Stack>
            <Box className="parallax-background"></Box>
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
        </Stack>
    )
}

export default OurProducts