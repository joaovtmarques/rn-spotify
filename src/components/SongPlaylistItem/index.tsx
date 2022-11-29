import { Text, TouchableOpacity, View } from 'react-native';
import { ButtonWithIcon } from '../ButtonWithIcon';

import HeartIcon from '../../assets/icons/heart-grey-icon.svg';
import playIcon from '../../assets/icons/play-icon.svg';

export function SongPlaylistItem() {
  return (
    <TouchableOpacity className="flex-row items-center justify-between mt-6">
      <View className="flex-row items-center">
        <ButtonWithIcon
          icon={playIcon}
          styles="h-9 w-9 bg-[#2C2C2C] rounded-full items-center justify-center "
        />
        <View className="ml-6">
          <Text className="text-lightGrey text-base font-sBold">As It Was</Text>
          <Text className="text-xs text-primaryGrey font-sRegular">
            Harry Styles
          </Text>
        </View>
      </View>
      <View className="flex-row items-center">
        <View className="mr-12">
          <Text className="text-base text-primaryGrey font-sRegular">5:33</Text>
        </View>
        <ButtonWithIcon icon={HeartIcon} />
      </View>
    </TouchableOpacity>
  );
}
