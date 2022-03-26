import React from 'react'
import { Text } from "@chakra-ui/react"

function ListHeaderFooter({children}) {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    )
}

export default ListHeaderFooter