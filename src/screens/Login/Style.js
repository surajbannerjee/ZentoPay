import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'
import { hp, wp } from '../../constants/constants'
import { H1, p, fontFamily } from '../../constants/fontConstants'

export const Styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: wp(5),
    backgroundColor: colors.background,
  },

  title: {
    fontSize: H1,
    fontFamily: fontFamily.extraBold,
    textAlign: 'center',
    color: colors.white,
    marginBottom: hp(2),
  },

  subtitle: {
    fontSize: p,
    textAlign: 'center',
    marginBottom: hp(2),
    color: colors.platinum,
    fontFamily: fontFamily.regular,
  },

  input: {
    height: hp(6),
    borderWidth: 1,
    borderColor: '#3b3b3b',
    borderRadius: 10,
    paddingHorizontal: wp(2),
    marginBottom: hp(2),
    backgroundColor: colors.surface,
    color: colors.textPrimary,
    fontFamily: fontFamily.regular,
  },

  button: {
    backgroundColor: colors.primary,
    height: hp(6),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: colors.background,
    fontSize: p,
    fontFamily: fontFamily.bold,
  },

  signupText: {
    textAlign: 'center',
    marginTop: 20,
    color: colors.platinum,
    fontFamily: fontFamily.regular,
  }

  ,

  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: hp(2),
    paddingHorizontal: wp(2),
  },

  tabItem: {
    flex: 1,
    paddingVertical: hp(1),
    marginHorizontal: wp(1),
    borderRadius: 8,
    backgroundColor: colors.surface,
    alignItems: 'center',
  },

  tabItemActive: {
    backgroundColor: colors.primary,
  },

  tabText: {
    color: colors.platinum,
    fontSize: hp(1.4),
  },

  tabTextActive: {
    color: colors.background,
    fontWeight: '600',
  },

  content: {
    flex: 1,
  },

  sectionTitle: {
    fontSize: hp(2),
    fontFamily: fontFamily.semiBold,
    marginBottom: hp(2),
    color: colors.primary,
  },

  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp(1.2),
    paddingHorizontal: wp(2),
    borderRadius: 10,
    backgroundColor: colors.surface,
    marginBottom: hp(1),
    borderWidth: 1,
    borderColor: '#eee',
  },

  radio: {
    width: wp(6),
    height: wp(6),
    borderRadius: wp(3),
    borderWidth: 1,
    borderColor: '#555',
    marginRight: wp(3),
    alignItems: 'center',
    justifyContent: 'center',
  },

  radioDot: {
    width: wp(3),
    height: wp(3),
    borderRadius: wp(1.5),
    backgroundColor: colors.primary,
  },

  optionTitle: {
    fontSize: hp(1.6),
    fontFamily: fontFamily.medium,
    color: colors.textPrimary,
  },

  optionSubtitle: {
    fontSize: hp(1.2),
    color: colors.platinum,
  },

  centered: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: hp(10),
  },

  verifyingText: {
    fontSize: hp(1.8),
    color: colors.platinum,
  },

  accountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp(1),
    paddingHorizontal: wp(2),
    backgroundColor: colors.surface,
    borderRadius: 8,
    marginBottom: hp(1),
  },

  avatar: {
    width: wp(12),
    height: wp(12),
    borderRadius: wp(6),
    backgroundColor: '#444',
    marginRight: wp(3),
  },

  stepText: {
    textAlign: 'center',
    color: colors.platinum,
    marginBottom: hp(2),
    fontFamily: fontFamily.medium,
  },

  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(1),
    marginBottom: hp(2),
  },

  langSelector: {
    paddingVertical: hp(0.8),
    paddingHorizontal: wp(3),
  },

  langText: {
    color: colors.platinum,
    fontFamily: fontFamily.regular,
  },

  countryDisplay: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp(0.6),
    paddingHorizontal: wp(2),
  },
