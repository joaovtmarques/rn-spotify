import { SvgProps } from 'react-native-svg';
import {
  View,
  TextInput,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';

interface InputProps extends TextInputProps {
  icon?: React.FC<SvgProps>;
  hide?: () => void;
}

export function Input({ icon, hide, ...rest }: InputProps) {
  const Icon = icon as React.FC<SvgProps>;

  return (
    <View
      className={`h-20 w-full flex-row border-[1px] border-darkGrey mb-4 rounded-[30px] ${
        icon ? 'items-center justify-between pr-7' : null
      }`}
    >
      <TextInput
        {...rest}
        className="flex-1 p-7 text-darkGrey font-sBold"
        placeholderTextColor="#5B5B5B"
      />
      {icon && (
        <TouchableOpacity onPress={hide}>
          <Icon />
        </TouchableOpacity>
      )}
    </View>
  );
}
