import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={0.75}
      className="h-[92px] w-full bg-primaryGreen rounded-[30px] items-center justify-center mt-9"
    >
      <Text className="text-lightGrey text-center text-[22px] font-sBold">
        {title}
      </Text>
    </TouchableOpacity>
  );
}
