import React, {useState, useRef} from 'react'
import { 
    SimpleGrid, Input,
    Tooltip, Button,
    Select, useToast
} from '@chakra-ui/react'
import { FaImage, FaUpload } from 'react-icons/fa'

function UpdateDriverMedia() {
    // toast
    const toast = useToast()
    // state
    const [image, setImage] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [subfolder, setSubfolder] = useState(null)
    const [driverId, setDriverId] = useState(null)
    // ref
    const imageRef = useRef(null)
    const successRef = useRef(null)
    // util
    const handleChange = (e) => {
        setImage(e.target.files[0])
    }

    const handleChangeId = (e) => {
        setDriverId(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append(subfolder, image)
        formData.append('folder', subfolder)
        formData.append('driverId', driverId)
        try {
            setIsLoading(true)
            await fetch('/api/driver/update/', {
                method: 'POST',
                body: formData,
            })
            setIsLoading(false)
            successRef.current.click()
        } catch (err) {
            console.log(err.message)
        }
    }

    return (
    <SimpleGrid columns={1} spacing={10}>
        <Input type='file' accept='image/*' 
            hidden ref={imageRef} onChange={handleChange}/>
        <Tooltip label='Pick image'>
            <Button bg='ircab.primary.driver' 
                onClick={() => imageRef.current.click()}
                _hover={{bg:'ircab.primary.driver'}}
                leftIcon={<FaImage />}

            >
                {image ? image.name : 'Pick image'}
            </Button>
        </Tooltip>
        <Select placeholder='S3 subfolder destination' 
                    bg={'ircab.bg'}
                    value={subfolder}
                    onChange={(e) => setSubfolder(e.target.value)}
                    _hover={{bg:'ircab.bg'}}
                    _focus={{bg:'ircab.bg'}}
        >
            <option style={{'backgroundColor': 'white'}} value="vehicle-front">Vehicle Front</option>
            <option style={{'backgroundColor': 'white'}} value="vehicle-back">Vehicle Back</option>
            <option style={{'backgroundColor': 'white'}} value="permit-front">Permit Front</option>
            <option style={{'backgroundColor': 'white'}} value="permit-back">Permit Back</option>
            <option style={{'backgroundColor': 'white'}} value="carte-grise">Carte Grise</option>
            <option style={{'backgroundColor': 'white'}} value="controle-tech">Controle Technique</option>
            <option style={{'backgroundColor': 'white'}} value="residence">Residence</option>
            <option style={{'backgroundColor': 'white'}} value="assurance">Assurance</option>
            <option style={{'backgroundColor': 'white'}} value="casier-judiciaire">Casier Judiciare</option>
        </Select>
        <Input type='text' value={driverId} onChange={handleChangeId} placeholder='Driver id' bg='white'/>
        <Button bg='ircab.primary.driver'
            _hover={{bg:'ircab.primary.driver'}}
            onClick={handleSubmit}
            leftIcon={<FaUpload />}
            isLoading={isLoading}
            disabled={isLoading || !image || !subfolder || !driverId}
        >
            Update
        </Button>
        <Button
            onClick={() =>
                toast({
                title: 'Successfull.',
                description: "We've successfully updated the image.",
                status: 'success',
                duration: 9000,
                isClosable: true,
                })
            }
            ref={successRef}
            hidden
        />            
    </SimpleGrid>
  )
}

export default UpdateDriverMedia