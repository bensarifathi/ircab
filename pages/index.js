import Head from 'next/head'
import Image from 'next/image'
import { 
  Box, Heading, 
  Text, Container, 
  SimpleGrid, Image as Img, 
  Button,
  Flex,
} from "@chakra-ui/react";
import Link from 'next/link'
import { motion } from 'framer-motion'
import React, { useState } from 'react'

const Index = () => {
  const [btnStat, setBtnStat] = useState(1)
  const btn1Id = 1
  const btn2Id = 2
  const btn3Id = 3

  const highlightBtn = (id) => {
    setBtnStat(Number(id))
  }

  return (
    <>
    <Head>
      <title>iRcab</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Box bgImage="url('/images/accueil.jpg')"
      backgroundSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      >
        <Container maxW='container.xl' pt={{base: 'none', md:20}} boxSize="full">
          <motion.div animate='animate' initial='initial' variants={{
            initial: {
              opacity: 0,
              scale:0.8,
              x: -100
            },
            animate: {
              opacity: 1,
              scale: 1,
              x: 0,
              transition: {
                duration: 0.8
              }
            }
          }}>
            <Heading as="h1" color="white" fontSize={55} >
              Déplacez-vous.
            </Heading>
            <Heading as='h1' color="#fff">Même sans Internet !</Heading>
            <Text color='white' w='md' fontSize={'18px'}>
              Besoin d’un chauffeur VTC pour vos déplacements personnels ou professionnels ?
              iRcab est la première application de transport VTC en Algérie qui offre la possibilité de se déplacer même sans Internet.
              Vous n'avez pas de crédit ? Vous êtes dans un sous-sol ? 
              pas de problème, vous pouvez quand même reserver une course avec iRcab. 
            </Text>
            <a href='https://play.google.com/store/apps/details?id=com.cabroozrider' rel="noreferrer" target="_blank">
              <Image src='/images/playStore.png'  width={'150px'} height={'150px'}/>
            </a> 
          </motion.div>
        </Container>
        <Box position="relative" display={'block'} bottom='-1px' height={'auto'} width='100%' zIndex={0}>
        <svg viewBox='0 0 1920 60' >
          <path fill='#fff' d='M1920,60H0V0S387,59,960,59,1920,0,1920,0Z'></path>
        </svg>
        </Box>        
      </Box>

      <SimpleGrid columns={{base: 1, md:2}} mt={{base:2, md:10}} maxW='80%' mx={'auto'} my={{base:5}}>
        <Container boxSize={{base:'sm', md:'lg'}}>
            <motion.div
                animate='animate' initial='initial' variants={{
                  initial: {
                    scale:0.8,
                    x: -100
                  },
                  animate:{
                    scale:1,
                    x:0,
                    transition: {
                      duration: 0.8
                    }
                  }
                }}
            >
            <Img src='/images/driver-new.webp' 
            alt='driver-new' borderRadius={25} boxShadow="25px 25px 0px -5px"
            />
            </motion.div>
        </Container>
        <Container>
          <Text as="span" color="#047cc7" fontWeight={'bold'}>
            DEVENEZ PARTENAIRE VTC iRcab 
          </Text>
          <Heading as="h2">
            Vos propres heures.
          </Heading>
          <Heading as="h2" color="#047cc7">Aucune condition !</Heading>
          <Text as="p">
          Besoin d'un revenu complémentaire ? Gagnez de l'argent tout en ayant du temps pour votre famille et vos affaires. 
          Vous êtes votre propre patron, vous définissez vos horaires avec vos propres conditions.
          Rejoignez le réseau Ircab Driver aujourd'hui et faites partie d'une communauté de partenaires professionnels et vérifiés. 
          </Text>
          <Link href='/partenaire'>
            <Button variant="solid" bg='ircab.100' colorScheme={'red'} mt={10} borderRadius="20px">
              Devenir Partenaire !
            </Button>
          </Link>
        </Container>
      </SimpleGrid>
      <Flex bgGradient='linear(to-r, #047cc7 ,#02385A)'>
      <SimpleGrid 
        columns={{base:1, md:2}} 
        w={'80%'}
        mx='auto'
      >
        <Container py={20}>
          <Text as="span" fontSize={20} fontWeight="bold" color="white" my={10}>
            Déplacez-vous AVEC iRcab 
          </Text>
          <Heading as="h2">A tout moment de la journée.</Heading>
          <Heading as="h2" color="white">Même en étant hors ligne !</Heading>
          <Text as="p" color="white">
            Une application 100% Algérienne conçue pour vous débarasser de vos problèmes de déplacements quotidiens. 
            Testée par des personnes qui ont une connaissance limitée aux Smartphones et la téchnologie moderne. 
            Le but de l'application est de faciliter les déplacements en taxi, même pour les personnes agées. 
          </Text>

          <SimpleGrid columns={1} spacing={10} mt={5}>
            <Button variant={'solid'} borderRadius={25} id={btn1Id}
              colorScheme={btn1Id === btnStat && 'red'} w={'fit-content'}
              bg={btn1Id === btnStat && 'ircab.100'}
              onClick={(e) => highlightBtn(e.target.id)}
              >
              Demandez votre chauffeur VTC en quelques clics seulement !
            </Button>
            <Button variant={'solid'} borderRadius={25} id={btn2Id}
              colorScheme={btn2Id === btnStat && 'red'} w={'fit-content'}
              bg={btn2Id === btnStat && 'ircab.100'}
              onClick={(e) => highlightBtn(e.target.id)}
              >
              Vous n'avez plus de connexion internet ? l'application basculera en mode hors ligne 
            </Button>
            <Button variant={'solid'} borderRadius={25}
              colorScheme={btn3Id === btnStat && 'red'} w={'fit-content'} id={btn3Id}
              bg={btn3Id === btnStat && 'ircab.100'}
              onClick={(e) => highlightBtn(e.target.id)}
            >
              Choisissez votre type de véhicule
            </Button>
          </SimpleGrid>
          <Button variant="solid" colorScheme="blue" mt={10} borderRadius="20px">
            Demandez une course
          </Button>
        </Container>
        <Container mt={{base:10, md:'none'}} py={10}>
          <motion.div
            animate='animate' initial='initial' variants={{
              initial: {
                scale:0.8,
                x: -100
              },
              animate:{
                scale:1,
                x:0,
                transition: {
                  duration: 0.8
                }
              }
            }}
          >
          <Img  
            src='/images/app-ui.webp' 
            alt='ircab mobile application' 
            boxSize={'lg'}
          />
          </motion.div>
        </Container>
      </SimpleGrid>
      </Flex>
      <Flex bg={'black'}>
        <SimpleGrid columns={{base:1, md:2}} mx='auto' w={'60%'}>
          <Container my={'auto'}>
            <Text as={'h2'} fontWeight='bold' fontSize='20px' color={'twitter.200'}>
              Obtenez une estimation
            </Text>
            <Text as={'h2'} fontWeight='bold' fontSize='20px' color={'white'}>
              pour votre prochaine course iRcab
            </Text>
          </Container>
          <Container>
          <a href='https://play.google.com/store/apps/details?id=com.cabroozrider' rel="noreferrer" target="_blank">
            <Image src='/images/play-store-dl.svg'  width={'200px'} height={'150px'}/>
          </a>
          </Container>
        </SimpleGrid>
      </Flex>
      <Flex py={5}>
        <SimpleGrid columns={{base:1, md:2}} mx='auto' w={'80%'} spacing={10}>
          <Container m={{base:'none', md:10}}>
            <Heading size={'lg'}>
              Déplacez vos clients...
            </Heading>
            <Heading size={'lg'}>
              Grâce à iRcab Business
            </Heading>
            <Text as="p" mt={10} mb={10}>
              Avec iRcab Business, vous pouvez être sûrs que vos collaborateurs sont entre les mains de chauffeurs 
              partenaires professionnels et vérifiés. 
              Faites en sorte que la course soit importante grâce aux solutions et aux expériences 
              de transport de iRcab Business, 
              qui développent des relations et donnent des résultats sur le long terme. 
              Nos équipes travaillent avec des organisations de tous secteurs pour vous proposer des solutions 
              de transport adaptées à vos besoins.
            </Text>
            <Link href="/business">
            <Button variant="solid" colorScheme={'red'} bg={'ircab.100'} mt={10} borderRadius="20px">
              <a>En savoir plus sur iRcab Business </a>
            </Button>
            </Link>
          </Container>
          <Container mb={{base:10, md:'none'}}>
            <motion.div
              animate='animate' initial='initial' variants={{
                initial: {
                  scale:0.8,
                  x: -100
                },
                animate:{
                  scale:1,
                  x:0,
                  transition: {
                    duration: 0.8
                  }
                }
              }}
            >
            <Img src='/images/business-new.webp' 
                alt='driver-new' borderRadius={25} 
                boxShadow="25px 25px 0px -5px"
            />
            </motion.div>
            
          </Container>
        </SimpleGrid>
      </Flex>
    </>
  )
} 

export default Index
