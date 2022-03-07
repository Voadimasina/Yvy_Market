import { View, StyleSheet } from 'react-native'
import React from 'react'
import ListContent from './ListContent'

const Body = () => {
  return (
    <View style={styles.bodyContainer}>
        <ListContent />
    </View>
    )
}

export default Body

const styles = StyleSheet.create({
    bodyContainer:{
        flex: 1,
    },
})