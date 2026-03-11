import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/reducers/authReducer'
import { Styles } from './Style'

const Login = () => {

  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    dispatch(
      login({
        user: { name: 'Suraj', email },
        token: '123456'
      })
    )
  }

  return (
    <View style={Styles.container}>

      <Text style={Styles.title}>ZentoPay</Text>
      <Text style={Styles.subtitle}>Welcome Back</Text>

      <TextInput
        style={Styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={Styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={Styles.button} onPress={handleLogin}>
        <Text style={Styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={Styles.signupText}>
        Don't have an account? Sign Up
      </Text>

    </View>
  )
}

export default Login