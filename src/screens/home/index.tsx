import { useState } from 'react'
import { View, FlatList } from 'react-native'

import Profile from './../../components/profile'
import ButtonAdd from '../../components/buttonAdd'
import CategorySelect from '../../components/categorySelect'
import ListHeader from '../../components/listHeader'
import Appointment, { AppointmentProps } from '../../components/appointment'
import { styles } from '../../components/background/styles'
import ListDivider from '../../components/ListDivider'

export default function Home() {
  const [category, setCategory] = useState('')

  const appointments: Array<AppointmentProps> = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/6 às 20:40',
      description:
        'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/6 às 20:40',
      description:
        'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
    },
    {
      id: '3',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/6 às 20:40',
      description:
        'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
    },
    {
      id: '4',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/6 às 20:40',
      description:
        'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
    },
    {
      id: '5',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/6 às 20:40',
      description:
        'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
    },
    {
      id: '6',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/6 às 20:40',
      description:
        'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
    },
    {
      id: '7',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/6 às 20:40',
      description:
        'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
    },
  ]

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

      <View style={styles.content}>
        <ListHeader title="Partidas Agendadas" subTitle="Total 6" />

        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <ListDivider />}
          renderItem={({ item }) => <Appointment data={item} />}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
}
