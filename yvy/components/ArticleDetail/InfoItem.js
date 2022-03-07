import { View, Text } from 'react-native'
import React from 'react'

const InfoItem = ({data}) => {
  return (
    <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1, marginVertical: 10, marginHorizontal: 15}} >
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{data.label}</Text>
            <Text>{data.description}</Text>
        </View>
        <View style={{marginVertical: 15, marginHorizontal: 15}} >
            <Text style={{fontSize: 30, fontWeight: 'bold', color: "#FDC830"}} >{data.price} Ar</Text>
        </View>
    </View>
  )
}

export default InfoItem