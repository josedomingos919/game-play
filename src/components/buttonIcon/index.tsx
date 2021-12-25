import { Image, View, Text } from 'react-native'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import DiscordImage from './../../assets/discord.png'
import { styles } from './styles'

type props = TouchableOpacityProps & {
  title: string
}

export default function ButtonIcon({ title, ...rest }: props) {
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImage} style={styles.icon} />
      </View>

      <Text style={styles.title}>{title} </Text>
    </TouchableOpacity>
  )
}
