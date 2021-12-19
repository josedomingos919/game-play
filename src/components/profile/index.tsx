import { View, Text } from 'react-native'

import { styles } from './styles'

export default function Profile() {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá, </Text>

          <Text style={styles.username}>Rodrigo</Text>
        </View>

        <Text style={styles.message}>Hoje é dia da Vitoria</Text>
      </View>
    </View>
  )
}
