import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Login,SignUp} from '../Screens/Auth'
import {Main} from '../Screens/Main'
import AllPro from '../Screens/AllPro';
import Card from '../Screens/Card';

import { NavigationContainer } from '@react-navigation/native';
const MyStack = createNativeStackNavigator();

export function Stack() {
  return (
    <NavigationContainer>
        <MyStack.Navigator
            screenOptions={{
                headerShown: false
              }}
        >
      <MyStack.Screen name="Login" component={Login} />
      <MyStack.Screen name="SignUp" component={SignUp} />
      <MyStack.Screen name="Main" component={Main} />
      <MyStack.Screen name="AllPro" component={AllPro} />
      <MyStack.Screen name="Card" component={Card} />
    </MyStack.Navigator>
    </NavigationContainer>
    );
}