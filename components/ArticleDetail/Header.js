import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Ionicons from "react-native-vector-icons/Ionicons"

const Header = ({image}) => {

    const navigation = useNavigation()

  return (
    <>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30}} >
            <TouchableOpacity onPress={() => navigation.navigate('Home')} >
                <Ionicons name='arrow-back-outline' size={30} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Ionicons name='heart-outline' size={30} />
            </TouchableOpacity>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }} >
        <Image
                source={image}
                    style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'contain',
                }}
            />
        </View>
    </>
  )
}

export default Header