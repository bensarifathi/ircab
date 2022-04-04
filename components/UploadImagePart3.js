import React, { useState, useRef } from 'react'
import { 
    Input, SimpleGrid, 
    Button, Tooltip
} from '@chakra-ui/react'
import { FaImage, FaUpload } from 'react-icons/fa'
import { useRouter } from 'next/router'


function UploadImagePart3({ id }) {
    // router
    const router = useRouter()
    // state
    const [residence, setResidence] = useState()
    const [assurance, setAssurance] = useState()
    const [casierJudiciaire, setCasierJudiciaire] = useState()
    const [isLoading, setIsLoading] = useState(false)
    // ref
    const residenceRef = useRef(null)
    const assuranceRef = useRef(null)
    const casierJudiciaireRef = useRef(null)
    // func
    const handleResidence = (e) => {
        setResidence(e.target.files[0])
    }

    const handleAssurance = (e) => {
        setAssurance(e.target.files[0])
    }

    const handleCasier = (e) => {
        setCasierJudiciaire(e.target.files[0])
    }

    const handleSubmit = async () => {
        const formData = new FormData()
        formData.append('residence', residence)
        formData.append('assurance', assurance)
        formData.append('casier-judiciaire', casierJudiciaire)
        formData.append('id', id)
        try {
            setIsLoading(true)
            await fetch('/api/driver/register', {
                method: 'POST',
                body: formData
            })
            console.log('successfull')
            router.push('/partenaire/success')
            setIsLoading(false)
        } catch (err) {
            console.log(err.message)
        }
        
    }

    return (
    <SimpleGrid columns={1} spacing={10}>
        <Input type='file' accept='image/*' 
            hidden ref={residenceRef} onChange={handleResidence}/>
        
        <Tooltip label='Certificat de résidence'>
            <Button bg='ircab.primary.driver' 
                onClick={() => residenceRef.current.click()}
                _hover={{bg:'ircab.primary.driver'}}
                leftIcon={<FaImage />}

            >
                {residence ? residence.name : 'Certificat de résidence'}
            </Button>
        </Tooltip>

        <Input type='file' accept='image/*' 
            hidden ref={assuranceRef} onChange={handleAssurance}/>
        <Tooltip label='Assurance'>
            <Button bg='ircab.primary.driver' 
                onClick={() => assuranceRef.current.click()}
                _hover={{bg:'ircab.primary.driver'}}
                leftIcon={<FaImage />}
            >
                {assurance ? assurance.name : 'Assurance'}    
            </Button>
        </Tooltip>

        <Input type='file' accept='image/*' 
            hidden ref={casierJudiciaireRef} onChange={handleCasier}/>
        <Tooltip label='Casier judiciaire'>
            <Button bg='ircab.primary.driver' 
                onClick={() => casierJudiciaireRef.current.click()}
                _hover={{bg:'ircab.primary.driver'}}
                leftIcon={<FaImage />}

            >
                {casierJudiciaire ? casierJudiciaire.name : 'Casier judiciaire'} 
            </Button>
        </Tooltip>

        <Button bg='ircab.primary.driver'
            _hover={{bg:'ircab.primary.driver'}}
            onClick={handleSubmit}
            leftIcon={<FaUpload />}
            isLoading={isLoading}
            disabled={isLoading || !casierJudiciaire || !residence || !assurance || !id}
        >
            Envoyer
        </Button>
        
    </SimpleGrid>
    )
}

export default UploadImagePart3