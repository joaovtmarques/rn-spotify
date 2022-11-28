import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';

import satoshiBold from './src/assets/fonts/Satoshi-Bold.otf';
import satoshiLight from './src/assets/fonts/Satoshi-Light.otf';
import satoshiRegular from './src/assets/fonts/Satoshi-Regular.otf';
import { Loading } from './src/screens';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Satoshi-Bold': satoshiBold,
    'Satoshi-Light': satoshiLight,
    'Satoshi-Regular': satoshiRegular,
  });

  return (
    <>
      <StatusBar hidden />
      {!fontsLoaded ? <Loading /> : <Routes />}
    </>
  );
}
