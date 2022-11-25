import { ImageBackground, SafeAreaView, Text, View } from 'react-native';
import { useState } from 'react';

import { Button, ChooseModeButton } from '../../components';

import Logo from '../../assets/logo.svg';
import SunIcon from '../../assets/icons/sun-icon.svg';
import MoonIcon from '../../assets/icons/moon-icon.svg';
import backgroundImg from '../../assets/choose-mode-background.png';

export function ChooseMode() {
  const [mode, setMode] = useState('dark');

  return (
    <ImageBackground
      className="flex-1"
      source={backgroundImg}
      defaultSource={backgroundImg}
    >
      <SafeAreaView className="flex-1 items-center justify-between m-7">
        <Logo />
        <View className="items-center w-full">
          <Text className="text-lightGrey text-center text-[25px] font-sBold mb-8">
            ChooseMode
          </Text>
          <View className="w-full flex-row items-center justify-around mb-[68px]">
            <View className="items-center">
              <View className="h-[73px] w-[73px]">
                {mode === 'dark' && (
                  <View className="h-9 w-9 bg-secondaryGreen absolute rounded-full bottom-[-5px] self-center"></View>
                )}
                <ChooseModeButton
                  icon={MoonIcon}
                  onPress={() => setMode('dark')}
                />
              </View>
              <Text className="text-lg text-lightGrey text-center font-sBold mt-4">
                Dark Mode
              </Text>
            </View>
            <View className="items-center">
              <View className="h-[73px] w-[73px]">
                {mode === 'light' && (
                  <View className="h-9 w-9 bg-secondaryGreen absolute rounded-full bottom-[-5px] self-center"></View>
                )}
                <ChooseModeButton
                  icon={SunIcon}
                  onPress={() => setMode('light')}
                />
              </View>
              <Text className="text-lg text-lightGrey text-center font-sBold mt-4">
                Light Mode
              </Text>
            </View>
          </View>
          <Button title="Continue" />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
