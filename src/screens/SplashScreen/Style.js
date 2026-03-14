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
  logoCircle: {
    width: wp(45),
    height: wp(45),
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: wp(22.5),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  logo: {
    width: wp(25),
    height: wp(25),
  },
  textContainer: {
    marginTop: hp(4),
    alignItems: 'center',
  },
  title: {
    color: colors.white,
    fontSize: H1BIG,
    fontFamily: fontFamily.extraBold,
    letterSpacing: 3,
    textTransform: 'uppercase',
  },
  line: {
    width: wp(15),
    height: 3,
    backgroundColor: colors.primary,
    marginVertical: hp(1.5),
    borderRadius: 5,
  },
  subtitle: {
    color: colors.softGray,
    fontSize: p,
    fontFamily: fontFamily.medium,
    letterSpacing: 2,
  },
  footer: {
    position: 'absolute',
    bottom: hp(5),
    width: '100%',
    alignItems: 'center',
  },
  versionText: {
    color: 'rgba(255,255,255,0.4)',
    fontSize: p,
    fontFamily: fontFamily.regular,
  },
});
