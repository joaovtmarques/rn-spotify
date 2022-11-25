import { View } from 'react-native';

import Logo from '../../assets/logo.svg';

export function Loading () {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Logo />
    </View>
  );
}
