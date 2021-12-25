import { View, ScrollView } from 'react-native'

import { styles } from './styles'
import { categories } from '../../utils/categories'
import Category from '../category'

type Props = {
  categorySelected: string
}

export default function CategorySelect({ categorySelected }: Props) {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingRight: 40,
      }}
    >
      {categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id == categorySelected}
        />
      ))}
    </ScrollView>
  )
}
