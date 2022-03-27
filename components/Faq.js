import React, {useState} from 'react'
import { Text, Collapse, Flex, Box, Spacer, Icon } from '@chakra-ui/react'
import { MdExpandMore } from 'react-icons/md'

function Faq({children, title}) {
    const [show, setShow] = useState(false)
    const handleToggle = () => setShow(!show)
    return (
    <Box border={'1px solid black'} borderRadius={5} p={5} onClick={handleToggle}>
        <Collapse startingHeight={25} in={show}>
            <Flex>
                <Text as='p' fontSize={'lg'} fontWeight='bold'>
                    {title}
                </Text>
                <Spacer />
                <Icon as={MdExpandMore} _hover={{cursor:'pointer'}}/>
            </Flex>
            
            <Text as='p' mt={5}>
                {children}
            </Text>
        </Collapse>
    </Box>
    )
}

export default Faq