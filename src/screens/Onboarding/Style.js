import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';
import { hp, wp } from '../../constants/constants';
import { BIG, H1, H1BIG, H5, H6, p, fontFamily } from '../../constants/fontConstants';

export default Styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
  },

  skipText: {
    color: colors.platinum,
    fontSize: p,
    fontFamily: fontFamily.medium,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(5),
  },

  iconContainer: {
    marginBottom: hp(5),
  },

  title: {
    fontSize: H1,
    fontFamily: fontFamily.extraBold,
    color: colors.white,
    marginBottom: hp(2),
    textAlign: 'center',
  },

  description: {
    fontSize: p,
    fontFamily: fontFamily.regular,
    color: colors.platinum,
    textAlign: 'center',
    lineHeight: 24,
    marginHorizontal: wp(3),
  },

  // Dots Indicator
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginVertical: hp(3),
  },

  dot: {
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.primary,
  },

  // Bottom Navigation
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(5),
    paddingVertical: hp(3),
    paddingBottom: hp(4),
  },

  primaryButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: wp(10),
    paddingVertical: hp(1.5),
    borderRadius: 25,
    minWidth: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },

  primaryButtonText: {
    color: colors.background,
    fontSize: p,
    fontFamily: fontFamily.bold,
  },

  secondaryButton: {
    paddingHorizontal: wp(8),
    paddingVertical: hp(1.5),
    borderRadius: 25,
    minWidth: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.primary,
  },

  secondaryButtonText: {
    color: colors.primary,
    fontSize: p,
    fontFamily: fontFamily.medium,
  },

  // Legacy styles (keeping for compatibility)
  textbg: {
    backgroundColor: colors.background,
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.primary,
    fontSize: BIG,
    fontFamily: fontFamily.bold,
  },
  text2: {
    color: colors.primary,
    fontSize: BIG,
    fontFamily: fontFamily.bold,
  },
});
