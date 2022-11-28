import { createStackNavigator } from '@react-navigation/stack';

import { Home, Favorites, Song, Profile, Register, SignIn, RegisterOrSignIn, GetStarted, ChooseMode } from '../screens';
import { Tab } from './tab.routes';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="tab"
    >
      <Screen name="getStarted" component={GetStarted} />
      <Screen name="chooseMode" component={ChooseMode} />
      <Screen name="registerOrSignIn" component={RegisterOrSignIn} />
      <Screen name="register" component={Register} />
      <Screen name="signIn" component={SignIn} />
      <Screen name="tab" component={Tab} />
    </Navigator>
  );
}
