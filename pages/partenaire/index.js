import React from 'react'
import Head from 'next/head'
import { 
    Container, Heading, 
    Flex, Text, SimpleGrid, 
    HStack, Image,
    Box
} from '@chakra-ui/react'
import PartenaireForm from '../../components/PartenaireForm'
import PartenaireCard from '../../components/PartenaireCard'


function Partenaire() {
    return (
        <>
        <Head>
            <title>iRcab</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Flex direction={'column'} bg='twitter.100'>
            <Container my={10} maxW='container.xl'>
                <Heading as={'h1'}>Commencez à gagner de l'argent avec 
                    seulement 10% de commission ! 
                </Heading>
                <Text as={'span'} fontWeight='bold' fontSize={'20px'}>
                Inscrivez-vous pour devenir partenaire iRcab
                </Text>
                <Text as='p'>
                    Nous vous appelerons pour vous donner un rendez-vous afin de 
                    compléter votre dossier partenaire.
                </Text>
            </Container>
            <PartenaireForm/>
        </Flex>
        <Flex direction={'column'} bg='#f7f7f7'>
            <Container maxW='container.xl' my={10}>
                <Heading as='h1' size={'lg'}>Qu'est-ce que iRcab Driver ?</Heading>
                <Text as='p' maxW={'60%'} my={10}>
                    L'application iRcab Driver est la meilleure application chauffeur partenaire 
                    VTC en Algérie. Grace à son interface intuitive, facile d'utilisation et moderne, 
                    vous êtes prêts à commencer votre journée de travail en 2 clics seulement.
                </Text>
                <Text as='p' maxW={'60%'}>
                    Tout le monde peut devenir Partenaire iRcab. 
                    Si vous avez une voiture et que vous voulez rentabiliser vos trajets 
                    ou simplement avoir un revenu complémentaire, vous pouvez vous 
                    inscrire en tant que partenaire et commencez à accepter des courses 
                    autour de vous. 
                    Avec iRcab, vous recevez même les demandes des utilisateurs qui 
                    n'ont pas Internet !
                </Text>
                <Heading as='h1' size={'lg'} my={10}>Pourquoi iRcab ?</Heading>
                <SimpleGrid columns={{base:1, md:2, lg:3}} spacing={30}>
                    <PartenaireCard icon={'/images/conditions.svg'} 
                    title='Vos propres conditions'>
                        Rentabilisez vos trajets et gagnez de l'argent tout en ayant du temps 
                        pour votre famille et vos affaires. Vous êtes votre propre patron, 
                        vous définissez vos horaires avec vos propres conditions.
                    </PartenaireCard>
                    <PartenaireCard icon={'/images/no-wifi.svg'} 
                    title='Travaillez en offline'>
                        Que vos clients soient dans un sous sol ou qu'ils n'ont pas 
                        Internet, c'est pas un problème ! Vous pouvez accepter leurs 
                        demandes même s'ils ne sont pas connectés !
                    </PartenaireCard>
                    <PartenaireCard icon={'/images/customer-service.svg'} 
                    title='Support très réactif'>
                        Vous rencontrez un problème technique sur l'application ou 
                        vous avez besoin de faire une réclamation ? Notre équipe hyper 
                        réactive à votre écoute durant toute la semaine. 
                    </PartenaireCard>
                </SimpleGrid>   
            </Container>
        </Flex>
        <Flex direction={'column'}>
            <Container my={10}>
                <Heading as='h2' size='lg'>Comment ça marche ?</Heading>
                <Text as='p'>
                    Vous voulez devenir partenaire iRcab et vous ne savez pas quelles sont 
                    les procédures à suivre ? C'est très simple !
                </Text>
            </Container>
            <Container maxW='container.xl'>
            <HStack spacing={20} my={10} >
                <Image src='/images/app-ios-android.jpeg' 
                alt='driver-new' borderRadius={25} boxShadow="25px 25px 0px -5px"
                boxSize='300px'
                minW='500px'
                />
                <Box>
                    <Heading as='h2' size='lg'>Téléchargez l'application Driver</Heading>
                    <Text as='p' maxW='60%' my={10}>
                        Vous voulez devenir partenaire iRcab et vous ne savez pas 
                        quelles sont les procédures à suivre ? C'est très simple !
                    </Text>
                        <a 
                        href='https://play.google.com/store/apps/details?id=com.cabroozdriver&hl=fr&gl=US'
                        target='_blank' rel="noreferrer"
                        >
                            Télécharger l'application Driver 
                        </a>
                </Box>
            </HStack>
            <HStack spacing={20} my={20} mx='auto'>
                <Image src='/images/dossier-chauffeur.jpeg' 
                alt='driver-new' borderRadius={25} boxShadow="25px 25px 0px -5px"
                boxSize='300px'
                minW='500px'
                />
                <Box>
                    <Heading as='h2' size='lg'>Dossier à fournir</Heading>
                    <Text as='p' maxW='60%' my={10}>
                        Après avoir terminé votre pré-inscription, 
                        vous serez recontacté par l'équipe iRcab afin de compléter 
                        votre dossier partenaire en fournissant les documents 
                        nécessaires.
                    </Text>
                </Box>
            </HStack>
            <HStack spacing={20} my={10} mx='auto'>
                <Image src='/images/formation-chauffeur.jpeg' 
                alt='driver-new' borderRadius={25} boxShadow="25px 25px 0px -5px"
                boxSize='300px'
                minW='500px'
                />
                <Box>
                    <Heading as='h2' size='lg'>Formation partenaires iRcab</Heading>
                    <Text as='p' maxW='60%' my={10}>
                        Une fois votre dossier accepté, vous êtes invité à assister à 
                        la formation de partenaires iRcab selon le planning 
                        disponible afin de mieux comprendre le fonctionnement de 
                        l'application iRcab Driver.
                    </Text>
                </Box>
            </HStack>
            </Container>
            <HStack spacing={40} mx='auto' my={10}>
                <Image src='/images/education.svg' alt='education' boxSize={'sm'}/>
                <Box>
                    <Heading as='h1' size={'3xl'}>Félicitations !</Heading>
                    <Heading as='h3' size={'xs'}>
                        Vous êtes prêt à démarrer votre première course iRcab
                    </Heading>
                </Box>
            </HStack>
        </Flex>
        </>
    )
}


export default Partenaire