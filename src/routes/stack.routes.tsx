import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Apresentation } from '../screens/Apresentation'
import { Home } from '../screens/Home'
import { Home2 } from '../screens/Home2'
import { Hub } from '../screens/Hub'
import { Participation } from '../screens/Participation'
import { Preferences } from '../screens/Preferences'

const { Screen, Navigator } = createNativeStackNavigator()

export function StackRoutes() {
  return (
    <Navigator>
      <Screen name="home" component={Home} />
      <Screen name="home2" component={Home2} />
      <Screen name="hub" component={Hub} />
      <Screen name="apresentation" component={Apresentation} />
      <Screen name="participation" component={Participation} />
      <Screen name="preferences" component={Preferences} />
    </Navigator>
  )
}
