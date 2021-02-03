import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial200234Navigator from '../features/Tutorial200234/navigator';
import NotificationList200206Navigator from '../features/NotificationList200206/navigator';
import Settings200205Navigator from '../features/Settings200205/navigator';
import Settings200197Navigator from '../features/Settings200197/navigator';
import UserProfile200195Navigator from '../features/UserProfile200195/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial200234: { screen: Tutorial200234Navigator },
NotificationList200206: { screen: NotificationList200206Navigator },
Settings200205: { screen: Settings200205Navigator },
Settings200197: { screen: Settings200197Navigator },
UserProfile200195: { screen: UserProfile200195Navigator },

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
