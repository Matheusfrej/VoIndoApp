import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Presentation } from '../screens/Presentation'
import { Home } from '../screens/Home'
import { Home2 } from '../screens/Home2'
import { Hub } from '../screens/Hub'
import { Participation } from '../screens/Participation'
import { Preferences } from '../screens/Preferences'
import { ActivitiesList } from '../screens/ActivitiesList'
// import { SearchActivities } from '../screens/SearchActivities'
import { MyActivities } from '../screens/MyActivities'
import { DetailedActivity } from '../screens/DetailedActivity'
import MapTeste from '../screens/MapTeste'
import { NeedProfessional } from '../screens/CreateActivity/NeedProfessional'
import { RegisterActivity } from '../screens/CreateActivity/RegisterActivity'

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
      <Screen name="myActivities" component={MyActivities} />
      <Screen name="detailedActivity" component={DetailedActivity} />
      <Screen name="mapTest" component={MapTeste} />
      <Screen name="needProf" component={NeedProfessional} />
      <Screen name="registerActivity" component={RegisterActivity} />
      {/* <Screen name="searchActivities" component={SearchActivities} /> */}
    </Navigator>
  )
}
