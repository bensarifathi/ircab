import React, { useState, useRef } from 'react'
import { 
    Input, SimpleGrid, 
    Button, Tooltip
} from '@chakra-ui/react'
import { FaImage, FaUpload } from 'react-icons/fa'


function UploadImagePart2({ currStep, updateStep }) {
    // state
    const [permitFront, setPermitFront] = useState()
    const [permitBack, setPermitBack] = useState()
    const [controleTech, setControleTech] = useState()
    const [isLoading, setIsLoading] = useState(false)
    // ref
    const permitFrontRef = useRef(null)
    const permitBackRef = useRef(null)
    const controleTechRef = useRef(null)
    // func
    const handlePFront = (e) => {
        setPermitFront(e.target.files[0])
    }

    const handlePBack = (e) => {
        setPermitBack(e.target.files[0])
    }

    const handleControleTech = (e) => {
        setControleTech(e.target.files[0])
    }

    const handleSubmit = async () => {
        const formData = new FormData()
        formData.append('permit-front', permitFront)
        formData.append('permit-back', permitBack)
        formData.append('controle-tech', controleTech)
        try {
            setIsLoading(true)
            await fetch('/api/driver/register', {
                method: 'POST',
                body: formData
            })
            console.log('successfull')
            setIsLoading(false)
            updateStep(currStep + 1)
        } catch (err) {
            console.log(err.message)
        }
        
    }

    return (
    <SimpleGrid columns={1} spacing={10}>
        <Input type='file' accept='image/jpg' 
            hidden ref={permitFrontRef} onChange={handlePFront}/>
        <Tooltip label='Pérmit avant'>
            <Button bg='ircab.primary.driver' 
                onClick={() => permitFrontRef.current.click()}
                _hover={{bg:'ircab.primary.driver'}}
                leftIcon={<FaImage />}

            >
                {permitFront ? permitFront.name: 'Pérmit avant'}
            </Button>
        </Tooltip>
        
        <Input type='file' accept='image/jpg' 
            hidden ref={permitBackRef} onChange={handlePBack}/>
        <Tooltip label='Pérmit arrière'>
            <Button bg='ircab.primary.driver' 
                onClick={() => permitBackRef.current.click()}
                _hover={{bg:'ircab.primary.driver'}}
                leftIcon={<FaImage />}
            >
                {permitBack ? permitBack.name : 'Pérmit arrière'}   
            </Button>
        </Tooltip>
        <Input type='file' accept='image/jpg' 
            hidden ref={controleTechRef} onChange={handleControleTech}/>
        <Tooltip label='Controle technique'>
            <Button bg='ircab.primary.driver' 
                onClick={() => controleTechRef.current.click()}
                _hover={{bg:'ircab.primary.driver'}}
                leftIcon={<FaImage />}

            >
                {controleTech ? controleTech.name : 'Controle technique'}   
            </Button>
        </Tooltip>

        <Button bg='ircab.primary.driver'
            _hover={{bg:'ircab.primary.driver'}}
            onClick={handleSubmit}
            leftIcon={<FaUpload />}
            isLoading={isLoading}
            disabled={isLoading || !permitFront || !permitBack || !controleTech}
        >
            Envoyer
        </Button>
        
    </SimpleGrid>
    )
}

export default UploadImagePart2