import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'
import { hp, wp } from '../../constants/constants'

export const Styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: wp(5),
    backgroundColor: colors.bg1,
  },

  title: {
    fontSize: hp(2),
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.primary,
    marginBottom: hp(2)
  },

  subtitle: {
    fontSize: hp(1),
    textAlign: 'center',
    marginBottom: hp(2),
    color: colors.text2
  },

  input: {
    height: hp(6),
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: wp(2),
    marginBottom: hp(2)
  },

  button: {
    backgroundColor: '#4A6CF7',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },

  signupText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#777'
  }

})