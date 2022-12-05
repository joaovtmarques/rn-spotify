import { Image, Text, TouchableOpacity, View } from 'react-native';

import { ButtonWithIcon } from '../ButtonWithIcon';

import PlayIcon from '../../assets/icons/play-icon.svg';

import songCardImg from '../../assets/song-card-image.png';

export function SongCard() {
  return (
    <TouchableOpacity className="h-64 w-[147px] mr-4">
      <View>
        <Image source={songCardImg} />
        <ButtonWithIcon
          icon={PlayIcon}
          styles="absolute right-3 bottom-[-10px] h-8 w-8 bg-[#2C2C2C] rounded-full items-center justify-center "
        />
      </View>
      <View className="pl-[10px] pt-5">
        <Text className="text-lightGrey text-base font-sBold">Bad Guy</Text>
        <Text className="text-lightGrey text-sm font-sRegular">
          Billie Eilish
        </Text>
      </View>
    </TouchableOpacity>
  );
}
