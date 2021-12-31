import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { theme } from '../global/styles/theme'

import Home from '../screens/home'
import SignIn from '../screens/signIn'

const { Navigator, Screen } = createNativeStackNavigator()

export function AuthRoutes() {
  return (
    <Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: theme.colors.secondary100,
        },
      }}
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Home" component={Home} />
    </Navigator>
  )
}
