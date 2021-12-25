import { useState } from 'react'
import { View } from 'react-native'

import Profile from './../../components/profile'
import ButtonAdd from '../../components/buttonAdd'
import { styles } from '../../components/background/styles'
import CategorySelect from '../../components/categorySelect'

export default function Home() {
  const [category, setCategory] = useState('')

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>

      <CategorySelect
        setCategory={handleCategorySelect}
        categorySelected={category}
      />
    </View>
  )
}
