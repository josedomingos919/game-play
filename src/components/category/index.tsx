import {
  View,
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
} from 'react-native'

import { styles } from './styles'
import { SvgProps } from 'react-native-svg'
import { LinearGradient } from 'expo-linear-gradient'
import { theme } from '../../global/styles/theme'

type Props = TouchableOpacityProps & {
  title: string
  icon: React.FC<SvgProps>
  checked?: boolean
}

export default function Category({
  title,
  icon: Icon,
  checked = false,
  ...rest
}: Props) {
  const { secondary50, secondary70 } = theme.colors

  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.container} {...rest}>
      <LinearGradient
        style={styles.container}
        colors={[secondary50, secondary70]}
      >
        <View style={[styles.content, { opacity: checked ? 1 : 0.4 }]}>
          <View style={checked ? styles.checked : styles.check} />

          <Icon width={48} height={48} />
          <Text style={styles.title}>{title}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  )
}
