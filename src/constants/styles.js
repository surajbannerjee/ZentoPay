import { colors } from './colors';
import { deviceHeight, deviceWidth, hp, wp } from './constants';
import { H3, H5, p } from './fontConstants';
import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  keyboardAvoidingView: {
    backgroundColor: colors.deepGray,
    flex: 1,
  },
  SplashScreenView: {
    position: 'relative',
    height: hp(105),
    width: wp(100),
    paddingHorizontal: wp(5),
  },
  BorderBtn: {
    borderWidth: 2,
    borderColor: colors.softGray,
    backgroundColor: colors.trans,
    borderRadius: wp(2),
    paddingVertical: hp(1),
    paddingHorizontal: wp(2),
    flexDirection: 'row',
    justifyContent: 'center',
    gap: wp(2),
    width: "100%",
    alignItems: 'center',
  },
  BorderBtnText: {
    color: colors.white,
    fontSize: p,
  },
});
