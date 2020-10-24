import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile160006Navigator from '../features/UserProfile160006/navigator';
import Tutorial160005Navigator from '../features/Tutorial160005/navigator';
import NotificationList159977Navigator from '../features/NotificationList159977/navigator';
import Settings159976Navigator from '../features/Settings159976/navigator';
import Settings159968Navigator from '../features/Settings159968/navigator';
import UserProfile159966Navigator from '../features/UserProfile159966/navigator';
import Settings159930Navigator from '../features/Settings159930/navigator';
import Settings159911Navigator from '../features/Settings159911/navigator';
import Settings159873Navigator from '../features/Settings159873/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile160006: { screen: UserProfile160006Navigator },
Tutorial160005: { screen: Tutorial160005Navigator },
NotificationList159977: { screen: NotificationList159977Navigator },
Settings159976: { screen: Settings159976Navigator },
Settings159968: { screen: Settings159968Navigator },
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
