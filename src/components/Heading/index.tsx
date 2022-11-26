import { View } from 'react-native';

interface HeadingProps {
  children: React.ReactNode;
}

export function Heading({ children }: HeadingProps) {
  return (
    <View className="w-full flex-row items-center justify-between">
      {children}
    </View>
  );
}
