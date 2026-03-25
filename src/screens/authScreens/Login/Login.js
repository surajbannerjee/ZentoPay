import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native'
import Styles from './Style'
import { colors } from '../../../constants/colors'
import { hp, wp } from '../../../constants/constants'
import { p } from '../../../constants/fontConstants'
import { fontFamily } from '../../../constants/fontConstants'
import auth from '@react-native-firebase/auth'
import { setConfirmation } from '../../../services/AuthConfirmation'

const Login = ({ navigation }) => {
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)

  const handleGetOtp = async () => {
    const digits = phone.replace(/\D/g, '')
    if (digits.length < 10) {
      Alert.alert('Invalid', 'Please enter a valid mobile number')
      return
    }

    try {
      setLoading(true)
      // if user entered 10 digits, assume India and add +91
      let fullPhone = digits
      if (!fullPhone.startsWith('+')) {
        if (fullPhone.length === 10) fullPhone = `+91${fullPhone}`
        else fullPhone = `+${fullPhone}`
      }

      const confirmation = await auth().signInWithPhoneNumber(fullPhone)
      setConfirmation(confirmation)
      navigation.navigate('Otp', { phone: fullPhone })
    } catch (err) {
      Alert.alert('Error sending OTP', err.message || String(err))
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={Styles.keyboardAvoidingView}>
      <Text style={Styles.text}>Login</Text>

      <TextInput
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
        placeholder="Enter mobile number"
        placeholderTextColor={colors.textSecondary}
        style={Styles.input}
      />

      <TouchableOpacity
        onPress={handleGetOtp}
        disabled={loading}
        style={[
          Styles.primaryButton,
          loading ? Styles.primaryButtonDisabled : null,
        ]}
      >
        {loading ? (
          <ActivityIndicator color={colors.textPrimary} />
        ) : (
          <Text style={Styles.primaryButtonText}>Get OTP</Text>
        )}
      </TouchableOpacity>
    </View>
  )
}

export default Login

