import { FlatList} from 'react-native'
import React from 'react'
import Content from './Content'


const ArticleData = [
  {
    id: 1,
    label: "Sneaker Air Jordan",
    image: require('./../../media/Article/Air_Jordan.png'),
    price: "1 000 000",
    likes: "100",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
  },
  {
    id: 2,
    label: "Sac à main Christian Dior",
    image: require('./../../media/Article/Christian_Dior_Sac_a_main.png'),
    price: "798 000",
    likes: "100",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
  },
  {
    id: 3,
    label: "Eau de toilette Dior Homme",
    image: require('./../../media/Article/Eau_de_toilette_homme_Dior.png'),
    price: "175 000",
    likes: "100",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
  },
  {
    id: 4,
    label: "Sneaker Nike Air Force",
    image: require('./../../media/Article/Naike_Air_Force_1.png'),
    price: "320 000",
    likes: "100",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
  },
  {
    id: 5,
    label: "Sur Vêtement Nike",
    image: require('./../../media/Article/Nike_sur_vêtement.png'),
    price: "800 00",
    likes: "100",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
  },
  {
    id: 6,
    label: "Robe pouur femme ",
    image: require('./../../media/Article/Robe_femme_jaune.png'),
    price: "850 000",
    likes: "100",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
  },
  {
    id: 7,
    label: "Lunette de soleil Ray Ban",
    image: require('./../../media/Article/lunette_de_soleiel_ray_ban.png'),
    price: "850 000",
    likes: "100",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
  }
]

const ListContent = () => {
  return (
    <FlatList
        data={ArticleData}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <Content item={item} />}
        numColumns={2}
    />
  )
}

export default ListContent

