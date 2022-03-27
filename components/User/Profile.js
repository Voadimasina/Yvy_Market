import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Profile = ({user}) => {
  return (
    <SafeAreaView style={{flex: 1,alignItems: 'center'}} >
        <View style={{width: 100, height: 100, }} >
            <Image
                source={{uri : user.photoURL}}
                style={{
                resizeMode: 'contain',
                width: "100%",
                height: "100%",
                }}
            />
        </View>
        <Text>{user.displayName}</Text>
    </SafeAreaView>
  )
}

export default Profile