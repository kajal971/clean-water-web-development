import React, { useRef } from "react";
import {
    Box,
    Flex,
    Stack,
    Text,
    Button,
    Image,
    Center,
} from "@chakra-ui/react";
import press1 from "@/Asset/projects/img1.jpg";
import press2 from "@/Asset/projects/img2.jpg";
import press3 from "@/Asset/projects/img3.jpg";
import press4 from "@/Asset/projects/img4.jpg";
import press5 from "@/Asset/projects/img5.jpg";
import Slider from "react-slick";
import arrow from "./common/Group17.svg";
import { useRouter } from "next/router";

import c1 from '@/Asset/Concept/conceptPersonalizing.png'
import c2 from '@/Asset/Concept/conceptArtificial.png'
import c3 from "@/Asset/Concept/conceptActivities.png"
import c4 from '@/Asset/Concept/conceptPersonalizing.png'
import c5 from "@/Asset/Concept/conceptBkg.png"


export default function NewPress1() {
    const slide = useRef(null);
    const router = useRouter();

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "red" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "green" }}
                onClick={onClick}
            />
        );
    }

    const settings = {
        autoplay: true,
        dots: true,
        infinite: true,
        arrows: false,
        speed: 3000,
        autoplaySpeed: 6000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <>
            <Stack align={"center"} pt="100px" pb="50px">
                <Text
                    fontWeight={"bold"}
                    fontSize={["7vw", "6vw", "2.5vw"]}
                    color="#165983"
                    mb="5vw"
                    borderBottom={"5px solid rgba(66, 141, 85, 1)"}
                >
                    Concepts
                </Text>
                <Flex flexDir={["column", "column", "row"]}>
                    <Image
                        display={["none", "none", "flex"]}
                        cursor={"pointer"}
                        transform="rotateY(180deg)"
                        w={["15vw", "12vw", "6vw"]}
                        src={arrow.src}
                        onClick={() => slide.current.slickPrev()}
                    />
                    <Stack w={["95vw", "80vw", "60vw"]}>
                        <Slider ref={slide} {...settings}>
                            <div>
                                <Image
                                    objectFit={'cover'}
                                    alt=""
                                    src={c1.src}
                                    w={["95vw", "80vw", "60vw"]}
                                    h={["80vw", "60vw", "40vw"]}
                                />
                            </div>
                            <div>
                                <Image
                                    objectFit={'cover'}
                                    alt=""
                                    src={c2.src}
                                    w={["95vw", "80vw", "60vw"]}
                                    h={["80vw", "60vw", "40vw"]}
                                />
                            </div>
                            <div>
                                <Image
                                    objectFit={'cover'}
                                    alt=""
                                    src={c5.src}
                                    w={["95vw", "80vw", "60vw"]}
                                    h={["80vw", "60vw", "40vw"]}
                                />
                            </div>
                        </Slider>
                    </Stack>
                    <Flex
                        justify={["center", "center", "center"]}
                        mt={["80px", "80px", "0px"]}
                    >
                        <Image
                            display={["flex", "flex", "none"]}
                            cursor={"pointer"}
                            transform="rotateY(180deg)"
                            mr="20px"
                            w={["15vw", "12vw", "6vw"]}
                            src={arrow.src}
                            onClick={() => slide.current.slickPrev()}
                        />
                        <Image
                            cursor={"pointer"}
                            w={["15vw", "12vw", "6vw"]}
                            src={arrow.src}
                            ml="20px"
                            onClick={() => slide.current.slickNext()}
                        />
                    </Flex>
                </Flex>
                <Button
                    w="240px"
                    h="35px"
                    bg="#0090E7"
                    color="white"
                    mt={["50px", "50px", "100px"]}
                    onClick={() => {
                        router.push("/concepts")
                    }}
                >
                    View all Concepts
                </Button>
            </Stack>
        </>
    );
}
