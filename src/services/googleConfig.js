import { GoogleSignin } from '@react-native-google-signin/google-signin'

// Replace with your actual web client ID from Firebase console
const DEFAULT_WEB_CLIENT_ID = 'YOUR_WEB_CLIENT_ID_HERE'

export const configureGoogle = (webClientId = DEFAULT_WEB_CLIENT_ID) => {
  GoogleSignin.configure({
    webClientId,
    offlineAccess: true,
  })
}

export const signInWithGoogle = async () => {
  await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true })
  const userInfo = await GoogleSignin.signIn()
  const tokens = await GoogleSignin.getTokens()
  return {
    user: userInfo.user,
    idToken: tokens.idToken,
    accessToken: tokens.accessToken,
  }
}

export default { configureGoogle, signInWithGoogle }
