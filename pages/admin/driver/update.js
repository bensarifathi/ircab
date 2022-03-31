import React from 'react'
import { 
    Box
} from '@chakra-ui/react'
import { signOut, useSession, signIn } from "next-auth/react";
import UpdateDriverMedia from '../../../components/UpdateDriverMedia'
import WelcomeMsg from '../../../components/WelcomeMsg'
import NotLogin from '../../../components/NotLogin'

function Update() {
    const { data: session } = useSession()
    return (
        <>
            {session ? 
            <>
                <WelcomeMsg user={session} logout={signOut}/>
                <Box w='md' mx='auto' bg='ircab.bg' p={10} my={10}>
                    <UpdateDriverMedia />
                </Box>
            </>
            :
                <NotLogin login={signIn}/>
            }
            
        </>
        
    )
}

export default Update