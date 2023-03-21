import { ThemeProvider } from 'styled-components/native'
// import { Testes } from './src/screens/Testes'
import defaultTheme from './src/theme/light'
import { useFonts } from 'expo-font'
import { Routes } from './src/routes'

export default function App() {
  const [fontsLoaded] = useFonts({
    InterRegular: require('./assets/fonts/Inter-Regular.ttf'),
    InterSemiBold: require('./assets/fonts/Inter-SemiBold.ttf'),
  })

  if (!fontsLoaded) {
    return undefined
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Routes />
    </ThemeProvider>
  )
}
