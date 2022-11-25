import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

import { Loading, Home } from './src/screens';

import satoshiBold from './src/assets/fonts/Satoshi-Bold.otf';
import satoshiRegular from './src/assets/fonts/Satoshi-Regular.otf';

export default function App () {
  const [fontsLoaded] = useFonts({
    'Satoshi-Bold': satoshiBold,
    'Satoshi Regular': satoshiRegular
  });

  return (
    <>
      <StatusBar hidden />
      {!fontsLoaded ? <Loading /> : <Home />}
    </>
  );
}
