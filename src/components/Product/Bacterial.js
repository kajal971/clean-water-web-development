import React from "react";
import {
    Flex,
    Stack,
    Text,
    Image,
} from "@chakra-ui/react";
import img from "@/Asset/Footer/bacterial.png";

export default function Bacterial() {
    return (
        <Stack my={'8rem'}>
            <Flex
                flexDirection={["column", "column", "row-reverse"]}
                alignItems={["center", "center", "flex-start"]}
            >
                <Text
                    fontWeight={"bold"}
                    fontSize={["var(--fs--250)", "var(--fs--250)", "var(--fs--200)"]}
                    mb="4vw"
                    display={["block", "none", "none"]}
                    color={"#165A84"}
                >
                    Bacterial Solutions
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
                        Bacterial Solutions
                    </Text>
                    <Text
                        w="85%"
                        fontSize={["var(--fs--150)", "var(--fs--150)", "var(--fs--100)"]}
                    >
                        Meticulously crafted beneficial bacterial solutions to restore the natural balance of aquatic ecosystems by fighting eutrophication. By quickly devouring the excess nutrients, these bacterial solutions tackle stubborn algal blooms, and stop the proliferation of unwanted species such as water hyacinth and duckweed.
                        <br />
                        <br />
                        By introducing these beneficial microbes into your water bodies, you can effectively address problems of water clarity, odor and biodiversity loss, creating a beautiful water body and a vibrant ecosystem.
                    </Text>
                </Stack>
            </Flex>
        </Stack>
    );
}
