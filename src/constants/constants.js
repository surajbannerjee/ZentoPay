import {Dimensions, Platform} from 'react-native';
import Toast from 'react-native-toast-message';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;

export const platform = Platform.OS;

export const wp = widthPercentageToDP;
export const hp = heightPercentageToDP;

export const showToast = (type, message) => {
  Toast.show({
    type: type,
    text1: message,
    position: 'top',
  });
};
