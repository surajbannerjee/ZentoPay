import { Text } from 'react-native';
import React from 'react';

const CustomText = ({ children, numberOfLines, onPress, style, family = 'Montserrat-Regular' }) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={{
        fontFamily: family,
        ...style,
      }}
      onPress={onPress}
    >
      {children}
    </Text>
  );
};

export default CustomText;
