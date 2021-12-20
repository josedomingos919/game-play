import { NavigationContainer } from '@react-navigation/native'

import { AuthRoutes } from './auth.routes'
import Background from '../components/background'

export default function Routes() {
  return (
    <NavigationContainer>
      <Background>
        <AuthRoutes />
      </Background>
    </NavigationContainer>
  )
}
