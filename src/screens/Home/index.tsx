import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';

import {
  ButtonWithIcon,
  Heading,
  NewAlbumCard,
  SongCard,
  SongPlaylistItem,
} from '../../components';

import Logo from '../../assets/logo.svg';
import MoreIcon from '../../assets/icons/more-icon.svg';
import SearchIcon from '../../assets/icons/search-icon.svg';

interface ItemMenuProps {
  title: string;
  text?: string;
  bottom?: boolean;
}

export function Home() {
  const ItemMenu = ({ title, text, bottom }: ItemMenuProps) => {
    return (
      <TouchableOpacity className="items-center mr-12">
        <Text className={`${text ?? 'text-darkGrey'} text-xl font-sBold pb-1`}>
          {title}
        </Text>
        {bottom && <View className="w-7 h-1 bg-primaryGreen rounded-b-xl" />}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <View className="w-full px-7 py-4">
        <Heading>
          <ButtonWithIcon icon={SearchIcon} styles="" />
          <Logo height={33} width={108} />
          <ButtonWithIcon icon={MoreIcon} styles="" />
        </Heading>
      </View>
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 28 }}
      >
        <View className="px-7">
          <NewAlbumCard />
        </View>
        <View>
          <ScrollView
            horizontal
            className="w-full mt-10 pb-4 px-7"
            contentContainerStyle={{
              width: '100%',
              height: '100%',
              justifyContent: 'space-between',
            }}
          >
            <ItemMenu title="News" text="text-lightGrey" bottom />
            <ItemMenu title="Video" />
            <ItemMenu title="Artists" />
            <ItemMenu title="Podcasts" />
          </ScrollView>
        </View>
        <View className="pt-3 pl-7">
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <SongCard />
            <SongCard />
            <SongCard />
            <SongCard />
          </ScrollView>
        </View>
        <View className="w-full mt-9 px-7">
          <View className="flex-row items-center justify-between">
            <Text className="text-lightGrey text-xl font-sBold">Playlist</Text>
            <TouchableOpacity>
              <Text className="text-xs text-primaryGrey font-sRegular">
                See More
              </Text>
            </TouchableOpacity>
          </View>
          <SongPlaylistItem />
          <SongPlaylistItem />
          <SongPlaylistItem />
          <SongPlaylistItem />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
