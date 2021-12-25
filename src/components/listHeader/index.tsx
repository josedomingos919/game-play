import { Text, View } from 'react-native'
import { styles } from './styles'

type Props = {
  title: string
  subTitle: string
}

export default function ListHeader({ title, subTitle }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subTitle}</Text>
    </View>
  )
}
