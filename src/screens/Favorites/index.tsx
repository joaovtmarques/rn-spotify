import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  ImageSourcePropType,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { AlbumCard, ButtonWithIcon, SongPlaylistItem } from '../../components';

import MoreIcon from '../../assets/icons/more-icon.svg';
import LeftArrowIcon from '../../assets/icons/left-arrow-icon.svg';

import backgroundImg from '../../assets/song-card-image.png';

export function Favorites() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-primary">
      <Image
        source={backgroundImg as ImageSourcePropType}
        className="w-full h-60 rounded-b-[70px]"
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
          <ButtonWithIcon icon={MoreIcon} hitSlop={{ right: 50 }} />
        </View>
      </SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1 pt-3">
        <View className="flex-1 px-7">
          <Text className="text-primaryGrey text-center text-lg font-sBold">
            Billie Eilish
          </Text>
          <Text className="text-primaryGrey text-center text-[13px] font-sRegular mt-1">
            2 Album, 67 tracks
          </Text>
          <Text className="text-secondaryGrey text-center text-xs font-sRegular mt-2">
            {
              'Lorem ipsum dolor sit amet, consectetur\nadipiscing elit. Turpis adipiscing vestibulum orci\nenim, nascetur vitae'
            }
          </Text>
        </View>
        <View className="mt-1">
          <Text className="text-primaryGrey text-base font-sBold mb-4 px-7">
            Albums
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="pl-7"
          >
            <AlbumCard />
            <AlbumCard />
            <AlbumCard />
            <AlbumCard />
          </ScrollView>
        </View>
        <View className="mt-7 px-7">
          <Text className="text-primaryGrey text-base font-sBold mb-4">
            Songs
          </Text>
          <ScrollView showsVerticalScrollIndicator={false} className="pb-9">
            <SongPlaylistItem />
            <SongPlaylistItem />
            <SongPlaylistItem />
            <SongPlaylistItem />
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}
