import React from 'react'
import { SimpleGrid, Box } from '@chakra-ui/react'
import Faq from './Faq'

function FaqRider() {
  return (
    <SimpleGrid columns={{base:1, md:2}} spacing={20} my={5}>
        <Box px={{base:'none', md:20}}>
          <Faq title={"Comment fonctionne l'application Ircab ?"}>
          Vous pouvez consulter la vidéo explicative sur notre page Facebook officielle. 
          Vous trouverez tous les détails nécessaires concernant l’utilisation de 
          l’application. 
          </Faq>
        </Box>
        <Box px={{base:'none', md:20}}>
          <Faq title={"Comment demander un chauffeur partenaire Ircab"}>
            Après avoir téléchargé l'application Cabrooz Rides, 
            vous devez vous inscrire si vous n'avez pas encore de compte en renseignant 
            vos informations personnelles et ensuite choisissez votre localisation 
            et votre destination, puis cliquez sur “Demander un chauffeur” 
          </Faq>
        </Box>
        <Box px={{base:'none', md:20}}>
          <Faq title={"Comment reserver un chaffeur Ircab ?"}>
            À l'heure actuelle, il n'est pas possible de réserver des courses 
            à l'avance, mais ça sera bientôt disponible 😄 
          </Faq>
        </Box>
        <Box px={{base:'none', md:20}}>
          <Faq title={"Peut on vraiment demander un chauffeur Ircab sans internet 🤔"}>
            Bien sûr ! Même si votre connexion est faible, 
            vous êtes dans un endroit dont la couverture réseau est médiocre, 
            vous pouvez désormais commander un chauffeur Cabrooz même 
            sans avoir internet 
          </Faq>
        </Box>
    </SimpleGrid>
  )
}

export default FaqRider