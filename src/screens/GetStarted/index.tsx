import {
  View,
  SafeAreaView,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';

import backgroundImg from '../../assets/get-started-background.png';
import Logo from '../../assets/logo.svg';

export function GetStarted() {
  return (
    <ImageBackground
      className="flex-1"
      source={backgroundImg}
      defaultSource={backgroundImg}
    >
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
          <TouchableOpacity className="h-[92px] w-full bg-primaryGreen rounded-[30px] items-center justify-center mt-9">
            <Text className="text-lightGrey text-center text-[22px] font-sBold">
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
