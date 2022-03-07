import {View, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import { useNavigation } from '@react-navigation/native'

function ImageItem({image}) {

  const navigation = useNavigation()

  return (
    <View style={{height: 200}} >
      <TouchableWithoutFeedback style={{position: 'absolute', left: 10}} onPress={() => navigation.navigate('Home')} >
        <Ionicons  name='arrow-back-outline' size={30}  />
      </TouchableWithoutFeedback>

      <TouchableOpacity style={{position: 'absolute', right: 10}} >
        <Ionicons  name='heart-outline' size={30}  />
      </TouchableOpacity>
        <View style={{alignItems:'center', justifyContent:'center'}} >
          <Image
              source={image}
                  style={{
                  width: '90%',
                  height: '90%',
                  resizeMode: 'contain'
              }}
          />
        </View>
    </View>
  )
}

export default ImageItem