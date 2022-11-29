import { ImageBackground, Image, View, Text, TouchableOpacity } from 'react-native';

import backgroundImg from '../../assets/new-album-background.png';
import newAlbumImg from '../../assets/new-album-image.png';

export function NewAlbumCard() {
  return (
    <TouchableOpacity className="w-full h-[126px] mt-7">
      <ImageBackground source={backgroundImg} className="flex-1 flex-row justify-between px-5 pr-4" resizeMode='cover'>
        <View className='h-full py-5 justify-between'>
          <Text className='text-[10px] text-white font-sBold'>New Album</Text>
          <Text className='text-[20px] text-white font-sBold'>{'Happier Than\nEver'}</Text>
          <Text className='text-[13px] text-white font-sBold'>Billie Eilish</Text>
        </View>
        <View className='h-full w-36'>
          <Image source={newAlbumImg} className="w-full h-full" resizeMode='contain'/>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}
