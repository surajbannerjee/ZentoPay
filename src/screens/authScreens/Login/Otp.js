import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native'
import Styles from './Style'
import { getConfirmation } from '../../../services/AuthConfirmation'
import auth from '@react-native-firebase/auth'
import { configureGoogle, signInWithGoogle } from '../../../services/googleConfig'
import { useDispatch } from 'react-redux'
import { login } from '../../../redux/reducers/authReducer'
import { colors } from '../../../constants/colors'
import { hp, wp } from '../../../constants/constants'
import { p } from '../../../constants/fontConstants'
import { fontFamily } from '../../../constants/fontConstants'

const Otp = ({ route, navigation }) => {
  const { phone } = route.params || {}
  const [otp, setOtp] = useState('')

  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)

  const handleVerify = async () => {
    if (otp.trim().length === 0) {
      Alert.alert('Invalid', 'Please enter the OTP')
      return
    }
    const confirmation = getConfirmation()
    if (!confirmation) {
      Alert.alert('Error', 'No OTP request found. Please request a new OTP.')
      return
    }

    try {
      setLoading(true)
      await confirmation.confirm(otp)
      Alert.alert('Success', 'Phone authentication successful')

      // After successful phone verification, trigger Google Sign-In
      try {
        // configureGoogle should be called with your webClientId; placeholder used here
        configureGoogle()
        const userInfo = await signInWithGoogle()
        // dispatch login to redux with user info
        dispatch(
          login({
            user: { email: userInfo.user.email, name: userInfo.user.name },
            token: userInfo.idToken || null,
          })
        )
        Alert.alert('Signed in', `Welcome ${userInfo.user.name} (${userInfo.user.email})`)
      } catch (gErr) {
        Alert.alert('Google Sign-In failed', gErr.message || String(gErr))
      }
    } catch (err) {
      Alert.alert('Verification failed', err.message || String(err))
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={Styles.keyboardAvoidingView}>
      <Text style={Styles.text}>Enter OTP</Text>
      <Text style={[Styles.linkText, { marginTop: hp(1) }]}>We sent an OTP to {phone}</Text>

      <TextInput
        value={otp}
        onChangeText={setOtp}
        keyboardType="number-pad"
        placeholder="Enter OTP"
        placeholderTextColor={colors.textSecondary}
        style={Styles.input}
      />

      <TouchableOpacity
        onPress={handleVerify}
        disabled={loading}
        style={[
          Styles.primaryButton,
          loading ? Styles.primaryButtonDisabled : null,
        ]}
      >
        {loading ? (
          <ActivityIndicator color={colors.textPrimary} />
        ) : (
          <Text style={Styles.primaryButtonText}>Verify</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={async () => {
          // resend OTP
          try {
            const confirmation = await auth().signInWithPhoneNumber(phone)
            // replace stored confirmation
            const { setConfirmation } = await import('../../../services/AuthConfirmation')
            setConfirmation(confirmation)
            Alert.alert('OTP resent', `OTP resent to ${phone}`)
          } catch (err) {
            Alert.alert('Resend failed', err.message || String(err))
          }
        }}
        style={{
          marginTop: hp(1.5),
          alignItems: 'center',
        }}
      >
        <Text style={Styles.linkText}>Resend OTP</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Otp
