import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

import { styles } from './styles'
import { theme } from '../../global/styles/theme'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function ButtonAdd({ ...rest }: TouchableOpacityProps) {
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.container} {...rest}>
      <MaterialCommunityIcons
        name="plus"
        size={24}
        color={theme.colors.heading}
      />
    </TouchableOpacity>
  )
}
