import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Slider } from '@miblanchard/react-native-slider';

import { ButtonWithIcon, Heading } from '../../components';

import MoreIcon from '../../assets/icons/more-icon.svg';
import NextIcon from '../../assets/icons/next-icon.svg';
import PauseIcon from '../../assets/icons/pause-icon.svg';
import RepeatIcon from '../../assets/icons/repeat-icon.svg';
import LyricsIcon from '../../assets/icons/lyrics-icon.svg';
import ShuffleIcon from '../../assets/icons/shuffle-icon.svg';
import PreviousIcon from '../../assets/icons/previous-icon.svg';
import HeartIcon from '../../assets/icons/heart-outline-icon.svg';
import LeftArrowIcon from '../../assets/icons/left-arrow-icon.svg';

import songCardImg from '../../assets/song-banner.png';

export function Song() {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <View className="flex-1 p-7">
        <Heading>
          <ButtonWithIcon
            icon={LeftArrowIcon}
            styles="h-8 w-8 rounded-full bg-white/[0.03] items-center justify-center"
            onPress={() => navigation.goBack()}
            hitSlop={{ left: 50 }}
          />
          <Text className="text-lightGrey text-lg font-sBold">Now Playing</Text>
          <ButtonWithIcon icon={MoreIcon} hitSlop={{ right: 50 }} />
        </Heading>
        <Image
          source={songCardImg}
          resizeMode="cover"
          className="h-[350px] w-full mt-7 rounded-3xl"
        />
        <View className="mt-4">
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-lightGrey text-lg font-sBold">Bad Guy</Text>
              <Text className="text-lightGrey text-lg font-sRegular mt-1">
                Billie Eilish
              </Text>
            </View>
            <TouchableOpacity>
              <HeartIcon />
            </TouchableOpacity>
          </View>
          <Slider
            containerStyle={{ marginTop: 30 }}
            thumbStyle={{ height: 16, width: 16 }}
            thumbTintColor="#B7B7B7"
            trackStyle={{ width: '100%', height: 2 }}
            maximumTrackTintColor="rgba(136, 136, 136, 0.3)"
            minimumTrackTintColor="#B7B7B7"
          />
          <View className="w-full flex-row items-center justify-between">
            <Text className="text-secondaryGrey text-xs font-sBold">2:33</Text>
            <Text className="text-secondaryGrey text-xs font-sBold">4:02</Text>
          </View>
        </View>
        <View className="flex-row items-center justify-evenly mt-12">
          <ButtonWithIcon icon={RepeatIcon} />
          <View className="flex-row items-center justify-between">
            <ButtonWithIcon icon={PreviousIcon} />
            <ButtonWithIcon
              icon={PauseIcon}
              styles="h-[72px] w-[72px] items-center justify-center bg-primaryGreen rounded-full mx-4"
            />
            <ButtonWithIcon icon={NextIcon} />
          </View>
          <ButtonWithIcon icon={ShuffleIcon} />
        </View>
        <View className="items-center mt-8">
          <ButtonWithIcon icon={LyricsIcon} />
          <Text className="text-primaryGrey text-sm font-sBold">Lyrics</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
