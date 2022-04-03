import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { 
    Box, Container, 
    Image, Heading,
    Text, Button, Center
} from '@chakra-ui/react'

function Success() {
  return (
    <>
        <Head>
            <title>iRcab-Preinscription-Success</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Box bg='driver.100' py={20}>
            <Container>
                <Image src='/images/remerciement.png' alt='success-inscription' mx={'auto'}/>
                <Heading as='h1' mx='auto' textAlign={'center'} my={5}>
                    Merci !
                </Heading>
                <Text as='p' textAlign='center'>
                    Nous avons bien reçu votre demande !
                    Un spécialiste vous contactera dans les 24 heures qui suivent pour 
                    vous fournir toutes les informations nécessaires.
                </Text>
            </Container>
            <Center my={10}>
                <Link href='/'>
                    <Button colorScheme='blue' size='md' my={2}>
                        REVENIR A L'ACEUIL   
                    </Button>
                </Link> 
            </Center>
        </Box>
    </>
  )
}

export default Success