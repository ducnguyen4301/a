import {BottomTab} from '../screens';
function createEnum<T extends {[P in keyof T]: P}>(o: T) {
  return o;
}
export const bottomTabScreens = [
  {component: BottomTab.Home, name: 'Home'},
  {component: BottomTab.Sale, name: 'Sale'},
  {component: BottomTab.Account, name: 'Account'},
];

export const ROUTE_KEY = createEnum({
  BottomTab: 'BottomTab',
  Splash: 'Splash',
  Login: 'Login',
  Home: 'Home',
  Sale: 'Sale',
  Account: 'Account',
});
