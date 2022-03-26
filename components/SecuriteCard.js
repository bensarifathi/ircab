import React from 'react'
import { Box, Image, Heading, Text } from '@chakra-ui/react'

function SecuriteCard({children, title, icon, alt, isIcon}) {
  return (
    <Box boxSize={'sm'} my={5} mx='auto'>
        <Image src={icon} alt={alt} boxSize={isIcon && '150px'} mx={'auto'} mb={2}/>
        <Heading as={'h2'} my={5} mx='auto'>{title}</Heading>
        <Text as={'p'}>{children}</Text>
    </Box>
  )
}

export default SecuriteCard