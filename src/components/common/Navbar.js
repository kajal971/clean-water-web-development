import React from "react";
import {
  Stack,
  Text,
  Button,
  Image,
  Link,
} from "@chakra-ui/react";
import Logo from "../../Asset/CleanWaterLogo2.png";
import icon from "./hamburgerIcon.svg";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

function Navbar() {
  const pdfFile = "/Clean-water-Product-Catelogue.pdf";
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const NavBarLinks = [
    { name: "Home", link: "/" },
    { name: "Products", link: "/products" },
    { name: "Impact", link: "/impact" },
    { name: "Projects", link: "/projects" },
    { name: "Concepts", link: "/concepts" },
    { name: "Blogs", link: "/blog" },
    { name: "About Us", link: "/about" },
    { name: "Contact Us", link: "/contact" },
  ];

  const openPdfInNewTab = () => {
    const newTab = window.open(pdfFile, "_blank");
    if (newTab) {
      newTab.opener = null; // Prevents the new tab from being able to navigate the opener (your app).
    }
  };

  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bgColor={"white"}>
          <DrawerCloseButton color={"black"} />
          <DrawerBody color={"black"}>
            <Stack
              zIndex={400}
              direction="column"
              bg="white"
              as="nav"
              py={"20px"}
              fontSize={"20px"}
            >
              <Stack px="80px">
                <Link href="/">
                  <Image src={Logo.src} alt="Clean Water" w="100px" />
                </Link>
              </Stack>
              <Stack w="100%">
                <Stack
                  direction="column"
                  justify={"space-evenly"}
                  align={"center"}
                >
                  {NavBarLinks.map((link, index) => (
                    <Stack key={index} my="25px">
                      <Text
                        cursor={"pointer"}
                        onClick={() => {
                          router.push(`${link.link}`);
                        }}
                        fontWeight={"medium"}
                        className={`navbar__link ${router.pathname === `${link.link}`
                            ? "sidebar__link--active"
                            : ""
                          }`}
                      >
                        {link.name}
                      </Text>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
              <Stack align={"center"} my="25px">
                <Button
                  onClick={() => router.push("/brochure")}
                  className="brochure-btn"
                >
                  E-Brochure
                </Button>
              </Stack>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Stack
        zIndex={400}
        direction="row"
        align="center"
        bg="#00131F"
        color={"white"}
        position="sticky"
        top={0}
        as="nav"
        py="20px"
        px={["20px", "20px", "10px"]}
        boxShadow={"0px 0px 50px 0.5px black"}
      >
        <Stack>
          <Link href="/">
            <Image src={Logo.src} alt="Clean Water" w="130px" pl="10px" />
          </Link>
        </Stack>
        <Stack w="77%">
          <Stack
            className="nav"
            direction="row"
            justify={"space-evenly"}
            w="100%"
          >
            {NavBarLinks.map((link, index) => (
              <Stack key={index}>
                <Text
                  cursor={"pointer"}
                  onClick={() => {
                    router.push(`${link.link}`);
                  }}
                  fontWeight={"medium"}
                  className={`navbar__link ${router.pathname === `${link.link}`
                      ? "sidebar__link--active"
                      : ""
                    }`}
                >
                  {link.name}
                </Text>
              </Stack>
            ))}
          </Stack>
        </Stack>
        <Stack className="nav">
          <Button
            onClick={() => router.push("/brochure")}
            className="brochure-btn"
          >
            E-Brochure
          </Button>
        </Stack>
        <Stack className="navBut">
          <Image src={icon.src} onClick={onOpen} alt="icon" />
        </Stack>
      </Stack>
    </>
  );
}

export default Navbar;
