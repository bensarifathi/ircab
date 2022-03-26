import React, { useState } from 'react'
import Head from 'next/head'
import { Button, Container, Heading, Image, Flex, SimpleGrid } from '@chakra-ui/react'
import FaqRider from '../../components/FaqRider'
import FaqDriver from '../../components/FaqDriver'

function FAQ() {
  const [btnState, setBtnState] = useState(false)
  const handleClick = () => {
    setBtnState(!btnState)
  }
  return (
    <>
      <Head>
      <title>Ircab-FAQ</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex bg='twitter.100' direction='column'>
        <Container my={10}>
          <Image src='/images/question.svg' boxSize={250}/>
          <Heading as='h1' my={10}>
            NOUS RÉPONDONS À TOUTES VOS QUESTIONS
          </Heading>
        </Container>
        <SimpleGrid columns={{base:1, md:2}} mx={'auto'} mb={10} spacing={20}>
          <Button w={'xs'} colorScheme='blue'
            borderRadius={25} onClick={handleClick} variant={!btnState ? 'solid': 'ghost'}>
            Clients
          </Button>
          <Button w={'xs'} colorScheme='blue' 
            borderRadius={25} onClick={handleClick} variant={btnState ? 'solid': 'ghost'}>
            Partenaires
          </Button>
        </SimpleGrid>
      </Flex>
      {!btnState ? <FaqRider /> : <FaqDriver />}
      
      
    </>
  )
}

export default FAQ