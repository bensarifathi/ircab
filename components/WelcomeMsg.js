import React from 'react'
import { Center, Heading, Button, SimpleGrid } from '@chakra-ui/react'

function WelcomeMsg({ user, logout }) {
  return (
    <Center p={10}>
        <SimpleGrid columns={1} spacing={10}>
            <Heading as='h1'>
                Welcome {user.user.name}
            </Heading>
            <Button onClick={() => logout()} colorScheme={'twitter'} >
                Se deconecter
            </Button>
        </SimpleGrid>
    </Center>
  )
}

export default WelcomeMsg