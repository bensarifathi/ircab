import React from 'react'
import { 
    Text, Heading, 
    Divider, Link, 
    VStack, Icon,
    List, ListItem, ListIcon
} from '@chakra-ui/react'
import { FaLinkedinIn, FaFacebook, FaInstagram } from 'react-icons/fa'
import { MdPhone, MdEmail} from 'react-icons/md'


function ContactCard() {
  const googleMapUrl = 'https://www.google.com/maps/place/43+Rue+du+Hoggar,+Hydra/@36.7419485,3.0382525,17z/data=!4m13!1m7!3m6!1s0x128fad8a5d8add4f:0x8b3e6fc33a0060f2!2s43+Rue+du+Hoggar,+Hydra!3b1!8m2!3d36.7419485!4d3.0404465!3m4!1s0x128fad8a5d8add4f:0x8b3e6fc33a0060f2!8m2!3d36.7419485!4d3.0404465?hl=fr'
  return (
    <VStack border={'1px solid black'} 
        borderRadius={10} p={5} 
        bg='gray.100'
        boxShadow={'5px 10px 18px black'}
        zIndex={10}
    >
        <Heading as={'h2'} size='md' color={'gray.500'}>Contactez Nous</Heading>
        <List spacing={5}>
            <ListItem>
                <ListIcon as={MdEmail}/>
                <a href='mailto:contact@ir-cab.com'>contact@ir-cab.com</a>
            </ListItem>
            <ListItem>
                <ListIcon as={MdEmail}/>
                <a href='mailto:contact@sk-corporate.com'>contact@sk-corporate.com</a>
            </ListItem>
            <ListItem>
                <ListIcon as={MdPhone}/>
                06 73 94 63 22
            </ListItem>
        </List>
        <Divider orientation='horizontal' w={'80%'} color='gray.500' />
        <Heading as={'h2'} size='md' color={'gray.500'} my={10}>
            Addresse
        </Heading>
        <a href={googleMapUrl} rel='noreferrer' target='_blank'>43 Rue Hoggar, Hydra Alger</a>
        <Divider orientation='horizontal' w={'80%'} color='gray.500' />
        <List spacing={5}>
            <ListItem>
                <ListIcon as={FaFacebook} />
                <a href='#'>facebook</a>
                
            </ListItem>
            <ListItem>
                <ListIcon as={FaLinkedinIn} />
                <a href='#'>linkedin</a>
            </ListItem>
            <ListItem>
                <ListIcon as={FaInstagram} />
                <a href='#'>instagram</a>
            </ListItem>
        </List>
    </VStack>
  )
}

export default ContactCard