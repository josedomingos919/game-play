import { View, Image, Text, StatusBar } from 'react-native'

import ButtonIcon from '../../components/buttonIcon'
import Illustration from './../../assets/illustration.png'
import { styles } from './styles'

export default function SignIn() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Image source={Illustration} style={styles.image} resizeMode="stretch" />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize{'\n'}
          sua jogatinas{'\n'}
          facilmente
        </Text>

        <Text style={styles.subTitle}>
          Crie grupos para jogar seus games{'\n'}
          favouritos com seus amigos
        </Text>

        <ButtonIcon activeOpacity={0.3} title="Entrar com Discord" />
      </View>
    </View>
  )
}
