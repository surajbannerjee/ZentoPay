import { PermissionsAndroid } from "react-native";
import { hp, platform, wp } from "../constants/constants";
import { colors } from "../constants/colors";

export const requestCameraPermission = async () => {
    if (platform === 'android') {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: 'Camera Permission',
                    message: 'App needs access to your camera',
                    buttonPositive: 'OK',
                    buttonNegative: 'Cancel',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                // // // console.log('Camera permission granted');
                return true;
            } else {
                // // // console.log('Camera permission denied');
                return false;
            }
        } catch (err) {
            console.warn(err);
            return false;
        }
    } else {

        // For iOS, you typically handle permissions in the Info.plist file
        // No need for explicit permission request here
        return true;
    }
};

export const convertToDate = (date) => {
    const parts = date.split('-'); // DD-MM-YYYY
    const dateObject = new Date(parts[2], parts[1] - 1, parts[0]);

    return dateObject;
}
