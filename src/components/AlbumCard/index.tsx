import { Image, Text, TouchableOpacity } from 'react-native';

import albumImg from '../../assets/song-card-image.png';

export function AlbumCard() {
  return (
    <TouchableOpacity className="mr-4">
      <Image
        source={albumImg}
        className="h-36 w-36 rounded-3xl"
        resizeMode="cover"
      />
      <Text className="text-primaryGrey text-[13px] font-sBold mt-4 pl-5">
        Album
      </Text>
    </TouchableOpacity>
  );
}
