import { Image, Text, TouchableOpacity, View } from 'react-native';

import moreIcon from '../../assets/icons/more-icon-h.svg';
import songImg from '../../assets/profile-song-image.png';
import { ButtonWithIcon } from '../ButtonWithIcon';

export function ProfileSongItem() {
  return (
    <TouchableOpacity className="w-full flex-row items-center justify-between mt-2">
      <View className="flex-row items-center mr-8">
        <Image
          source={songImg}
          className="h-14 w-14 rounded-2xl"
          resizeMode="cover"
        />
        <View className="pl-5">
          <Text className="text-base text-lightGrey font-sBold">
            Super Freaky Girl
          </Text>
          <Text className="text-xs text-lightGrey font-sRegular">
            Nicky Minaj
          </Text>
        </View>
      </View>
      <View className="flex-1 flex-row items-center justify-between">
        <Text className="text-[15px] text-lightGrey font-sRegular">5:33</Text>
        <ButtonWithIcon icon={moreIcon} />
      </View>
    </TouchableOpacity>
  );
}
