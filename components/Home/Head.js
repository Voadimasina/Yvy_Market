import { View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { BlurView } from 'expo-blur'


const Head = () => {
  return (
    <View style={{
        height: 50, 
        paddingHorizontal: 15,
        marginTop: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: "space-between",
    }}>
        <View intensity={10} style={{
            justifyContent:"center", 
            alignItems: "center",
            borderRadius: 20,
            backgroundColor: '#ffffff',
            width: 80,
            height: 80, 
            }} >
            <Image 
                source={require('./../../media/icons/yvyIcon.png')}
                style={{
                    width: 60,
                    height: 60,
                    resizeMode: 'contain'
                }}
            />
        </View >
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}} >
            <Text style={{fontSize: 20, fontWeight:'700'}}>YVY Market</Text>
        </View>
        <TouchableOpacity intensity={70} style={{justifyContent:"center", alignItems: "center", padding: 10,backgroundColor: '#ffffff', width: 80, height: 80, borderRadius: 20}} >
            <View>
                <Image 
                    source={require('./../../media/icons/avatarIcon.png')}
                    style={{
                        width: 40,
                        height: 40,
                        resizeMode: 'contain'
                    }}
                    />
            </View>
            <Text style={{textAlign: 'center', fontSize: 10, fontWeight: 'bold' }}>Annie RALAIVAO</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Head