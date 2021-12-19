import { LinearGradient } from 'expo-linear-gradient'
import { theme } from '../../global/styles/theme'
import { styles } from './styles'

type Props = {
  children: Array<JSX.Element>
}

export default function Background({ children }: Props) {
  const { secondary80, secondary100 } = theme.colors

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary80, secondary100]}
    >
      {children}
    </LinearGradient>
  )
}
