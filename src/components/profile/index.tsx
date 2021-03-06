import { View, Text } from 'react-native'

import { styles } from './styles'
import Avatar from '../avatar'

export default function Profile() {
  return (
    <View style={styles.container}>
      <Avatar urlImage="https://github.com/josedomingos919.png" />

      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá, </Text>

          <Text style={styles.username}>Ndonge</Text>
        </View>

        <Text style={styles.message}>Hoje é dia da Vitoria</Text>
      </View>
    </View>
  )
}
