import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  Animated,
  StatusBar,
  Image,
  SafeAreaView,
  Easing,
} from 'react-native';
import Style from './Style';
import { Logo } from '../../constants/images';
import { colors } from '../../constants/colors';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  // Logo animations
  const logoScale = useRef(new Animated.Value(0.6)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;

  // Tagline animations
  const taglineOpacity = useRef(new Animated.Value(0)).current;
  const taglineTranslateY = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    // Main smooth animation sequence
    const mainSequence = Animated.sequence([
      // Logo entrance - smooth scale and fade
      Animated.parallel([
        Animated.timing(logoScale, {
          toValue: 1,
          duration: 700,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
        }),
      ]),

      // Delay before tagline
      Animated.delay(300),

      // Tagline animation
      Animated.parallel([
        Animated.timing(taglineOpacity, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(taglineTranslateY, {
          toValue: 0,
          duration: 600,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true,
        }),
      ]),
    ]);

    // Start animation and navigate when it completes
    mainSequence.start(() => {
      navigation.replace('Onboarding');
    });

    return () => {
      // stop the animation if the component unmounts before completion
      mainSequence.stop && mainSequence.stop();
    };
  }, [navigation]);

  return (
    <SafeAreaView style={Style.container}>
      <StatusBar
        backgroundColor={colors.background}
        barStyle="light-content"
      />

      <View style={Style.contentContainer}>
        {/* Logo */}
        <Animated.Image
          source={Logo}
          style={[
            Style.logo,
            {
              opacity: logoOpacity,
              transform: [{ scale: logoScale }],
            },
          ]}
          resizeMode="contain"
        />

        {/* Tagline */}
        <Animated.Text
          style={[
            Style.tagline,
            {
              opacity: taglineOpacity,
              transform: [{ translateY: taglineTranslateY }],
            },
          ]}
        >
          Secure Payments
        </Animated.Text>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;