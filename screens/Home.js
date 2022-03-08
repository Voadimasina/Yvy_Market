import {StyleSheet} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient' 
import Footer from '../components/Footer'
import Header from '../components/Home/Header'
import Body from '../components/Home/Body'

const Home = () => {
  return (
        <SafeAreaView style={{ flex:1, backgroundColor: "#dddddf"}}>
            {/* Header */}
            <Header />

            {/* Body */}
            <Body />

            {/* Footer */}
            <Footer />
        </SafeAreaView>
  )
}

export default Home