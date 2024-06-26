import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const CustomButton = ({
  title,
  handlePress,
  containerStyle,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyle} ${
        isLoading ? 'opacity-50' : ''
      }`}
      disabled={isLoading}
      onPress={handlePress}
      activeOpacity={0.5}
    >
      <Text className={`text-primary text-lg font-semibold ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
