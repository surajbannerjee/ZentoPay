import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';
import { hp, wp } from '../../constants/constants';
import { BIG, H1, H1BIG, H5, H6, p } from '../../constants/fontConstants';
import { fontFamily } from '../../constants/fontConstants';

export default Styles = StyleSheet.create({
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
    fontFamily: fontFamily.clashBold,
  },

});
