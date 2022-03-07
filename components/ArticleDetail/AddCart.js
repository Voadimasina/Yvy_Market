import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const AddCart = () => {
  return (
    <TouchableOpacity style={{
        position: 'absolute',
        backgroundColor: '#fc67fa',
        bottom: 20,
        right: 5,
        left: 20,
        borderRadius: 50,
        width: "90%",
        height: 70,
        alignItems: 'center',
        justifyContent: 'center'
        }} >
        <View style={{flex: 1}} >
            <Text style={{fontSize: 30, fontWeight: 'bold', marginVertical: 15, marginHorizontal: 15}} >Ajouter au panier</Text>
        </View>
    </TouchableOpacity>
  )
}

export default AddCart