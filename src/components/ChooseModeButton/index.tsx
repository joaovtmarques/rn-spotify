import { TouchableHighlight, TouchableHighlightProps } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { BlurView } from 'expo-blur';

interface ChooseModeButtonProps extends TouchableHighlightProps {
  icon: React.FC<SvgProps>;
}

export function ChooseModeButton({ icon, ...rest }: ChooseModeButtonProps) {
  const Icon = icon;

  return (
    <TouchableHighlight
      {...rest}
      className="flex-1 rounded-full overflow-hidden"
    >
      <BlurView
        className="h-full w-full bg-black/50 items-center justify-center"
        intensity={40}
      >
        <Icon />
      </BlurView>
    </TouchableHighlight>
  );
}
