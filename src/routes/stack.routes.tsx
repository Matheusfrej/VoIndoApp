import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Apresentation } from '../screens/Apresentation'
import { Home } from '../screens/Home'
import { Hub } from '../screens/Hub'
import { Participation } from '../screens/Participation'

const { Screen, Navigator } = createNativeStackNavigator()

export function StackRoutes() {
  return (
    <Navigator>
      <Screen name="home" component={Home} />
      <Screen name="hub" component={Hub} />
      <Screen name="apresentation" component={Apresentation} />
      <Screen name="participation" component={Participation} />
    </Navigator>
  )
}
