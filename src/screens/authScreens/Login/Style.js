import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';
import { hp, wp } from '../../../constants/constants';
import { H1, H1BIG, H5, H6, p } from '../../../constants/fontConstants';
import { fontFamily } from '../../../constants/fontConstants';

export default Styles = StyleSheet.create({
  keyboardAvoidingView: {
    backgroundColor: colors.background,
    flex: 1,
    paddingTop: hp(3),
  },
  text: {
    color: colors.textPrimary,
    fontSize: H1BIG,
    fontFamily: fontFamily.bold,
    marginHorizontal: wp(4),
  },
  input: {
    marginTop: hp(2),
    backgroundColor: colors.surface,
    padding: wp(3),
    borderRadius: wp(2),
    marginHorizontal: wp(4),
    color: colors.textPrimary,
    fontSize: p,
    fontFamily: fontFamily.regular,
  },
  primaryButton: {
    marginTop: hp(2),
    backgroundColor: colors.primary,
    padding: wp(3),
    borderRadius: wp(2),
    marginHorizontal: wp(4),
    alignItems: 'center',
  },
  primaryButtonDisabled: {
    backgroundColor: colors.platinum,
  },
  primaryButtonText: {
    color: colors.textPrimary,
    fontSize: p,
    fontFamily: fontFamily.semiBold,
  },
  linkText: {
    marginTop: hp(1.5),
    alignSelf: 'center',
    color: colors.textSecondary,
    fontSize: p,
    fontFamily: fontFamily.regular,
  },

});
