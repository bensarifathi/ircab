import React, { useState } from 'react'
import { dlCsvCheck, dlCsvAll, dlCsvByDate } from '../lib/utils'
import { useRouter } from 'next/router'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    Button,
    Input,
    FormControl,
    FormLabel,
    Text,
    useDisclosure
} from '@chakra-ui/react'

function DownloadType() {
    // state
    const [from, setFrom] = useState(null)
    const [to, setTo] = useState(null)
    const [defaultLoad, setDefaultLoad] = useState(false)
    const [byDateLoad, setByDateLoad] = useState(false)
    const [allLoad, setAllLoad] = useState(false)
    //////
    const router = useRouter()
    const { onOpen, onClose, isOpen } = useDisclosure()
    const handleDefault = async () => {
        setDefaultLoad(true)
        await dlCsvCheck()
        setDefaultLoad(false)
        onClose()
        router.reload()
    }
    const handleAll = async () => {
        setAllLoad(true)
        await dlCsvAll()
        setAllLoad(false)
        onClose()
        router.reload()
    }

    const handleBydate = async () => {
        setByDateLoad(true)
        await dlCsvByDate(from, to)
        setByDateLoad(true)
        onClose()
        router.reload()
    }
    
    return (
    <Popover
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
    >
        <PopoverTrigger>
            <Button colorScheme={'twitter'} ml={2}>Download</Button>
        </PopoverTrigger>
        <PopoverContent bg={'gray.100'}>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>
                <Text fontWeight={'bold'}>
                    Select Download Type:
                </Text>
            </PopoverHeader>
            <PopoverBody borderBottom={'1px solid gray'}
                d='flex'
                alignItems='center'
            >
                <Button colorScheme={'twitter'} mr={2} onClick={handleAll} isLoading={allLoad} disabled={allLoad}>
                    All
                </Button>
                <Text>Download everything</Text>
            </PopoverBody>
            <PopoverBody borderBottom={'1px solid gray'}>
                <FormControl 
                    d='flex'
                    alignItems='center'>
                    <FormLabel htmlFor='from'>From</FormLabel>
                    <Input type={'date'} id='from' onChange={(e) => setFrom(e.target.value)}/>
                </FormControl>
                <FormControl
                    d='flex'
                    alignItems='center'>
                    <FormLabel htmlFor='to'>To</FormLabel>
                    <Input type={'date'} id='to' onChange={(e) => setTo(e.target.value)}/>
                </FormControl>
                <Button colorScheme={'twitter'} isDisabled={!to || !from}
                    onClick={handleBydate} 
                    isLoading={byDateLoad} 
                    disabled={byDateLoad}
                >
                    Filter and download
                </Button>
                
            </PopoverBody>
            <PopoverBody>
                <Button colorScheme={'twitter'} 
                    onClick={handleDefault}
                    isLoading={defaultLoad}
                    disabled={defaultLoad}
                >
                    Default
                </Button>
            </PopoverBody>
        </PopoverContent>
    </Popover>
  )
}

export default DownloadType