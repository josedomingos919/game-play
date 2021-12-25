import { View, ScrollView } from 'react-native'

import { styles } from './styles'
import { categories } from '../../utils/categories'
import Category from '../category'

type Props = {
  categorySelected: string
  setCategory: (categoryId: string) => void
}

export default function CategorySelect({
  categorySelected,
  setCategory,
}: Props) {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingRight: 40,
      }}
    >
      {categories.map((category, index) => (
        <Category
          onPress={() => setCategory(category.id)}
          style={{
            marginLeft: !index ? 24 : 0,
          }}
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id == categorySelected}
        />
      ))}
    </ScrollView>
  )
}
