import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ShopScreen from '../screens/ShopScreen';
import WishlistScreen from '../screens/WishlistScreen';
import CartScreen from '../screens/CartScreen';
import SupportScreen from '../screens/SupportScreen';

// Import SVG icons
import HomeIcon from '../assets/icons/home.svg';
import ShopIcon from '../assets/icons/shop.svg';
import WishlistIcon from '../assets/icons/wishlist.svg';
import CartIcon from '../assets/icons/cart.svg';
import SupportIcon from '../assets/icons/support.svg';

import { SvgProps } from 'react-native-svg';
import appsFlyer from 'react-native-appsflyer'; // Import AppsFlyer SDK

const Tab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let IconComponent: React.FC<SvgProps>;

          switch (route.name) {
            case 'Home':
              IconComponent = HomeIcon;
              break;
            case 'Shop':
              IconComponent = ShopIcon;
              break;
            case 'Wishlist':
              IconComponent = WishlistIcon;
              break;
            case 'Cart':
              IconComponent = CartIcon;
              break;
            case 'Support':
              IconComponent = SupportIcon;
              break;
            default:
              throw new Error(`Unknown route name: ${route.name}`);
          }

          return (
            <IconComponent
              width={size}
              height={size}
              fill={focused ? color : 'gray'}
            />
          );
        },
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: 'gray',
      })}
      screenListeners={{
        state: async (e) => {
          const state = e.data.state;

          if (state) {
            const currentTabIndex = state.index;
            const currentTab = state.routeNames[currentTabIndex];
            const previousTab = state.routes[state.index - 1]?.name || 'Unknown';

            
            // Log the in-app navigation event to AppsFlyer
            appsFlyer.logEvent(
              'app_navigation_with_bug_sample',
              {
                source: previousTab,
                destination: currentTab
              },
              (res) => {
                console.log(res);
                console.log(`AppsFlyer in-app event logged: source '${previousTab}',destination '${currentTab}'`);
              },
              (err) => {
                console.error(err);
              }
            );
          }
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Shop" component={ShopScreen} />
      <Tab.Screen name="Wishlist" component={WishlistScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Support" component={SupportScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
