import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import Home  from '../screens/Home'
import Feed  from '../screens/Feed'
import Article from '../screens/Article'
import DrawerNav from './DrawerNav'

const Stack = createStackNavigator();

const  MainStackNav = () => {

  return (
    <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown:false
    }}
    >
      <Stack.Screen name="Home" component={DrawerNav} />
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="Article" component={Article} />
    </Stack.Navigator>
  )
}

export default MainStackNav;