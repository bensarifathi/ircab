import React from 'react'
import { 
    Flex, Center, 
    SimpleGrid, Heading, 
    Button 
} from '@chakra-ui/react'

function NotLogin({login}) {
    return (
    <Flex h={'60vh'} p={10} bg='twitter.100'>
            <Center mx='auto' 
                border='1px solid gray' p={20}
                borderRadius={25}
                boxShadow='5px 10px #888888'
                bg={'gray.200'}
            >
                <SimpleGrid columns={1} spacing={10}>
                    <Heading as='h3' size={'sm'}>
                        Se connecter en tant qu'Administrateur
                    </Heading>
                    <Button colorScheme={'twitter'} onClick={() => login()}>
                        Se connecter
                    </Button>
                </SimpleGrid>
            </Center>
        </Flex>
  )
}

export default NotLogin