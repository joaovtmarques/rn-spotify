import { createStackNavigator } from '@react-navigation/stack';

import {
  ChooseMode,
  GetStarted,
  Register,
  RegisterOrSignIn,
  SignIn,
  Song,
} from '../screens';
import { Tab } from './tab.routes';

export function AppRoutes() {
  const { Navigator, Screen } = createStackNavigator();

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
      <Screen name="song" component={Song} />
    </Navigator>
  );
}
