import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
//import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient' 
import ImageItem from '../components/ArticleDetail/ImageItem'
import BodyDetail from '../components/ArticleDetail/BodyDetail'

const ArticleDetailsScreen = ({route}) => {
  const {image} = route.params
  return (
    <LinearGradient colors={["#a8ff78","#78ffd6"]} style={[StyleSheet.absoluteFill]} >
      <View style={styles.imageContainer} >
        {/* Image */}
        <ImageItem image={image} />

        <BodyDetail data={route.params}/>

      </View>
    </LinearGradient>
  )
}

export default ArticleDetailsScreen

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 50
    }
})