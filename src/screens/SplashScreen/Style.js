import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';
import { hp, wp } from '../../constants/constants';
import { H1, H1BIG, H5, H6, p, fontFamily } from '../../constants/fontConstants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: wp(60),
    height: wp(60),
    marginBottom: hp(8),
  },

  tagline: {
    color: colors.platinum,
    fontSize: p,
    fontFamily: fontFamily.regular,
    letterSpacing: 0.5,
    marginTop: hp(4),
  },
});
