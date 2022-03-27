import React, {useRef, useState} from 'react'
import Head from 'next/head'
import { signOut, useSession, signIn } from "next-auth/react";
import dbConnect from '../../lib/dbConnect'
import Driver from '../../models/Driver'
import { 
    Table, Thead,
    Tbody, Tr, Th, Td, TableCaption,
    AlertDialog, AlertDialogOverlay,
    AlertDialogContent, AlertDialogHeader,
    AlertDialogBody, AlertDialogFooter,
    useDisclosure, Button, IconButton
} from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'

import NotLogin from '../../components/NotLogin';
import WelcomeMsg from '../../components/WelcomeMsg';

function ListPart({ drivers }) {
    const { data: session } = useSession();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [currId, setCurrId] = useState('')
    const cancelRef = useRef()
    
    const handleClick = (id) => {
        setCurrId(id)
        onOpen()
    }

    const deleteDriver = async () => {
      const res = await fetch(`/api/partenaire/delete/${currId}`, {
        method: 'Delete'
      })
      if (res.ok) {
        onClose()
      }
      
    }

    return (
        <>
            <Head>
            <title>iRcab</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            {session ?
            <>
                <WelcomeMsg user={session} logout={signOut}/>
                <Table variant={'simple'}>
                  <TableCaption>List partenaire</TableCaption>
                  <Thead>
                      <Tr>
                          <Th>Nom</Th>
                          <Th>Prenom</Th>
                          <Th>Numero Telephone</Th>
                          <Th>Email</Th>
                          <Th>Marque</Th>
                          <Th>Model</Th>
                          <Th>Commune</Th>
                          <Th></Th>
                      </Tr>
                  </Thead>
                  <Tbody>
                    {drivers.map((driver) => {
                        return (
                            <Tr key={driver._id}>
                                <Td>{driver.nom}</Td>
                                <Td>{driver.prenom}</Td>
                                <Td>{driver.phone}</Td>
                                <Td>{driver.email}</Td>
                                <Td>{driver.marque}</Td>
                                <Td>{driver.model}</Td>
                                <Td>{driver.commune}</Td>
                                <Td>
                                    <IconButton icon={<DeleteIcon color={'red'}/>} 
                                        onClick={() => handleClick(driver._id)}/>
                                </Td>
                            </Tr>
                        )
                    }) }
                  </Tbody>
                  
                </Table>
                <AlertDialog
                    isOpen={isOpen}
                    leastDestructiveRef={cancelRef}
                    onClose={onClose}
                >
                <AlertDialogOverlay>
                  <AlertDialogContent bg={'white'}>
                    <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                      Delete Customer
                    </AlertDialogHeader>
                    <AlertDialogBody>
                      Are you sure? You can't undo this action afterwards.
                    </AlertDialogBody>
                  <AlertDialogFooter>
                    <Button ref={cancelRef} onClick={onClose}>
                      Cancel
                    </Button>
                    <Button colorScheme='red' ml={3} onClick={deleteDriver}>
                      Delete
                    </Button>
                  </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialogOverlay>
                </AlertDialog>
            </>
            
            :
            <NotLogin login={signIn}/>
            }
        </>
    )
}

export async function getServerSideProps() {
    await dbConnect()
  
    /* find all the data in our database */
    const result = await Driver.find({})
    const drivers = result.map((doc) => {
      const driver = doc.toObject()
      driver._id = driver._id.toString()
      return driver
    })
  
    return { props: { drivers } }
}

export default ListPart