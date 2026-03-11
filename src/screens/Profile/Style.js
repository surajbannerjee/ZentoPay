import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';
import { hp, wp } from '../../constants/constants';
import { H1, H1BIG, H5, H6, p } from '../../constants/fontConstants';
import { fontFamily } from '../../constants/fontConstants';

export default Styles = StyleSheet.create({
  keyboardAvoidingView: {
    backgroundColor: colors.deepGray,
    flex: 1,
  },
  text: {
    color: colors.white,
    fontSize: H1BIG,
  },

});
