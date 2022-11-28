import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';

import { Button, ButtonWithIcon, Heading, Input } from '../../components';

import Logo from '../../assets/logo.svg';
import HideIcon from '../../assets/icons/hide-icon.svg';
import LeftArrowIcon from '../../assets/icons/left-arrow-icon.svg';
import GoogleIcon from '../../assets/icons/google-icon.svg';
import AppleIcon from '../../assets/icons/apple-icon.svg';

export function Register() {
  const [hide, setHide] = useState(true);

  return (
    <SafeAreaView className="flex-1 bg-primary ">
      <View className="flex-1 p-7">
        <Heading>
          <ButtonWithIcon
            icon={LeftArrowIcon}
            styles="h-8 w-8 rounded-full bg-white/[0.03] items-center justify-center"
          />
          <Logo height={33} width={108} />
          <View className="h-8 w-8" />
        </Heading>
        <View className="items-center">
          <Text className="text-primaryGrey text-center text-[30px] font-sBold mt-12 mb-5">
            Register
          </Text>
          <View className="flex-row items-center justify-center">
            <Text className="text-xs text-primaryGrey font-sLight">
              If you need any support
            </Text>
            <TouchableOpacity>
              <Text className="text-xs text-secondaryGreen font-sLight">
                {' '}
                Click Here
              </Text>
            </TouchableOpacity>
          </View>
          <View className="w-full mt-9">
            <Input placeholder="Full Name" />
            <Input placeholder="Enter Email" />
            <Input
              placeholder="Password"
              icon={HideIcon}
              hide={() => setHide(!hide)}
              secureTextEntry={hide}
            />
          </View>
          <View className="w-full">
            <Button
              title="Creat Account"
              styles={{
                sButton:
                  'h-[80px] w-full bg-primaryGreen rounded-[30px] items-center justify-center mt-6',
                sTitle: 'text-lightGrey text-center text-[20px] font-sBold',
              }}
            />
          </View>
          <View className="w-full flex-row items-center justify-between mt-5">
            <LinearGradient
              end={{ x: 1, y: 0 }}
              className="h-[1px] w-full max-w-[146px]"
              colors={['#5B5B5B', '#252525']}
            ></LinearGradient>
            <Text className="text-xs text-primaryGrey font-sLight">Or</Text>
            <LinearGradient
              end={{ x: 0, y: 1 }}
              className="h-[1px] w-full max-w-[146px]"
              colors={['#5B5B5B', '#252525']}
            ></LinearGradient>
          </View>
          <View className="w-1/2 flex-row items-center justify-around mt-11">
            <TouchableOpacity>
              <GoogleIcon />
            </TouchableOpacity>
            <TouchableOpacity>
              <AppleIcon />
            </TouchableOpacity>
          </View>
          <View className="w-full flex-row justify-center mt-14">
            <Text className="text-sm text-primaryGrey font-sBold">
              Do You Have An Account?
            </Text>
            <TouchableOpacity>
              <Text className="text-sm text-blue font-sBold"> Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
