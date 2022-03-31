import React, {useState} from 'react'
import { 
    Heading, Container,
    Box, Tabs, TabList, 
    TabPanel, TabPanels, Tab,
    Text
} from '@chakra-ui/react'
import UploadImagePart1 from '../../components/UploadImagePart1'
import UploadImagePart2 from '../../components/UploadImagePart2'
import UploadImagePart3 from '../../components/UploadImagePart3'

function Inscription() {
    const [step, setStep] = useState(0)
    return (
      <>
      <Container maxW='container.xl' py={10}>
        <Heading>Veuillez Completer votre dossier d'inscription</Heading>
        <Text color='red' fontWeight='bold'>Veuillez vous assurez que les images que vous séléctionner sont de bonnes qualités</Text>
      </Container>
        <Tabs isLazy size='md' mx='auto' align='center' colorScheme='ircab.secondary' index={step}>
          <TabList>
            <Tab>première partie</Tab>
            <Tab>deuxième partie</Tab>
            <Tab>troisieme partie</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Box w='md' mx='auto' bg='ircab.bg' p={10}>
                <UploadImagePart1 currStep={step} updateStep={setStep}/>
              </Box>
            </TabPanel>
            <TabPanel>
              <Box w='md' mx='auto' bg='ircab.bg' p={10}>
                <UploadImagePart2 currStep={step} updateStep={setStep}/>
              </Box>
            </TabPanel>
            <TabPanel>
              <Box w='md' mx='auto' bg='ircab.bg' p={10}>
                <UploadImagePart3 />
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </>
    )
}

export default Inscription