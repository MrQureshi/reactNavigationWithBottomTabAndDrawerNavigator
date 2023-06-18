import React from "react";
import { NavigationContainer } from '@react-navigation/native';

import BottomTabs from './src/navigation/BottomTabs' 
import DrawerNav from './src/navigation/DrawerNav'
import MainStackNav from './src/navigation/MainStacks';

const App = () => {
  return (
    <NavigationContainer>
      {/* <BottomTabs /> */}
      <DrawerNav />
      {/* <MainStackNav /> */}
    </NavigationContainer>
  );
}
export default App