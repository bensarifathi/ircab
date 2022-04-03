import React from 'react'
import Head from 'next/head'
import { 
  Container, Heading, 
  Text, Box, SimpleGrid 
} from '@chakra-ui/react'
import PartenaireCard from '../../components/PartenaireCard'
import BusinessForm from '../../components/BusinessForm'


function Business() {
  return (
    <>
    <Head>
      <title>iRcab-Business</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Box w='100%' bg='driver.100' py={10}>
        <Container maxW='container.xl'>
            <Heading as='h1' size='xl'>
                Votre entreprise a besoin de chauffeurs ?
            </Heading>
            <Heading as='h2' size='md' my={5}>
                iRcab Business vous offre le meilleur service pour vos déplacements 
                professionnels !
            </Heading>
            <Text fontWeight='bold' as='p'>
                Inscrivez-vous pour bénéficier de notre offre !
            </Text>
            <BusinessForm />
        </Container>
    </Box>
    <Box w='100%' py={10}>
      <Container maxW='container.xl'>
        <Heading as='h1'>Pourquoi choisir iRcab Business ?</Heading>
        <Text as='p'>
          iRcab Business est une plateforme intuitive qui vous permet de réserver 
          un chauffeur pour tous les déplacements professionnels de votre entreprise 
          en toute sécurité grâce à une large flotte de chauffeurs expérimentés et 
          vérifiés, prêts à vous accompagner dans tous vos trajets à Alger et vers 
          toutes les wilayas avec un paiement personnalisé et des tarifs 
          imbattables ! 
        </Text>
        <SimpleGrid columns={{base:1, md:2, lg:3}} spacing={30}>
          <PartenaireCard icon={'/images/tirlire.png'} 
          title='Le meilleur tarif pour un excellent service !'>
              Nous sommes fiers de pouvoir vous offrir un service d'une qualité 
              exceptionnelle à des tarifs très concurrentiels.
          </PartenaireCard>
          <PartenaireCard icon={'/images/algerie.png'} 
          title='Même en hors wilaya !'>
              Pour vos longs trajets, déplacez vous d’Alger vers tout le territoire 
              national en réservant un chauffeur en un simple clic. 
          </PartenaireCard>
          <PartenaireCard icon={'/images/horloge.png'} 
          title='Réservez un chauffeur le temps que vous voulez !'>
              Vous pouvez réserver un chauffeur pour une longue durée selon vos 
              besoins (2h, 4h, 6h...).  
          </PartenaireCard>
          <PartenaireCard icon={'/images/customer-service.svg'} 
          title='Nous serons toujours là pour vous !'>
              Une équipe professionnelle et un support client qui répond à 
              vos besoins quotidiens 7/7.  
          </PartenaireCard>
          <PartenaireCard icon={'/images/responsibility.svg'} 
          title='Vous êtes entre de bonnes mains !'>
            Des chauffeurs partenaires professionnels et confirmés. 
          </PartenaireCard>
          <PartenaireCard icon={'/images/customer-service.svg'} 
          title='Arrivez à temps à tous vos rendez-vous !'>
              Nous nous engageons à vous offrir un suivi détaillé de toutes vos 
              courses pour pallier tout besoin imprévu.
          </PartenaireCard>
          </SimpleGrid>   
      </Container>
    </Box>
    </>
  )
}

export default Business