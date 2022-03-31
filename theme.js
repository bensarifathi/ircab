import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: 'poppins',
  },
  colors: {
    ircab: {
      bg: '#F8FAFB',
      primary: {
        rider: '#FF5050',
        driver: '#F28907'
      },
      secondary: '#02395A'
    },
    driver: {
      100: '#F2890780'
    }
  }
})

export default theme