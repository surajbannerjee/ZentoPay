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

  // Animation Values
  const scaleValue = useRef(new Animated.Value(0)).current;
  const opacityValue = useRef(new Animated.Value(0)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;
  const textTranslateY = useRef(new Animated.Value(30)).current;
  const rotateValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animation Sequence
    Animated.sequence([
      // 1. Logo Scale and Opacity
      Animated.parallel([
        Animated.spring(scaleValue, {
          toValue: 1,
          friction: 4,
          useNativeDriver: true,
        }),
        Animated.timing(opacityValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
      // 2. Subtle rotation
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      // 3. Text Reveal
      Animated.parallel([
        Animated.timing(textOpacity, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(textTranslateY, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ]).start();

    // Navigation Timeout (Simulating loading or wait for animation)
    const timeout = setTimeout(() => {
      navigation.replace('Onboarding');
    }, 4500);

    return () => clearTimeout(timeout);
  }, [navigation, scaleValue, opacityValue, rotateValue, textOpacity, textTranslateY]);

  const rotation = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <SafeAreaView style={Style.container}>
      <StatusBar
        backgroundColor={colors.bg1}
        barStyle="light-content"
        translucent={false}
      />

      <View style={Style.contentContainer}>
        {/* Logo with Animation */}
        <Animated.View
          style={[
            Style.logoCircle,
            {
              opacity: opacityValue,
              transform: [
                { scale: scaleValue },
                { rotate: rotation }
              ],
            },
          ]}
        >
          <Image
            source={Logo}
            style={Style.logo}
            resizeMode="contain"
          />
        </Animated.View>

        {/* Text with Animation */}
        <Animated.View
          style={[
            Style.textContainer,
            {
              opacity: textOpacity,
              transform: [{ translateY: textTranslateY }],
            },
          ]}
        >
          <Text style={Style.title}>ZentoPay</Text>
          <View style={Style.line} />
          <Text style={Style.subtitle}>FAST • SECURE • RELIABLE</Text>
        </Animated.View>
      </View>

      {/* Bottom Version Text */}
      <Animated.View style={[Style.footer, { opacity: textOpacity }]}>
        <Text style={Style.versionText}>Version 1.0.0</Text>
      </Animated.View>
    </SafeAreaView>
  );
};

export default SplashScreen;
