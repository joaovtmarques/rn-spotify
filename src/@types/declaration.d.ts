/// <reference types="nativewind/types" />

declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

declare module '*.otf' {
  import { FontSource } from 'expo-font';
  const value: FontSource;
  export default value;
}

declare module '*.png';

// declare module 'react-native-slider';
