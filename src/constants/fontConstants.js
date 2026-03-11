import { Dimensions } from 'react-native';

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
export const deviceHeight = Dimensions.get('window').height;
export const deviceWidth = Dimensions.get('window').width;

export const BIG = RFPercentage(5.5);
export const H1BIG = RFPercentage(4.5);
export const H1 = RFPercentage(3.5);
export const H2 = RFPercentage(3.0);
export const H3 = RFPercentage(2.8);
export const H4 = RFPercentage(2.6);
export const H5 = RFPercentage(2.4);
export const H6 = RFPercentage(2.2);
export const p = RFPercentage(2.0);
export const textP = RFPercentage(1.6);
export const small = RFPercentage(1.4);
export const smallS = RFPercentage(1.2);

export const fontFamily = {
    regular: 'Montserrat-Regular',
    medium: 'Montserrat-Medium',
    semiBold: 'Montserrat-SemiBold',
    bold: 'Montserrat-Bold',
    extraBold: 'Montserrat-ExtraBold',
    italic: 'Montserrat-Italic',
}