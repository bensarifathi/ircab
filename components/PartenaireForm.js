import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { 
    SimpleGrid, Input,
    NumberInput, NumberDecrementStepper,
    NumberIncrementStepper, NumberInputField,
    NumberInputStepper, Select, Button
} from '@chakra-ui/react'

function PartenaireForm() {
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [marque, setMarque] = useState('')
    const [model, setModel] = useState('')
    const [commune, setCommune] = useState('')
    const [how, setHow] = useState('')
    const [annee, setAnnee] = useState(2009)
    const [isLoading, setIsLoading] = useState(false)

    const router = useRouter()

    const handleSubmit = async () => {
        const form = {
            nom,
            prenom,
            email,
            phone,
            marque,
            model,
            commune,
            how,
            annee
        }
        setIsLoading(true)
        const res = await fetch('/api/partenaire/add', {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (res.status === 201) {
            setIsLoading(false)
            router.push('/partenaire/success')
        }
        console.log('response code ', res.status)
    }
    // the code above should be refactor
    return (
    <SimpleGrid columns={{base:1, md:2, lg:3}} spacing={20} mx='10%' my={10}>
                <Input 
                    variant='filled' w={'auto'} 
                    placeholder='Nom'
                    bg={'ircab.bg'}
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    _hover={{bg:'ircab.bg'}}
                    _focus={{bg:'ircab.bg'}}
                    />
                <Input 
                    variant='filled' 
                    placeholder='Prénom' 
                    bg={'ircab.bg'}
                    value={prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                    _hover={{bg:'ircab.bg'}}
                    _focus={{bg:'ircab.bg'}}
                    />
                <Input 
                    variant='filled' 
                    placeholder='Numéro de téléphone'
                    bg={'ircab.bg'}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    _hover={{bg:'ircab.bg'}}
                    _focus={{bg:'ircab.bg'}}
                    />
                <Input 
                    variant='filled' 
                    placeholder='Email' 
                    bg={'ircab.bg'}
                    value={email}
                    type='email'
                    onChange={(e) => setEmail(e.target.value)}
                    _hover={{bg:'ircab.bg'}}
                    _focus={{bg:'ircab.bg'}}
                    />
                <Input 
                    variant='filled' 
                    placeholder='Marque de la voiture' 
                    bg={'ircab.bg'}
                    value={marque}
                    onChange={(e) => setMarque(e.target.value)}
                    _hover={{bg:'ircab.bg'}}
                    _focus={{bg:'ircab.bg'}}
                    />
                <Input 
                    variant='filled' 
                    placeholder='Modèle de la voiture' 
                    bg={'ircab.bg'}
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    _hover={{bg:'ircab.bg'}}
                    _focus={{bg:'ircab.bg'}}
                    />
                <NumberInput defaultValue={annee} 
                    min={2009} max={2022} bg={'ircab.bg'}
                    onChange={(e) => setAnnee(e)}
                    _hover={{bg:'ircab.bg'}}
                    >
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper  color={'blackAlpha.500'}/>
                        <NumberDecrementStepper  color={'blackAlpha.500'}/>
                    </NumberInputStepper>
                </NumberInput>
                <Select placeholder='Commune de résidence' 
                    bg={'ircab.bg'}
                    value={commune}
                    onChange={(e) => setCommune(e.target.value)}
                    _hover={{bg:'ircab.bg'}}
                    _focus={{bg:'ircab.bg'}}
                    >
                    <option style={{'backgroundColor': 'white'}} value="Alger-Centre">Alger-Centre</option>
                    <option style={{'backgroundColor': 'white'}} value="Sidi M'Hamed">Sidi M'Hamed</option>
                    <option style={{'backgroundColor': 'white'}} value="El Madania">El Madania</option>
                    <option style={{'backgroundColor': 'white'}} value="Belouizdad">Belouizdad</option>
                    <option style={{'backgroundColor': 'white'}} value="Bab El Oued">Bab El Oued</option>
                    <option style={{'backgroundColor': 'white'}} value="Bologhine">Bologhine</option>
                    <option style={{'backgroundColor': 'white'}} value="Casbah">Casbah</option>
                    <option style={{'backgroundColor': 'white'}} value="Oued Koriche">Oued Koriche</option>
                    <option style={{'backgroundColor': 'white'}} value="Bir Mourad Raïs">Bir Mourad Raïs</option>
                    <option style={{'backgroundColor': 'white'}} value="El Biar">El Biar</option>
                    <option style={{'backgroundColor': 'white'}} value="Bouzareah">Bouzareah</option>
                    <option style={{'backgroundColor': 'white'}} value="Birkhadem">Birkhadem</option>
                    <option style={{'backgroundColor': 'white'}} value="El Harrach">El Harrach</option>
                    <option style={{'backgroundColor': 'white'}} value="Baraki">Baraki</option>
                    <option style={{'backgroundColor': 'white'}} value="Oued Smar">Oued Smar</option>
                    <option style={{'backgroundColor': 'white'}} value="Bachdjerrah">Bachdjerrah</option>
                    <option style={{'backgroundColor': 'white'}} value="Hussein Dey">Hussein Dey</option>
                    <option style={{'backgroundColor': 'white'}} value="Kouba">Kouba</option>
                    <option style={{'backgroundColor': 'white'}} value="Bourouba">Bourouba</option>
                    <option style={{'backgroundColor': 'white'}} value="Dar El Beïda">Dar El Beïda</option>
                    <option style={{'backgroundColor': 'white'}} value="Bab Ezzouar">Bab Ezzouar</option>
                    <option style={{'backgroundColor': 'white'}} value="Ben Aknoun">Ben Aknoun</option>
                    <option style={{'backgroundColor': 'white'}} value="Dely Ibrahim">Dely Ibrahim</option>
                    <option style={{'backgroundColor': 'white'}} value="El Hammamet">El Hammamet</option>
                    <option style={{'backgroundColor': 'white'}} value="Raïs Hamidou">Raïs Hamidou</option>
                    <option style={{'backgroundColor': 'white'}} value="Djasr Kasentina">Djasr Kasentina</option>
                    <option style={{'backgroundColor': 'white'}} value="El Mouradia">El Mouradia</option>
                    <option style={{'backgroundColor': 'white'}} value="Hydra">Hydra</option>
                    <option style={{'backgroundColor': 'white'}} value="Mohammadia">Mohammadia</option>
                    <option style={{'backgroundColor': 'white'}} value="Bordj El Kiffan">Bordj El Kiffan</option>
                    <option style={{'backgroundColor': 'white'}} value="El Magharia">El Magharia</option>
                    <option style={{'backgroundColor': 'white'}} value="Beni Messous">Beni Messous</option>
                    <option style={{'backgroundColor': 'white'}} value="Les Eucalyptus">Les Eucalyptus</option>
                    <option style={{'backgroundColor': 'white'}} value="Birtouta">Birtouta</option>
                    <option style={{'backgroundColor': 'white'}} value="Tessala El Merdja">Tessala El Merdja</option>
                    <option style={{'backgroundColor': 'white'}} value="Ouled Chebel">Ouled Chebel</option>
                    <option style={{'backgroundColor': 'white'}} value="Sidi Moussa">Sidi Moussa</option>
                    <option style={{'backgroundColor': 'white'}} value="Aïn Taya">Aïn Taya</option>
                    <option style={{'backgroundColor': 'white'}} value="Bordj El Bahri">Bordj El Bahri</option>
                    <option style={{'backgroundColor': 'white'}} value="El Marsa">El Marsa</option>
                    <option style={{'backgroundColor': 'white'}} value="H'raoua">H'raoua</option>
                    <option style={{'backgroundColor': 'white'}} value="Rouïba">Rouïba</option>
                    <option style={{'backgroundColor': 'white'}} value="Reghaïa">Reghaïa</option>
                    <option style={{'backgroundColor': 'white'}} value="Aïn Benian">Aïn Benian</option>
                    <option style={{'backgroundColor': 'white'}} value="Staoueli">Staoueli</option>
                    <option style={{'backgroundColor': 'white'}} value="Zeralda">Zeralda</option>
                    <option style={{'backgroundColor': 'white'}} value="Mahelma">Mahelma</option>
                    <option style={{'backgroundColor': 'white'}} value="Rahmania">Rahmania</option>
                    <option style={{'backgroundColor': 'white'}} value="Souidania">Souidania</option>
                    <option style={{'backgroundColor': 'white'}} value="Cheraga">Cheraga</option>
                    <option style={{'backgroundColor': 'white'}} value="Ouled Fayet">Ouled Fayet</option>
                    <option style={{'backgroundColor': 'white'}} value="El Achour">El Achour</option>
                    <option style={{'backgroundColor': 'white'}} value="Draria">Draria</option>
                    <option style={{'backgroundColor': 'white'}} value="Douera">Douera</option>
                    <option style={{'backgroundColor': 'white'}} value="Baba Hassen">Baba Hassen</option>
                    <option style={{'backgroundColor': 'white'}} value="Khraicia">Khraicia</option>
                    <option style={{'backgroundColor': 'white'}} value="Saoula">Saoula</option>
                </Select>
                <Select placeholder='Comment avez-vous connu Ircab ?' 
                    bg={'ircab.bg'}
                    value={how}
                    onChange={(e) => setHow(e.target.value)}
                    _hover={{bg:'ircab.bg'}}
                    _focus={{bg:'ircab.bg'}}
                >
                    <option style={{'backgroundColor': 'white'}} value="Site internet de la société">Site internet de la société</option>
                    <option style={{'backgroundColor': 'white'}} value="Moteurs de recherche (Google, Bing, Yahoo, ...)">Moteurs de recherche (Google, Bing, Yahoo, ...)</option>
                    <option style={{'backgroundColor': 'white'}} value="Réseaux sociaux">Réseaux sociaux</option>
                    <option style={{'backgroundColor': 'white'}} value="Publicité (véhicules, mailing, campagnes, ...)">Publicité (véhicules, mailing, campagnes, ...)</option>
                    <option style={{'backgroundColor': 'white'}} value="Recommendation / Amis / Proches">Recommendation / Amis / Proches</option>
                    <option style={{'backgroundColor': 'white'}} value="Autres">Autres</option>
                </Select>
                <Button colorScheme={'ircab.primary.driver'} bg='ircab.primary.driver' 
                    onClick={handleSubmit} isLoading={isLoading} disabled={isLoading}>
                    Devenir partenaire
                </Button>
            </SimpleGrid>
    )
}

export default PartenaireForm