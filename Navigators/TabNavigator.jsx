import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cart from '../Screens/Cart';
import Home from '../Screens/Home'
import Profile from '../Screens/Profile';
const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator
        screenOptions={{
            headerShown: false
          }}
    >
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
  );
}