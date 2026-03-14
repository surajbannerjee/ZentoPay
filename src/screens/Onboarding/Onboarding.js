import { Text, View } from 'react-native'
import Style from './Style'
import React from 'react'

const Onboarding = () => {
  return (
    <View style={Style.textbg}>
      <Text style={Style.text}>Likhloo Outfit</Text>
      <Text style={Style.text2}>Likhloo ClashDisplay</Text>
    </View>
  )
}

export default Onboarding

