import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  Animated,
  StatusBar,
  Image,
  SafeAreaView,
} from 'react-native';
import Style from './Style';
import { Logo } from '../../constants/images';
import { colors } from '../../constants/colors';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  // animation values
  const logoTranslateX = useRef(new Animated.Value(-200)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;

  const textTranslateY = useRef(new Animated.Value(40)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {

    Animated.sequence([
      // Logo animation
      Animated.parallel([
        Animated.timing(logoTranslateX, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),

      // Text animation
      Animated.parallel([
        Animated.timing(textTranslateY, {
          toValue: 0,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(textOpacity, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
        }),
      ]),
    ]).start();

    const timer = setTimeout(() => {
      navigation.replace('Onboarding');
    }, 3000);

    return () => clearTimeout(timer);

  }, []);

  return (
    <SafeAreaView style={Style.container}>
      <StatusBar
        backgroundColor={colors.shadowGrey}
        barStyle="light-content"
      />

      <View style={Style.contentContainer}>

        {/* Logo */}
        <Animated.View
          style={{
            opacity: logoOpacity,
            transform: [{ translateX: logoTranslateX }],
          }}
        >
          <Image
            source={Logo}
            style={Style.logo}
            resizeMode="contain"
          />
        </Animated.View>

        {/* App Name */}
        <Animated.Text
          style={[
            Style.title,
            {
              opacity: textOpacity,
              transform: [{ translateY: textTranslateY }],
            },
          ]}
        >
          Likhloo
        </Animated.Text>

      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;