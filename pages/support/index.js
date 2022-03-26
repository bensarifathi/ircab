import React from 'react'
import Head from 'next/head'
import { Box, Container, Heading, Stack, AspectRatio, Flex } from '@chakra-ui/react'
import ContactCard from '../../components/ContactCard';



function Support() {
  return (
    <>
    <Head>
      <title>Ircab-Support</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
      <Box bgImg={'/images/contact.jpg'} backgroundSize="cover" height='60vh'
        boxShadow={'5px 10px 18px black'}
        borderBottom='1px solid black'
      >
        <Container py='30vh' boxSize={'full'} >
          <Heading as={'h1'} size='4xl' color='white'>Contactez Nous</Heading>
        </Container>
      </Box>
      <Stack align={'flex-end'} py={20} pr={'30%'} maxH='60vh'>
        <ContactCard/> 
      </Stack>
      <Flex position='absolute' top={'70vh'} w={'100%'}>
        <iframe width="100%" height="525" id="gmap_canvas" src="https://maps.google.com/maps?q=43%20rue%20hoggar%20hydra&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" />
      </Flex>
    </>
    
  )
}

export default Support
