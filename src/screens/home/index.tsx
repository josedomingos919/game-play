import { View } from 'react-native'

import Profile from './../../components/profile'
import { styles } from '../../components/background/styles'

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
      </View>
    </View>
  )
}
