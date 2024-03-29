import { View, Text, Image, TouchableOpacity} from 'react-native'
import React, {useContext}  from 'react'
import {userContext} from './../../Navigation'
//import { BlurView } from 'expo-blur'


const Head = () => {
    const user = useContext(userContext)
  return (
    <View style={{
        height: 50, 
        paddingHorizontal: 15,
        //marginTop: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: "space-between",
    }}>
        <View intensity={10} style={{
            justifyContent:"center", 
            alignItems: "center",
            borderRadius: 20,
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
        { user ? 
            <TouchableOpacity intensity={70} style={{justifyContent:"center", alignItems: "center", padding: 10, width: 80, height: 80, borderRadius: 20}} >
                <View>
                    <Image 
                        source={{uri : user.photoURL}}
                        style={{
                            width: 40,
                            height: 40,
                            resizeMode: 'contain'
                        }}
                        />
                </View>
                {/* <Text style={{textAlign: 'center', fontSize: 10, fontWeight: 'bold' }}>Annie RALAIVAO</Text> */}
            </TouchableOpacity> : 
            <></>
        }
    </View>
  )
}

export default Head