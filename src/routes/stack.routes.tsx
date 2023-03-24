import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Presentation } from '../screens/Presentation'
import { Home } from '../screens/Home'
import { Home2 } from '../screens/Home2'
import { Hub } from '../screens/Hub'
import { Participation } from '../screens/Participation'
import { Preferences } from '../screens/Preferences'
import { ActivitiesList } from '../screens/ActivitiesList'
import { SearchActivities } from '../screens/SearchActivities'


const { Screen, Navigator } = createNativeStackNavigator()

export function StackRoutes() {
  return (
    <Navigator>
      <Screen name="home" component={Home} />
      <Screen name="home2" component={Home2} />
      <Screen name="hub" component={Hub} />
      <Screen name="presentation" component={Presentation} />
      <Screen name="participation" component={Participation} />
      <Screen name="preferences" component={Preferences} />
      <Screen name="activitiesList" component={ActivitiesList} />
      <Screen name="searchActivities" component={SearchActivities} />
    </Navigator>
  )
}
