import React from 'react'
import Head from 'next/head'
import { Box, Flex, Text, Heading, Container } from '@chakra-ui/react'

function Carriere() {
  return (
    <>
    <Head>
      <title>iRcab-Carriere</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Box bgImg={'/images/bg-emploi.jpeg'} bgSize='cover' height="40vh">
      <Container py={20}>
        <Text as='span' color={'white'} fontWeight='bold'>TRAVAILLER CHEZ iRcab </Text>
        <Heading as='h1' color={'white'}>
        Construisons iRcab ensemble ! Rejoignez-nous et démarrez votre carrière aujourd'hui !
        </Heading>
      </Container>
    </Box>
    <Flex my={20} direction={'column'}>
      <Heading as={'h1'} mx='auto' color={'#0082FF'}>
        Jugez L'environnement De Travail Par Vous Même
      </Heading>
      <Text as='p' mx={'auto'}>
        Nous imaginons un monde où les villes sont de nouveau petites, 
        Où les transports et la technologie rapprochent les gens plutôt que de les isoler Nous voyons l'avenir comme un 
        projet de communauté, qui commence avec vous.
      </Text>
    </Flex>
    </>
    
  )
}

export default Carriere