import React from 'react'
import { Box, Container, Stack, SimpleGrid, Text, Icon } from "@chakra-ui/react"
import Link from 'next/link'
import ListHeaderFooter from './ListHeaderFooter'
import { FaLinkedinIn, FaFacebook, FaInstagram } from 'react-icons/fa'

function Footer(props) {
  return (
    <Box
        bgGradient='linear(to-r, #047cc7, ircab.secondary)'
        color="white"
        borderTop={'3px solid #8bd0fc'}
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeaderFooter>Company</ListHeaderFooter>
            <Link href={'#'}>About Us</Link>
            <Link href={'#'}>Careers</Link>
            <Link href={'#'}>Contact Us</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeaderFooter>Support</ListHeaderFooter>
            <Link href={'#'}>Help Center</Link>
            <Link href={'#'}>Safety Center</Link>
            <Link href={'#'}>Community Guidelines</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeaderFooter>Legal</ListHeaderFooter>
            <Link href={'/politique-de-confidentialite'}>Cookies Policy</Link>
            <Link href={'/politique-de-confidentialite'}>Privacy Policy</Link>
            <Link href={'#'}>Terms of Service</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeaderFooter>Réseau sociaux</ListHeaderFooter>
            <a href='#'><Icon as={FaFacebook} /> Facebook</a>
            <a href='#'><Icon as={FaLinkedinIn} /> Linkedin</a>
            <a href='#'><Icon as={FaInstagram} /> Instagram</a>
          </Stack>

          {/* <Stack align={'flex-start'}>
            <ListHeaderFooter>Install App</ListHeaderFooter>
            
          </Stack> */}
        </SimpleGrid>
      </Container>
      <Box
        borderTopWidth={1}
        bgGradient='linear(to-r, #047cc7, ircab.secondary)'>
        <Container
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>© 2022 iRcab - Tous droits réservés.</Text>
        </Container>
      </Box>

    </Box>
  )
}

export default Footer