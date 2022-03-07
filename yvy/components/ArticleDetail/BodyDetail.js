import { View, Text } from 'react-native'
import React from 'react'
import InfoItem from './InfoItem'
import ColorChoice from './ColorChoice'
import NumberChoice from './NumberChoice'
import AddCart from './AddCart'

const BodyDetail = ({data}) => {
  return (
    <View style={{flex: 1, backgroundColor: "#fff", borderTopRightRadius: 30, borderTopLeftRadius: 30}} >
          {/* Info */}
        <InfoItem data={data} />
            {/* Couleurs */}

        <ColorChoice />

        <NumberChoice />

        <AddCart />
    </View>
  )
}

export default BodyDetail