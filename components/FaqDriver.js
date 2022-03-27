import React from 'react'
import { SimpleGrid, Box } from '@chakra-ui/react'
import Faq from './Faq'

function FaqDriver() {
  return (
    <SimpleGrid columns={{base:1, md:2}} spacing={20} my={5}>
        <Box px={{base:'none', md:20}}>
          <Faq title={"Comment devenir partenaire iRcab ?"}>
          Après avoir fait votre pré-inscription, un conseiller vous appelera pour 
          confirmer certaines informations avec vous, ensuite, vous serez invité à déposer 
          votre dossier administratif au niveau de notre siège situé à Hydra. 
          Une fois votre dossier validé, vous assisterez à une formation de 30 minutes 
          pour apprendre à utiliser notre application dédiée aux partenaires et dès que 
          terminée, vous signerez votre contrat de partenariat, nous vous accepterons 
          sur notre plateforme et vous pourrez ainsi commencer à faire des courses et 
          gagner de l'argent. 
          </Faq>
        </Box>
        <Box px={{base:'none', md:20}}>
          <Faq title={"Comment payer mes commissions ?"}>
          Le paiement de vos commissions se fait entre le 1er et le 10 de chaque mois. 
          Dépasser ces délais bloquera votre compte momentanément jusqu’à ce que vous 
          payez vos dettes. 
          </Faq>
        </Box>
        <Box px={{base:'none', md:20}}>
          <Faq title={"Quel est le dossier à fournir pour devenir partenaire ?"}>
              <ul>
                  <li>Permis de conduire en cours de validité</li>
                  <li>La carte grise du véhicule</li>
                  <li>Le contrôle technique du véhicule en cours de validité</li>
                  <li>Un extrait de naissance</li>
                  <li>Une certificat de résidence datant de moins de six mois</li>
                  <li>Casier judiciaire (bulletin N°3) datant de moins de trois mois</li>
                  <li>Une procuration légalisée à l'APC en cas d’utilisation d’une voiture qui n’appartient pas au Conducteur datant de moins de trois mois</li>
                  <li>Certificat médical de bonne santé</li>
                  <li>2 Photos</li>
                  <li>RIB Bancaire ou chèque barré</li>
              </ul>
          </Faq>
        </Box>
        <Box px={{base:'none', md:20}}>
          <Faq title={"Sur quelles Wilayas êtes-vous présents ?"}>
            Actuellement, vous pouvez seulement utiliser l'application sur Alger, 
            mais nous serons bientôt présents partout en Algérie ! 
          </Faq>
        </Box>
    </SimpleGrid>
  )
}

export default FaqDriver