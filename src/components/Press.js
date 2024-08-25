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
import press1 from "@/Asset/Press/Clean-water-press-1.jpg";
import press2 from "@/Asset/Press/Clean-water-press-2.jpg";
import press3 from "@/Asset/Press/Clean-water-press-3.jpg";
import press4 from "@/Asset/Press/Clean-water-press-4.jpg";
import press5 from "@/Asset/Press/Clean-water-press-5.png";
import press6 from "@/Asset/Press/Clean-water-press-6.png";
import press7 from "@/Asset/Press/Clean-water-press-7.png";
import press8 from "@/Asset/Press/Clean-water-press-8.png";
import press9 from "@/Asset/Press/Clean-water-press-9.png";
import press10 from "@/Asset/Press/Clean-water-press-10.jpeg";
import Slider from "react-slick";
import arrow from "./common/Group17.svg";

function SampleNextArrow(props) {
  const { onClick } = props;
  return <Image src={arrow.src} className="nextArrow" onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return <Image src={arrow.src} className="prevArrow" onClick={onClick} />;
}

export default function Press() {
  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 4000,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <Stack align={"center"} pt="100px" pb="50px" className="slide">
        <Flex>
          <Text
            fontWeight={"bold"}
            fontSize={["7vw", "6vw", "2.5vw"]}
            color="#165983"
            mb="5vw"
            borderBottom={"5px solid rgba(66, 141, 85, 1)"}
          >
            Press
          </Text>
        </Flex>
        {/* <Flex alignItems={'center'} justifyContent={'space-evenly'} w='100%' mb='1vw'>
                    <Flex display={['none', 'none', 'flex']}>
                        <Box w='50px' h='50px' borderRadius={'50%'} bg='#165983'></Box>
                    </Flex>
                    <Image alt="" src={press.src} w={['', '', '60vw']} h={['', '', '40vw']} boxShadow={'0px 0px 10px black'} />
                    <Flex display={['none', 'none', 'flex']}>
                        <Box w='50px' h='50px' borderRadius={'50%'} bg='#165983'></Box>
                    </Flex>
                </Flex> */}
        <Box
          w={["100vw", "80vw", "60vw"]}
          mx="auto"
          boxShadow={"0px 0px 10px black"}
        >
          <Slider {...settings}>
            <div>
              <Image
                alt=""
                src={press1.src}
                w={["100vw", "80vw", "60vw"]}
                h={["80vw", "60vw", "40vw"]}
              />
            </div>
            <div>
              <Image
                alt=""
                src={press2.src}
                w={["100vw", "80vw", "60vw"]}
                h={["80vw", "60vw", "40vw"]}
              />
            </div>
            <div>
              <Image
                alt=""
                src={press3.src}
                w={["100vw", "80vw", "60vw"]}
                h={["80vw", "60vw", "40vw"]}
              />
            </div>
            <div>
              <Image
                alt=""
                src={press4.src}
                w={["100vw", "80vw", "60vw"]}
                h={["80vw", "60vw", "40vw"]}
              />
            </div>
            <div>
              <Image
                alt=""
                src={press5.src}
                w={["100vw", "80vw", "60vw"]}
                h={["80vw", "60vw", "40vw"]}
              />
            </div>
            <div>
              <Image
                alt=""
                src={press6.src}
                w={["100vw", "80vw", "60vw"]}
                h={["80vw", "60vw", "40vw"]}
              />
            </div>
            <div>
              <Image
                alt=""
                src={press7.src}
                w={["100vw", "80vw", "60vw"]}
                h={["80vw", "60vw", "40vw"]}
              />
            </div>
            <div>
              <Image
                alt=""
                src={press8.src}
                w={["100vw", "80vw", "60vw"]}
                h={["80vw", "60vw", "40vw"]}
              />
            </div>
            <div>
              <Image
                alt=""
                src={press9.src}
                w={["100vw", "80vw", "60vw"]}
                h={["80vw", "60vw", "40vw"]}
              />
            </div>
            <div>
              <Image
                alt=""
                src={press10.src}
                w={["100vw", "80vw", "60vw"]}
                h={["80vw", "60vw", "40vw"]}
              />
            </div>
          </Slider>
        </Box>
        {/* <Flex mb={['2vw', '2vw', '5vw']}>
                    <Box w={['15px', '20px', '20px']} h={['15px', '20px', '20px']} borderRadius={'50%'} border='1px solid black' mr='5px'></Box>
                    <Box w={['15px', '20px', '20px']} h={['15px', '20px', '20px']} borderRadius={'50%'} border='1px solid black' mr='5px'></Box>
                    <Box w={['15px', '20px', '20px']} h={['15px', '20px', '20px']} borderRadius={'50%'} border='1px solid black' mr='5px'></Box>
                    <Box w={['15px', '20px', '20px']} h={['15px', '20px', '20px']} borderRadius={'50%'} border='1px solid black' mr='5px'></Box>
                    <Box w={['15px', '20px', '20px']} h={['15px', '20px', '20px']} borderRadius={'50%'} border='1px solid black' mr='5px'></Box>
                    <Box w={['15px', '20px', '20px']} h={['15px', '20px', '20px']} borderRadius={'50%'} border='1px solid black' mr='5px'></Box>
                    <Box w={['15px', '20px', '20px']} h={['15px', '20px', '20px']} borderRadius={'50%'} border='1px solid black' mr='5px'></Box>
                    <Box w={['15px', '20px', '20px']} h={['15px', '20px', '20px']} borderRadius={'50%'} border='1px solid black' mr='5px'></Box>
                    <Box w={['15px', '20px', '20px']} h={['15px', '20px', '20px']} borderRadius={'50%'} border='1px solid black' mr='5px'></Box>
                </Flex> */}
        {/* <Flex mb='5vw' display={['flex', 'flex', 'none']}>
                    <Box w={['30px', '50px', '50px']} h={['30px', '50px', '50px']} mr='100px' borderRadius={'50%'} bg='#165983'></Box>
                    <Box w={['30px', '50px', '50px']} h={['30px', '50px', '50px']} borderRadius={'50%'} bg='#165983'></Box>
                </Flex> */}
        <Button w="240px" h="35px" bg="#0090E7" color="white" mt="100px">
          Get in touch
        </Button>
      </Stack>
    </>
  );
}
