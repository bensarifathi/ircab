import React from 'react'
import {
    Box,
    Stack,
    Flex,
    Button,
    useDisclosure,
    Image,
  } from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";
import Link from 'next/link'


function Navbar(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleToggle = () => (isOpen ? onClose() : onOpen());
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={3}
      bgGradient='linear(to-r, #047cc7, ircab.secondary)'
      color="white"
      {...props}
      borderBottom='2px solid #FE504F'
    >
        <Flex align="center">
            <Link href="/"><a><Image src='/images/iRcab.png' height={'40px'}/></a></Link>
        </Flex>

        <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
            <HamburgerIcon />
        </Box>

        <Stack
            direction={{ base: "column", md: "row" }}
            display={{ base: isOpen ? "flex" : "none", md: "flex" }}
            width={{ base: "full", md: "auto" }}
            alignItems="center"
            spacing={{base: 'none', md: '24px'}}
            mt={{ base: 4, md: 0 }}
        >
            <Link href='/partenaire'>
                <a>Partenaire</a>
            </Link>

            <Link href="/securite">
            <a>Securité</a>
            </Link>
            
            <Link href="/faq">
                <a>FAQ</a>
            </Link>

            {/* <Link href="/carriere">
                <Button variant='ghost'><a>Carrière</a></Button>
                </Link> */}
            
            <Link href="/support">
                <a>Support</a>
            </Link>

            <a rel="noreferrer" target="_blank" href='https://play.google.com/store/apps/details?id=com.cabroozrider'>
                <Button bg={'ircab.primary.rider'} _hover={{bg:'ircab.primary.rider'}}>
                    Démarrer une course
                </Button>
            </a>
        </Stack>
    </Flex>
  )
}

export default Navbar