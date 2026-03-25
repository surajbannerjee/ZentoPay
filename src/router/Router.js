import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useSelector } from 'react-redux'
import Login from '../screens/authScreens/Login/Login'
import Otp from '../screens/authScreens/Login/Otp'
import SignUp from '../screens/authScreens/SignUp/SignUp'
import Home from '../screens/Home/Home'
import Profile from '../screens/Profile/Profile'
import ScanQR from '../screens/ScanQR/ScanQR'
import History from '../screens/History/History'
import SplashScreen from '../screens/SplashScreen/SplashScreen'
import Onboarding from '../screens/Onboarding/Onboarding'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

// Bottom Tabs
const BottomTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="ScanQR" component={ScanQR} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}

// Login Stack
const LoginStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Otp" component={Otp} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  )
}

// Home Stack
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainApp" component={BottomTabs} />
    </Stack.Navigator>
  )
}

// Main Router
const Router = () => {

  const login = useSelector(state => state.auth.isLoggedIn)

  return login ? <HomeStack /> : <LoginStack />

}

export default Router