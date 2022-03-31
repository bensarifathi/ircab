import React, { useState } from 'react'
import Head from 'next/head'
import { Button, Container, Heading, Image, Flex, SimpleGrid } from '@chakra-ui/react'
import FaqRider from '../../components/FaqRider'
import FaqDriver from '../../components/FaqDriver'

function FAQ() {
  const [btnState, setBtnState] = useState(false)
  const [bntValue, setBtnValue] = useState('Client')
  const handleClick = () => {
    setBtnState(!btnState)
    if (bntValue === 'Client') {
      setBtnValue('Partenaire')
    }else{
      setBtnValue('Client')
    }
    
  }
  console.log(btnState)
  return (
    <>
      <Head>
      <title>iRcab-FAQ</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex bg='twitter.100' direction='column'>
        <Container my={10}>
          <Image src='/images/bavarder.png' boxSize={250} mx='auto'/>
          <Heading as='h1' my={10} textAlign='center'>
            NOUS RÉPONDONS À TOUTES VOS QUESTIONS
          </Heading>
        </Container>
        <SimpleGrid columns={1} mx={'auto'} mb={10} spacing={20}>
          <Button w={'xs'} colorScheme={bntValue === 'Client' ? 'ircab.primary.rider' : 'ircab.primary.driver'}
            bg={bntValue === 'Client' ? 'ircab.primary.rider' : 'ircab.primary.driver'}
             onClick={handleClick}>
            {bntValue}
          </Button>
        </SimpleGrid>
      </Flex>
      {!btnState ? <FaqRider /> : <FaqDriver />}
      
      
    </>
  )
}

export default FAQ