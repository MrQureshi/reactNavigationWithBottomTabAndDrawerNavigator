
import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home'
import Feed from '../screens/Feed'
import Article from '../screens/Article'
import DrawerNav from './DrawerNav'


const Tab = createBottomTabNavigator();

const BottomTabs = () =>  {
  return (
    <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{
        headerShown:false
    }}
    >
       <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Article" component={Article} />
    </Tab.Navigator>
  );
}

export default BottomTabs;
