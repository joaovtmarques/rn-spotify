import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { SvgProps } from 'react-native-svg';

interface ButtonWithIconProps extends TouchableOpacityProps {
  styles?: string;
  icon: React.FC<SvgProps>;
}

export function ButtonWithIcon({ styles, icon, ...rest }: ButtonWithIconProps) {
  const Icon = icon;

  return (
    <TouchableOpacity {...rest} className={styles}>
      <Icon />
    </TouchableOpacity>
  );
}
