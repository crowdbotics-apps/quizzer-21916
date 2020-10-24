import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile159966Navigator from '../features/UserProfile159966/navigator';
import Settings159930Navigator from '../features/Settings159930/navigator';
import Settings159911Navigator from '../features/Settings159911/navigator';
import Settings159873Navigator from '../features/Settings159873/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile159966: { screen: UserProfile159966Navigator },
Settings159930: { screen: Settings159930Navigator },
Settings159911: { screen: Settings159911Navigator },
Settings159873: { screen: Settings159873Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
