import React, {useRef, useState} from 'react'
import Head from 'next/head'
import { signOut, useSession, signIn } from "next-auth/react";
import dbConnect from '../../../lib/dbConnect'
import Driver from '../../../models/Driver'
import { 
    Table, Thead,
    Tbody, Tr, Th, Td, TableCaption,
    AlertDialog, AlertDialogOverlay,
    AlertDialogContent, AlertDialogHeader,
    AlertDialogBody, AlertDialogFooter,
    useDisclosure, Button, IconButton, Center
} from '@chakra-ui/react'
import { DeleteIcon, CheckIcon } from '@chakra-ui/icons'

import NotLogin from '../../../components/NotLogin'
import WelcomeMsg from '../../../components/WelcomeMsg'
import DownloadType from '../../../components/DownloadType';

function ListPart({ drivers, count }) {
    const { data: session } = useSession()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [currId, setCurrId] = useState('')
    const [partenaire, setPartenaire] = useState(drivers)
    const cancelRef = useRef()
    const now = new Date()
    const lastThreeDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 3)
    const handleClick = (id) => {
        setCurrId(id)
        onOpen()
    }
    const deleteDriver = async () => {
      const res = await fetch(`/api/partenaire/delete/${currId}`, {
        method: 'Delete'
      })
      if (res.ok) {
        const newPartenaire = partenaire.filter(driver => driver._id !== currId)
        setPartenaire(newPartenaire)
        onClose()
      }
    }
    const loadMore = async () => {
      try {
        const res = await fetch(`/api/partenaire/more?curr=${partenaire.length}&limit=10`)
        const newDriver = await res.json()
        setPartenaire([...partenaire, ...newDriver])
      } catch (error) {
        
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
                  <TableCaption minH={'30vh'}>List partenaire</TableCaption>
                  <Thead>
                      <Tr>
                          <Th>Registred At</Th>
                          <Th>Nom</Th>
                          <Th>Prenom</Th>
                          <Th>Email</Th>
                          <Th>Numero Telephone</Th>
                          <Th>Marque</Th>
                          <Th>Model</Th>
                          <Th>Commune</Th>
                          <Th></Th>
                      </Tr>
                  </Thead>
                  <Tbody>
                    {partenaire.map((driver) => {
                        const newDate = new Date(driver.createdAt)
                        return (
                            <Tr key={driver._id} bg={newDate > lastThreeDay && 'whatsapp.100'}>
                                <Td>{newDate.toDateString()}</Td>
                                <Td>{driver.nom}</Td>
                                <Td>{driver.prenom}</Td>
                                <Td>{driver.email}</Td>
                                <Td>{driver.phone}</Td>
                                <Td>{driver.marque}</Td>
                                <Td>{driver.model}</Td>
                                <Td>{driver.commune}</Td>
                                <Td>
                                    <IconButton icon={<DeleteIcon color={'red'}/>} 
                                        onClick={() => handleClick(driver._id)}/>
                                    {driver.isCheck && <CheckIcon/>}
                                </Td>
                            </Tr>
                        )
                    }) }
                  </Tbody>
                  
                </Table>
                <Center my={3}>
                  <Button colorScheme={'twitter'} onClick={loadMore} isDisabled={count >= partenaire.length}>
                   Load More
                  </Button>
                  {/* <Button my={3} ml={2} colorScheme={'twitter'} onClick={dlCsv}>
                    Download
                  </Button> */}
                  <DownloadType />
                  {/* <Input type="date" onChange={(e) => console.log(e.target.value)}/>  */}
                </Center>
                
                <AlertDialog
                    isOpen={isOpen}
                    leastDestructiveRef={cancelRef}
                    onClose={onClose}
                >
                <AlertDialogOverlay>
                  <AlertDialogContent bg={'white'}>
                    <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                      Delete Driver
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
    const result = await Driver.find({}).limit(10).sort({createdAt: -1})
    const count = await Driver.countDocuments()
    // const drivers = result.map((doc) => {
    //   const driver = doc.toObject()
    //   driver._id = driver._id.toString()
    //   return driver
    // })
    const drivers = JSON.parse(JSON.stringify(result))
  
    return { props: { drivers, count } }
}

export default ListPart