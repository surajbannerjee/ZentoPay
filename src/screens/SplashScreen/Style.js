import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';
import { hp, wp } from '../../constants/constants';
import { H1, H1BIG, H5, H6, p } from '../../constants/fontConstants';
import { fontFamily } from '../../constants/fontConstants';

export default Style = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    justifyContent: "center",
    alignItems: "center",
  },

  logoContainer: {
    padding: 25,
    borderRadius: 20,
    backgroundColor: "#1E293B",
    shadowColor: "#3B82F6",
    shadowRadius: 20,
    elevation: 10,
  },

  appName: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#38BDF8",
    letterSpacing: 2,
  },

  tagline: {
    marginTop: 25,
    fontSize: 16,
    color: "#CBD5F5",
    letterSpacing: 1,
  },


});
