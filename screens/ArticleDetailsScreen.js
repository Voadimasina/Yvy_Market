import { View, Text, StyleSheet, Image, } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/ArticleDetail/Header'

const ArticleDetailsScreen = ({route}) => {
  const {image, label, description} = route.params
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#dddddf" }} >
      <Header image={image} />
      <View style={{flex: 1, backgroundColor: "#ffffff", borderTopLeftRadius: 40, borderTopRightRadius: 40}} >
        <View style={{marginHorizontal: 10, marginVertical: 20}} >
          <View style={{alignItems: 'center'}} >
            <Text style={{fontSize: 20, fontWeight: 'bold'}} >{label}</Text>
          </View>
          <View style={{padding: 10}} >
            <Text style={{fontWeight: '800'}} >{description}</Text>
          </View>

        </View>
      </View>
    </SafeAreaView>
  )
}

export default ArticleDetailsScreen