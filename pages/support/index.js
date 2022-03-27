import React from 'react'
import Head from 'next/head'
import { Stack, Flex, Image } from '@chakra-ui/react'
import ContactCard from '../../components/ContactCard';



function Support() {
  return (
    <>
    <Head>
      <title>iRcab-Support</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
      <Flex
        boxShadow={'5px 10px 18px black'}
        borderBottom='1px solid black'
      >
        <Image src='/images/contact.png' alt='contact page' minH={'60vh'}/>
      </Flex>
      <Flex height={'80vh'}>
        <iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=43%20rue%20hoggar%20hydra&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" />
      </Flex>
      <Stack align={'flex-end'} 
          pr={'30%'}
          position='relative'
          top={'-60vh'}
          right='0'
          height={0}
      >
        <ContactCard/> 
      </Stack>
    </>
    
  )
}

export default Support
