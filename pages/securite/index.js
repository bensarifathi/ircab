import React from 'react'
import Head from 'next/head'
import { Flex, Heading, Text, Container, Image, SimpleGrid } from '@chakra-ui/react'
import SecuriteList from '../../components/SecuriteList'
import SecuriteCard from '../../components/SecuriteCard'

function Securite() {
  return (
    <>
      <Head>
        <title>iRcab-Securite</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Flex pt={10} pb={10}
        bg='#f7f7f7'
        >
          <Container maxW='container.xl'>
            <Text as='span' fontSize={'lg'} fontWeight='bold'>LA SÉCURITÉ D'ABORD </Text>
            <Heading as={'h1'} fontSize='6xl'>
            Devenez une référence en montrant votre respect et bienveillance ! 
            </Heading>
          </Container>
      </Flex>

      <Container maxW='container.xl' my={10}>
        <Heading as={'h1'} textAlign='center' fontSize={'2xl'}>
        Des fonctions de sécurité en constante évolution. Règles pour chaque course,
        Nous nous concentrons toujours sur la façon dont nous pouvons partager 
        l'espace ensemble, 
        en toute sécurité. Et nous n'arrêterons jamais.
        </Heading>
      </Container>
      <Flex>
        <Image src={'/images/securite-passager-chauffeur.png'} 
        alt='securite-passager-chauffeur'
        />
      </Flex>
      <Container maxW='container.xl' my={10}>
        <Text fontSize={'lg'} fontWeight={'bold'} color='ircab.secondary'>
          SOYEZ UNE BONNE PERSONNE. PENSER À LA SANTÉ ET À LA SÉCURITÉ DES AUTRES.
        </Text>
        <SecuriteList title={'Engagez-vous à respecter la sécurité sanitaire'} order={1}>
          Avant de monter à bord d'un véhicule ou de conduire avec iRcab, 
          vous devez convenir que vous ne présentez aucun symptôme et que vous 
          suivrez les directives des CDC relatives à la COVID-19, notamment le 
          port d'un masque qui couvre la bouche et le nez (comme l'exige l'ordonnance 
          fédérale). Le masque est requis même si vous êtes vacciné.
        </SecuriteList>
        <SecuriteList title={'Prenez un égoportrait si on vous le demande'} order={2}>
          Si nous recevons un rapport indiquant que vous ne portez pas votre masque, 
          vous devrez prendre un égoportrait avec votre masque avant de conduire ou 
          de vous déplacer avec iRcab.
        </SecuriteList>
        <SecuriteList title={'Faites-vous vacciner ou aidez les autres à se rendre aux sites de vaccination'}
          order={3}
        >
          Nous aidons à fournir des courses vers et depuis les rendez-vous de vaccination. 
          Parce qu'accéder au vaccin (ou rentrer à la maison) devrait être la partie facile. 
          Découvrez comment vous pouvez commander, envoyer ou financer une course.
        </SecuriteList>
      </Container>
      <Flex bg={'#f7f7f7'} py={10} direction='column'>
        <Container>
          <Heading as={'h1'} color='ircab.secondary'>LA SÉCURITÉ AVANT TOUT ! </Heading>
        </Container>
        <SimpleGrid columns={{base:1, md:2, lg:3}} spacing={10} w='80%' mx='auto'>
          <SecuriteCard icon='/images/check.svg' 
            alt={'check icon'} title='Contrôles annuels et suivi continue' isIcon>
            Chaque chauffeur est tenu de passer une vérification des antécédents administrée 
            par un professionnel avant de prendre le volant et chaque année par la suite. 
            Nous continuerons à suivre les activités illicites.
          </SecuriteCard>

          <SecuriteCard icon='/images/presentation.svg' 
            alt={'presentation icon'} title='Formation obligatoire à la sécurité' isIcon>
            Toute personne qui souhaite conduire avec iRcab doit compléter un programme 
            de sécurité 
            communautaire pour apprendre comment offrir des courses sécuritaires et 
            confortables pour tous.
          </SecuriteCard>
          <SecuriteCard icon='/images/responsibility.svg' 
            alt={'responsibility icon'} 
            title='Une responsabilité qui va dans les deux sens' isIcon>
            Nous éduquons de manière proactive tous les passagers et les chauffeurs sur 
            nos Directives de la communauté "Directives de la communauté".
          </SecuriteCard>
        </SimpleGrid>
      </Flex>
      <SimpleGrid columns={{base:1, md:2}} spacing={10} mt={5} mb={40} mx='auto' w='60%'>
        <SecuriteCard icon='/images/client-verifie-covid.png' alt='client verifier'
          title='Sécurité du passager'
        >
          Découvrez nos fonctionnalités de sécurité, obtenez des conseils de sécurité 
          et voyez comment vous pouvez être un meilleur étranger lorsque vous partagez 
          une course.
        </SecuriteCard>
        <SecuriteCard icon='/images/chauffeur-verifie-covid.png' alt='chauffeur verifier'
          title='Sécurité du passager'
        >
          Découvrez nos fonctionnalités de sécurité, 
          obtenez des réponses à vos questions sur la sécurité et voyez comment 
          vous pouvez être un meilleur étranger.
        </SecuriteCard>
      </SimpleGrid>
    </>
  )
}

export default Securite