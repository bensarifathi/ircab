import React from 'react'
import { Box, Image, Heading, Text } from '@chakra-ui/react'

function PartenaireCard({children, title, icon, alt}) {
  return (
    <Box boxSize={'sm'} my={5} mx='auto'>
        <Image src={icon} alt={alt} boxSize='150px' mb={2}/>
        <Heading as={'h2'} my={5} size='lg'>{title}</Heading>
        <Text as={'p'}>{children}</Text>
    </Box>
  )
}

export default PartenaireCard