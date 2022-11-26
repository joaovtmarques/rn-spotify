import { SafeAreaView, View, ImageBackground, Text } from 'react-native';

import { Button, ButtonWithIcon } from '../../components';

import Logo from '../../assets/logo.svg';
import LeftArrowIcon from '../../assets/icons/left-arrow-icon.svg';

import backgroundImg from '../../assets/register-background.png';

export function RegisterOrSignIn() {
  return (
    <ImageBackground className="flex-1 bg-primary" source={backgroundImg}>
      <SafeAreaView className="flex-1 m-7">
        <View>
          <ButtonWithIcon
            icon={LeftArrowIcon}
            styles="h-8 w-8 rounded-full bg-white/[0.03] items-center justify-center"
          />
        </View>
        <View className="flex-1 items-center">
          <View className="mt-28">
            <Logo />
          </View>
          <View className="items-center w-full mt-14">
            <Text className="text-lightGrey text-center text-[25px] font-sBold mb-5">
              Enjoy listening to music
            </Text>
            <Text className="text-darkGrey text-center text-base font-sLight">
              {
                'Spotify is a proprietary Swedish audio\nstreaming and media services provider '
              }
            </Text>
          </View>
          <View className="w-full flex-row items-center justify-between mt-8">
            <Button
              title="Register"
              styles={{
                sTitle: 'text-lightGrey text-center text-[19px] font-sBold',
                sButton:
                  'h-[73px] w-[147px] bg-primaryGreen rounded-[30px] items-center justify-center',
              }}
            />
            <Button
              title="Sign In"
              styles={{
                sTitle: 'text-lightGrey text-center text-[19px] font-sBold',
                sButton: 'h-[73px] w-[147px] items-center justify-center',
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
