import { View } from 'react-native'

import Profile from './../../components/profile'
import ButtonAdd from '../../components/buttonAdd'
import { styles } from '../../components/background/styles'
import CategorySelect from '../../components/categorySelect'

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>

      <CategorySelect categorySelected="1" />
    </View>
  )
}
