import { useNavigation } from '@react-navigation/native';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';

import LeftArrowIcon from '../../assets/icons/left-arrow-icon.svg';
import MoreIcon from '../../assets/icons/more-icon.svg';
import backgroundImg from '../../assets/profile-background.png';
import profileImg from '../../assets/profile-image.jpg';
import { ButtonWithIcon, ProfileSongItem } from '../../components';

export function Profile() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-primary">
      <Image
        source={backgroundImg}
        className="w-full h-[350px] rounded-b-[70px]"
        resizeMode="cover"
      />
      <SafeAreaView className="h-full w-full absolute top-0">
        <View className="w-full flex-row items-center justify-between px-7">
          <ButtonWithIcon
            icon={LeftArrowIcon}
            styles="h-8 w-8 rounded-full bg-white/[0.03] items-center justify-center"
            onPress={() => navigation.goBack()}
            hitSlop={{ left: 50 }}
          />
          <Text className="text-lightGrey text-lg font-sBold text-center">
            Profile
          </Text>
          <ButtonWithIcon icon={MoreIcon} />
        </View>
        <View className="flex-1 px-7 pt-5 items-center">
          <Image source={profileImg} className="h-20 w-20 rounded-full" />
          <View className="mt-3">
            <Text className="text-lightGrey text-xs font-sRegular text-center">
              jvsilvam@outlook.com
            </Text>
            <Text className="text-white text-xl font-sBold text-center mt-2">
              Joãovitor
            </Text>
          </View>
          <View className="w-full flex-row justify-around mt-4">
            <View>
              <Text className="text-white text-xl font-sBold text-center mt-2">
                778
              </Text>
              <Text className="text-secondaryGrey text-sm font-sRegular text-center mt-2">
                Followes
              </Text>
            </View>
            <View>
              <Text className="text-white text-xl font-sBold text-center mt-2">
                243
              </Text>
              <Text className="text-secondaryGrey text-sm font-sRegular text-center mt-2">
                Followes
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1 pt-5 px-7"
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <View className="flex-1">
          <Text className="text-lightGrey text-[15px] font-sBold mb-2">
            PUBLIC PLAYLISTS
          </Text>
        </View>
        <ProfileSongItem />
        <ProfileSongItem />
        <ProfileSongItem />
        <ProfileSongItem />
        <ProfileSongItem />
        <ProfileSongItem />
        <ProfileSongItem />
        <ProfileSongItem />
        <ProfileSongItem />
      </ScrollView>
    </View>
  );
}
