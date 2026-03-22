import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Animated,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Style from './Style';
import { colors } from '../../constants/colors';
import { Wallet, Shield, TrendingUp } from 'lucide-react-native';

const Onboarding = () => {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const { width } = Dimensions.get('window');

  const onboardingData = [
    {
      id: 1,
      icon: Wallet,
      title: 'Fast Payments',
      description: 'Send and receive money instantly with just a few taps',
      color: colors.primary,
    },
    {
      id: 2,
      icon: Shield,
      title: 'Secure & Safe',
      description: 'Your transactions are protected with bank-level encryption',
      color: colors.secondary,
    },
    {
      id: 3,
      icon: TrendingUp,
      title: 'Track Everything',
      description: 'Monitor your expenses and manage your finances effortlessly',
      color: colors.primary,
    },
  ];

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false }
  );

  const handleMomentumScrollEnd = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const currentPageIndex = Math.round(contentOffsetX / width);
    setCurrentIndex(currentPageIndex);
  };

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    }
  };

  const handleSkip = () => {
    navigation.replace('Login');
  };

  const handleGetStarted = () => {
    navigation.replace('Login');
  };

  const renderDot = (index) => {
    const inputRange = [
      (index - 1) * width,
      index * width,
      (index + 1) * width,
    ];

    const dotWidth = scrollX.interpolate({
      inputRange,
      outputRange: [6, 12, 6],
      extrapolate: 'clamp',
    });

    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [0.3, 1, 0.3],
      extrapolate: 'clamp',
    });

    return (
      <Animated.View
        key={index}
        style={[
          Style.dot,
          {
            width: dotWidth,
            opacity,
          },
        ]}
      />
    );
  };

  const renderOnboardingItem = ({ item }) => {
    const IconComponent = item.icon;
    return (
      <View style={[Style.container, { width }]}>
        <View style={Style.iconContainer}>
          <IconComponent
            size={80}
            color={item.color}
            strokeWidth={1.5}
          />
        </View>

        <Text style={Style.title}>{item.title}</Text>
        <Text style={Style.description}>{item.description}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={Style.safeArea}>
      <StatusBar
        backgroundColor={colors.background}
        barStyle="light-content"
      />

      {/* Close/Skip Button */}
      <View style={Style.header}>
        <TouchableOpacity onPress={handleSkip}>
          <Text style={Style.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Onboarding Slides */}
      <FlatList
        ref={flatListRef}
        data={onboardingData}
        renderItem={renderOnboardingItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        scrollEventThrottle={32}
        onScroll={handleScroll}
        onMomentumScrollEnd={handleMomentumScrollEnd}
        showsHorizontalScrollIndicator={false}
      />

      {/* Dots Indicator */}
      <View style={Style.dotsContainer}>
        {onboardingData.map((_, index) => renderDot(index))}
      </View>

      {/* Bottom Navigation */}
      <View style={Style.buttonContainer}>
        <TouchableOpacity
          style={Style.secondaryButton}
          onPress={handleSkip}
        >
          <Text style={Style.secondaryButtonText}>Skip</Text>
        </TouchableOpacity>

        {currentIndex === onboardingData.length - 1 ? (
          <TouchableOpacity
            style={Style.primaryButton}
            onPress={handleGetStarted}
          >
            <Text style={Style.primaryButtonText}>Get Started</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={Style.primaryButton}
            onPress={handleNext}
          >
            <Text style={Style.primaryButtonText}>Next</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;