countryPrefix: {
    height: hp(10),
    borderRadius: 10,
    backgroundColor: '#0000fd',
    paddingHorizontal: wp(3),
    marginRight: wp(2),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  countryFlag: {
    fontSize: hp(2.2),
    marginRight: wp(2),
  },
  countryCodePrefix: {
    color: colors.textPrimary,
    marginLeft: wp(2),
    fontFamily: fontFamily.medium,
    fontSize: hp(1.8),
  },
  countryName: {
    color: colors.platinum,
    fontFamily: fontFamily.regular,
  },

  inputRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: wp(2),
  },

  countryCode: {
    width: wp(22),
    height: hp(10),
    borderRadius: 10,
    backgroundColor: "red",
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: wp(2),
    borderWidth: 1,
    countryPrefix: {
      height: hp(10),
      borderRadius: 10,
      backgroundColor: '#0000fd',
      paddingHorizontal: wp(3),
      marginRight: wp(2),
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },

    countryCodePrefix: {
      color: colors.textPrimary,
      marginLeft: wp(2),
      fontFamily: fontFamily.medium,
      fontSize: hp(1.8),
    },
    borderColor: '#444',
  },

  countryCodeText: {
    color: colors.platinum,
    fontFamily: fontFamily.medium,
  },

  phoneInput: {
    flex: 1,
    color: colors.textPrimary,
    paddingHorizontal: wp(1),
    fontFamily: fontFamily.regular,
  },

  leftIconWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: wp(1),
    backgroundColor: '#0000fd',
    borderRadius: 8,
    paddingVertical: hp(0.4),
    paddingHorizontal: wp(2),
  },

  leftIconContainer: {
    paddingHorizontal: wp(1),
    paddingVertical: hp(0.5),
  },

  formInputContainer: {
    flex: 1,
    height: hp(10),
    borderRadius: 10,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: '#444',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(1),
  },

  rightIconContainer: {
    paddingHorizontal: wp(2),
    paddingVertical: hp(0.5),
    alignItems: 'center',
    justifyContent: 'center',
  },

  phoneInputInner: {
    flex: 1,
    height: '50px',
    paddingHorizontal: wp(2),
    color: colors.textPrimary,
    fontFamily: fontFamily.regular,
    fontSize: hp(1.9),
  },

  dropdown: {
    backgroundColor: colors.surface,
    borderRadius: 8,
    marginHorizontal: wp(2),
    marginTop: hp(1),
    borderWidth: 1,
    borderColor: '#444',
    overflow: 'hidden',
  },

  dropdownItem: {
    paddingVertical: hp(1.2),
    paddingHorizontal: wp(3),
  },

  dropdownText: {
    color: colors.textPrimary,
    fontFamily: fontFamily.regular,
  },

  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.35)',
    paddingHorizontal: wp(0),
  },

  modalContainer: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    maxHeight: hp(60),
    overflow: 'hidden',
  },

  modalItem: {
    paddingVertical: hp(1.6),
    paddingHorizontal: wp(4),
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },

  modalItemText: {
    color: colors.platinum,
    fontFamily: fontFamily.regular,
  },

  animatedDropdown: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    maxHeight: hp(50),
    position: 'absolute',
    left: wp(4),
    right: wp(4),
    top: hp(10),
    overflow: 'hidden',
  },

  /* Dropdown selector (react-native-element-dropdown) */
  dropdownSelector: {
    width: '48%',
    height: hp(6),
    backgroundColor: colors.surface,
    borderRadius: 8,
    paddingHorizontal: wp(3),
    borderWidth: 1,
    borderColor: '#444',
    justifyContent: 'center',
  },

  dropdownPlaceholder: {
    color: colors.textPrimary,
    fontFamily: fontFamily.regular,
  },

  dropdownSelected: {
    color: colors.textPrimary,
    fontFamily: fontFamily.medium,
  },

  dropdownStyle: {
    backgroundColor: colors.surface,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#444',
    paddingVertical: hp(0.5),
  },

  topBarRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(2),
  },

  countryItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  countryItemLabel: {
    color: colors.platinum,
    marginLeft: wp(3),
  },

  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

})
