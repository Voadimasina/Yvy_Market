import { View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import { useNavigation } from '@react-navigation/native'

const navigatonTab = ({name, iconName}) =>{
    const navigation = useNavigation()
    return (
    <TouchableOpacity style={{
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
    }}
    onPress={() => navigation.navigate("User")}
    >
        <View style={{
                width: "100%",
                height: 80,
                alignItems: 'center',
                justifyContent: 'center',
                color: '#DA22FF'
        }}>
            <Ionicons name= {iconName} size= {20} color='#DA22FF' />

            {/* <Text numberOfLines={1}>{name}</Text> */}
        </View>
    </TouchableOpacity>
    
  )
}


export default navigatonTab