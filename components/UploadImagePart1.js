import React, { useState, useRef } from 'react'
import { 
    Input, SimpleGrid, 
    Button, Tooltip
} from '@chakra-ui/react'
import { FaImage, FaUpload } from 'react-icons/fa'


function UploadImagePart1({ currStep, updateStep, id }) {
    // state
    const [vehicleFront, setVehicleFront] = useState()
    const [vehicleBack, setVehicleBack] = useState()
    const [carteGrise, setCarteGrise] = useState()
    const [isLoading, setIsLoading] = useState(false)
    // ref
    const vehicleFrontRef = useRef(null)
    const vehicleBackRef = useRef(null)
    const carteGriseRef = useRef(null)
    // func
    const handleVFront = (e) => {
        setVehicleFront(e.target.files[0])
    }

    const handleVBack = (e) => {
        setVehicleBack(e.target.files[0])
    }

    const handleCarte = (e) => {
        setCarteGrise(e.target.files[0])
    }

    const handleSubmit = async () => {
        const formData = new FormData()
        formData.append('vehicle-front', vehicleFront)
        formData.append('vehicle-back', vehicleBack)
        formData.append('carte-grise', carteGrise)
        formData.append('id', id)
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
        <Input type='file' accept='image/*' 
            hidden ref={vehicleFrontRef} onChange={handleVFront}/>
        <Tooltip label='Photo du véhicule avant'>
            <Button bg='ircab.primary.driver' 
                onClick={() => vehicleFrontRef.current.click()}
                _hover={{bg:'ircab.primary.driver'}}
                leftIcon={<FaImage />}

            >
                {vehicleFront ? vehicleFront.name : 'Photo du véhicule avant'}
            </Button>
        </Tooltip>
        
        <Input type='file' accept='image/*' 
            hidden ref={vehicleBackRef} onChange={handleVBack}/>
        <Tooltip label='Photo du véhicule arrière'>
            <Button bg='ircab.primary.driver' 
                onClick={() => vehicleBackRef.current.click()}
                _hover={{bg:'ircab.primary.driver'}}
                leftIcon={<FaImage />}

            >
                {vehicleBack ? vehicleBack.name : 'Photo du véhicule arrière'}
            </Button>
        </Tooltip>
        
        <Input type='file' accept='image/*' 
            hidden ref={carteGriseRef} onChange={handleCarte}/>
        <Tooltip label='Carte grise'>
            <Button bg='ircab.primary.driver' 
                onClick={() => carteGriseRef.current.click()}
                _hover={{bg:'ircab.primary.driver'}}
                leftIcon={<FaImage />}

            >
                {carteGrise ? carteGrise.name: 'Carte grise'}   
            </Button>
        </Tooltip>

        <Button bg='ircab.primary.driver'
            _hover={{bg:'ircab.primary.driver'}}
            onClick={handleSubmit}
            leftIcon={<FaUpload />}
            isLoading={isLoading}
            disabled={isLoading || !vehicleFront || !vehicleBack || !carteGrise || !id}
        >
            Envoyer
        </Button>
        
    </SimpleGrid>
    )
}

export default UploadImagePart1