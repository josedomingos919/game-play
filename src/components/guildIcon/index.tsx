import { Image } from 'react-native'
import { styles } from './styles'

type Props = {}

export default function GuildIcon({}: Props) {
  const uri = 'https://github.com/josedomingos919.png'

  return (
    <Image
      style={styles.image}
      resizeMode="cover"
      source={{
        uri,
      }}
    />
  )
}
