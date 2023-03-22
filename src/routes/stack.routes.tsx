import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../screens/Home'
import { Home2 } from '../screens/Home2'
import { Hub } from '../screens/Hub'

const { Screen, Navigator } = createNativeStackNavigator()

export function StackRoutes() {
  return (
    <Navigator>
      <Screen name="home" component={Home} />
      <Screen name="home2" component={Home2} />
      <Screen name="hub" component={Hub} />
    </Navigator>
  )
}
