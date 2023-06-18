import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home'
import Feed from '../screens/Feed'
import Article from '../screens/Article'
import BottomTabs from './BottomTabs';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator
    initialRouteName='Home'
    screenOptions={{
      headerShown:false
    }}
    >
      <Drawer.Screen name="Home" component={BottomTabs} />
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}

export default DrawerNav