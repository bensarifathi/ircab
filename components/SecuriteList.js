import React from 'react'
import { Heading, Text, Box } from '@chakra-ui/react'

function SecuriteList({children, order, title}) {
  return (
    <Box my={10}>
        <Heading as={'h1'}>{order}. {title}.</Heading>
        <Text as={'p'}>{children}</Text>
    </Box>
  )
}

export default SecuriteList