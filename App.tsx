import { ThemeProvider } from 'styled-components/native';
import { Home } from './src/screens/Home';
import defaultTheme from './src/theme/light';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    "InterRegular": require("./assets/fonts/Inter-Regular.ttf"),
    "InterSemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
  })

  if (!fontsLoaded) {
    return undefined
  }
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
    </ThemeProvider>
  );
}
