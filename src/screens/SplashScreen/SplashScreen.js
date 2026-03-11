import React, { useEffect, useRef } from "react";
import { View, Text, Animated } from "react-native";
import Style from "./Style";

const SplashScreen = () => {

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.6)).current;
  const slideAnim = useRef(new Animated.Value(60)).current;
  const glowAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {

    Animated.sequence([

      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 2000,   // slower fade
          useNativeDriver: true,
        }),

        Animated.spring(scaleAnim, {
          toValue: 1,
          friction: 6,
          tension: 40,
          useNativeDriver: true,
        }),
      ]),

      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 1500,   // slower tagline animation
        useNativeDriver: true,
      }),

    ]).start();

    // Glow animation loop (slower)
    Animated.loop(
      Animated.sequence([
        Animated.timing(glowAnim, {
          toValue: 1,
          duration: 1800,
          useNativeDriver: false,
        }),
        Animated.timing(glowAnim, {
          toValue: 0,
          duration: 1800,
          useNativeDriver: false,
        }),
      ])
    ).start();

  }, []);

  const glow = glowAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.2, 0.9],
  });

  return (
    <View style={Style.container}>

      <Animated.View
        style={[
          Style.logoContainer,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
            shadowOpacity: glow,
          },
        ]}
      >
        <Text style={Style.appName}>ZentoPay</Text>
      </Animated.View>

      <Animated.Text
        style={[
          Style.tagline,
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          },
        ]}
      >
        Smart • Fast • Secure Payments
      </Animated.Text>

    </View>
  );
};

export default SplashScreen;