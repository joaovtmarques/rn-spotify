import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import {
  AccessibilityState,
  GestureResponderEvent,
  TouchableOpacity,
} from 'react-native';
import { SvgProps } from 'react-native-svg';

interface itemProps extends BottomTabBarButtonProps {
  item: {
    route: string;
    icon: React.FC<SvgProps>;
    filledIcon: React.FC<SvgProps>;
    component: () => JSX.Element;
  };
  onPress?:
  | ((
    e:
    | React.MouseEvent<HTMLAnchorElement, MouseEvent>
    | GestureResponderEvent
  ) => void)
  | undefined;
  accessibilityState?: AccessibilityState | undefined;
}

export function TabButton(props: itemProps) {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState?.selected;

  const Icon = item;

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      className={`ml-8 mr-8 w-8 items-center justify-center ${focused ? 'border-t-4 border-primaryGreen border-spacing-5 rounded-[3.5px]' : ''}`}
    >
      {focused ? <Icon.filledIcon /> : <Icon.icon />}
    </TouchableOpacity>
  );
}
