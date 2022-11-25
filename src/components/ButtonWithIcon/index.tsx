import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { SvgProps } from 'react-native-svg';

interface ButtonWithIconProps {
  style?: string;
  icon: React.FC<SvgProps>;
}

interface ButtonProps extends TouchableOpacityProps {
  props: ButtonWithIconProps;
}

export function ButtonWithIcon({ props, ...rest }: ButtonProps) {
  const Icon = props.icon;

  return (
    <TouchableOpacity {...rest} className={props.style}>
      <Icon />
    </TouchableOpacity>
  );
}
