import {StyleSheet} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient' 
import Footer from '../components/Footer'
import Header from '../components/Home/Header'
import Body from '../components/Home/Body'

const Home = () => {
  return (
    <LinearGradient colors={["#a8ff78","#78ffd6"]} style={[StyleSheet.absoluteFill]} >
        <SafeAreaView style={{ flex:1,}}>
            {/* Header */}
            <Header />

            {/* Body */}
            <Body />

            {/* Footer */}
            <Footer />
        </SafeAreaView>
    </LinearGradient>
  )
}

export default Home