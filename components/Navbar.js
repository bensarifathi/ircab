import React from 'react'
import {
    Box,
    Stack,
    Heading,
    Flex,
    Button,
    useDisclosure,
    Icon,
    Image
  } from "@chakra-ui/react";
import {
    MdSecurity,
    MdContactSupport,
    MdHandyman,
    MdSupport,
 } from 'react-icons/md'
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
      bgGradient='linear(to-r, #0082FF, #02395a)'
      color="white"
      {...props}
    >
        <Flex align="center" mr={5}>
            <Heading as="h1" size="lg" letterSpacing={"tighter"}>
                <Link href="/"><a><Image src='/iRcab_Logo_1x.png' boxSize={'50px'}/></a></Link>
            </Heading>
        </Flex>

        <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
            <HamburgerIcon />
        </Box>

        <Stack
            direction={{ base: "column", md: "row" }}
            display={{ base: isOpen ? "flex" : "none", md: "flex" }}
            width={{ base: "full", md: "auto" }}
            alignItems="center"
            mt={{ base: 4, md: 0 }}
        >
            <Link href="/securite">
            <Button variant='ghost' leftIcon={<Icon as={MdSecurity} />}><a>Securité</a></Button>
            </Link>
            
            <Link href="/faq">
                <Button variant='ghost' leftIcon={<Icon as={MdContactSupport} />}><a>FAQ</a></Button>
            </Link>

            <Link href="/carriere">
                <Button variant='ghost' leftIcon={<Icon as={MdHandyman} />}><a>Carrière</a></Button>
            </Link>
            
            <Link href="/support">
                <Button variant='ghost' leftIcon={<Icon as={MdSupport} />}><a>Support</a></Button>
            </Link>
        </Stack>
    </Flex>
  )
}

export default Navbar