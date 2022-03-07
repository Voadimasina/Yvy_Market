import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const dataItem = [
    {
        id:1,
        title: "Vêtements",
        image: require('./../../media/icons/vetement.png')
    },
    {
        id:2,
        title: "Chaussures",
        image: require('./../../media/icons/chaussure.png')
    },
    {
        id:3,
        title: "Sacs",
        image: require('./../../media/icons/sac.png')
    },
    {
        id:4,
        title: "Accessoires",
        image: require('./../../media/icons/accessoire.png')
    },
    {
        id:5,
        title: "Beauté",
        image: require('./../../media/icons/beaute.png')
    },
]

const listItem = ({item}) => (
    <TouchableOpacity style={{
        justifyContent: 'center', 
        alignItems: 'center', 
        margin: 10, 
        borderRadius: 10,
        backgroundColor: 'rgb(255,255,255)', 
        borderTopColor: "#ffffff",
        borderTopWidth: 1,
        borderLeftColor: "#ffffff",
        borderLeftWidth: 2,
        width: 100,
        height: 100
        }} >
            <View>
                <Image
                    source={item.image}
                    style={{
                        width: 80,
                        height: 60,
                        resizeMode: 'contain',
                    }}
                />
            </View>
            <Text style={{textAlign: 'center', fontSize: 16, fontWeight: 'bold', }} >
                {item.title}
            </Text>
    </TouchableOpacity>
)

const CategoriesNav = () => {
  return (
      <View style={{
        paddingHorizontal: 10,
        marginTop: 20,
    }}>
        <FlatList
            data={dataItem}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={listItem}
            showsHorizontalScrollIndicator={false}
        />
      </View>
  )
}

export default CategoriesNav