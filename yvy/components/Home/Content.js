import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import { useNavigation } from '@react-navigation/native'

function Content({item}) {
    const navigation = useNavigation()
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={() => navigation.navigate("Article_Details",{
        id: item.id,
        label: item.label,
        image: item.image,
        price: item.price,
        likes: item.likes,
        description: item.description
    })}>
        <View style={{flex: 1, flexDirection:'row', padding: 10, marginHorizontal: 5}} >
            <View style={{flex: 1}} >
                <Text>{item.price} Ar</Text>
            </View>
            <TouchableOpacity>
                <Ionicons name='heart-outline' size={20} />
            </TouchableOpacity>
        </View>
        <View style={{paddingHorizontal: 5, paddingVertical: 5}}>
            <Text style={{fontWeight: 'bold'}} >{item.label}</Text>
        </View>
        <View style={{height: 100, width: "100%", alignItems: 'center', justifyContent: 'center'}} >
            <Image
                source={item.image}
                style={{
                resizeMode: 'contain',
                width: "100%",
                height: "100%",
            }}/>
        </View>
        <TouchableOpacity style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 100, borderWidth: 1, backgroundColor: "#78ffd6", marginHorizontal: 20, marginVertical: 10, borderColor:"#78ffd6",}} >
            <Ionicons name="add-circle-outline" size={30} colors="#DA22FF" />
            <Text> Ajouter au panier </Text>
        </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default Content

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        width: 150,
        height: 250,
        marginHorizontal: 5,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: '#ffffff'
    },
})