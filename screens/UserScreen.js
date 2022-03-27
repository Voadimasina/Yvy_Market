import { View, Text, TouchableOpacity } from 'react-native'
import React, {useContext} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from "react-native-vector-icons/Ionicons"
import {userContext} from './../Navigation'
import Profile from '../components/User/Profile'
import auth from '@react-native-firebase/auth'
import { LoginManager, AccessToken } from 'react-native-fbsdk-next'

const UserScreen = () => {
  const user = useContext(userContext)

  const onLogin = async () => {
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email'])

    if (result.isCancelled) {
      throw 'Connection annulé'
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken()

    if (!data) {
      throw 'Un problème detectélors de l\'obtention du token'
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken)

    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential)
  }


  return (
    user ? 
    <Profile user={user} />
     :
    <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
      <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-evenly', backgroundColor: '#1BEEFF', height: 100, width: '80%',  borderRadius: 25, alignItems: 'center'}}
        onPress={() => onLogin()}
      >
        <Ionicons name={"logo-facebook"} size= {40} color='white' />
        <Text style={{fontWeight: 'bold', color: 'white', fontSize: 25}} >Se conneter</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default UserScreen