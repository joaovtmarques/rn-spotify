import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { TabArr } from '../utils/tabArray';

import { TabButton } from '../components';

const Tabs = createBottomTabNavigator();

export function Tab() {
  return (
    <>
      <Tabs.Navigator
        initialRouteName="home"
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            borderTopWidth: 0,
            height: 90,
            width: '100%',
            paddingBottom: 0,
            paddingHorizontal: 30,
            backgroundColor: '#343434',
            alignItems: 'center',
            justifyContent: 'space-between',
            elevation: 0,
          },
        }}
      >
        {TabArr.map((item, index) => {
          return (
            <Tabs.Screen
              key={index}
              name={item.route}
              component={item.component}
              options={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarButton: (props) => <TabButton {...props} item={item} />,
              }}
            />
          );
        })}
      </Tabs.Navigator>
    </>
  );
}
