import { ImageBackground, SafeAreaView, Text, View } from 'react-native';

import { Button } from '../../components';

import Logo from '../../assets/logo.svg';
import backgroundImg from '../../assets/get-started-background.png';

export function GetStarted() {
  return (
    <ImageBackground className="flex-1" source={backgroundImg}>
      <SafeAreaView className="flex-1 items-center justify-between m-7">
        <Logo />
        <View className="items-center w-full">
          <Text className="text-lightGrey text-center text-[25px] font-sBold mb-5">
            Enjoy listening to music
          </Text>
          <Text className="text-darkGrey text-center text-base font-sLight">
            {
              'Lorem ipsum dolor sit amet,\n consectetur adipiscing elit. Sagittis enim\n purus sed phasellus. Cursus ornare id\n scelerisque aliquam.'
            }
          </Text>
          <Button title="Get Started" />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
