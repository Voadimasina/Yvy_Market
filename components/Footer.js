import { StyleSheet, View } from 'react-native'
import React from 'react'
import NavigatonTab from './NavigatonTab'
import { LinearGradient } from 'expo-linear-gradient'

const Footer = () => {
  return (
    <View style={{
      height: 60,
      justifyContent: 'flex-end'
    }}>
      <LinearGradient start={{x:0,y:0}} end={{x:0,y:4}} colors={["transparent", "black"]} style={{
          position: "absolute",
          top: -20,
          left:0,
          right:0,
          height: 100,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15
      }}/>
      <View style={{
          flex: 1,
          flexDirection: 'row',
          paddingHorizontal: 10,
          paddingBottom: 10,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: '#ffffff',
          }} >
            <NavigatonTab name="Acceuil" iconName="home-outline" />
            <NavigatonTab name="Chercher" iconName="search-outline" />
            <NavigatonTab name="Catégories" iconName="albums-outline" />
            <NavigatonTab name="Panier" iconName="cart-outline" />
            <NavigatonTab name="Profil" iconName="person-outline" />
      </View>
  </View>
  )
}

export default Footer

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        bottom: 0,
        left:0,
        right:0,
        backgroundColor: 'transparent',
    },
    tabElement:{
      flex: 1,
      justifyContent: 'space-between',
      flexDirection: 'row',
      borderWidth: 0.8,
      borderColor: '#ffffff',
      paddingBottom: 10,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      backgroundColor: '#ffffff'
    }
})