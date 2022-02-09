import { extendTheme } from '@chakra-ui/react'

const colors = {
  gray: {
    900: '#181B23',
    800: '#1F2029',
    700: '#353646',
    600: '#4B4D63',
    500: '#616480',
    400: '#797D9A',
    300: '#9699B0',
    200: '#B3B5C6',
    100: '#D1D2DC',
    50: '#EEEEF2'
  }
}

const fonts = {
  heading: 'Roboto',
  body: 'Roboto'
}

export const theme = extendTheme({
  fonts,
  colors,
  styles: {
    global: {
      body: {
      },
      '#__next': {
        width: '100vw',
        height: '100vh',
        bgGradient: 'linear(to-b, gray.900, gray.700)',
        color: 'gray.50'
      },
      header: {
        height: '4rem'
      }
    }
  }
})
