import React from 'react'
import { 
    Center, Input, FormControl, 
    FormLabel, FormHelperText, 
    SimpleGrid, Flex, Button, Heading
} from '@chakra-ui/react'

function Registration() {
    return (
    <>
        <Flex h={'60vh'} p={10} bg='twitter.100'>
            <Center mx='auto' 
                border='1px solid gray' p={20}
                borderRadius={25}
                boxShadow='5px 10px #888888'
                bg={'gray.200'}
            >
                <SimpleGrid columns={1} spacing={10}>
                    <Heading as='h3' size={'sm'}>
                        S'inscrire
                    </Heading>
                    <FormControl>
                        <FormLabel htmlFor='email'>Email address</FormLabel>
                        <Input id='email' type='email' borderColor={'black'}/>
                        <FormHelperText color={'black'}>We'll never share your email.</FormHelperText>
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor='password'>Password</FormLabel>
                        <Input id='password' type='password' borderColor={'black'}/>
                        <FormHelperText color={'black'}>We'll never share your password.</FormHelperText>
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor='password2'>Password Confirmation</FormLabel>
                        <Input id='password2' type='password' borderColor={'black'}/>
                        <FormHelperText color={'black'}>We'll never share your password.</FormHelperText>
                    </FormControl>
                    <Button colorScheme={'twitter'}>S'inscrire'</Button>
                </SimpleGrid>
            </Center>
        </Flex>
        
    </>
    )
}

export default Registration