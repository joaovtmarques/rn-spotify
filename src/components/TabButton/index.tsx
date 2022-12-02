import { SvgProps } from 'react-native-svg';
import { TouchableOpacity, View } from 'react-native';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';

interface itemProps extends BottomTabBarButtonProps {
  item: {
    route: string;
    icon: React.FC<SvgProps>;
    filledIcon: React.FC<SvgProps>;
    component: () => JSX.Element;
  };
}

export function TabButton(props: itemProps) {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState?.selected;

  const Icon = item;

  return (
    <View className="ml-8 mr-8 justify-start">
      <View
        className={`h-1 w-full mb-5 ${
          focused ? 'bg-primaryGreen' : ''
        } rounded-br-[3.5px] rounded-bl-[3.5px]`}
      />
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.5}
        className={`${
          focused && item.route === 'profile' ? 'py-[2px] px-1' : ''
        }`}
      >
        {focused ? <Icon.filledIcon /> : <Icon.icon />}
      </TouchableOpacity>
    </View>
  );
}
