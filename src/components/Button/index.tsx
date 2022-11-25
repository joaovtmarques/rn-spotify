import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  styles?: {
    sTitle?: string;
    sButton?: string;
  };
}

export function Button({ title, styles, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={0.75}
      className={
        styles?.sButton ??
        'min-h-[92px] flex-1 bg-primaryGreen rounded-[30px] items-center justify-center mt-9'
      }
    >
      <Text
        className={
          styles?.sTitle ?? 'text-lightGrey text-center text-[22px] font-sBold'
        }
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
