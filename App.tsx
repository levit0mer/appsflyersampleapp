import React, { useEffect, useState, createContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';
import CartIcon from './src/components/CartIcon';
import ProfileIcon from './src/components/ProfileIcon';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import appsFlyer from 'react-native-appsflyer';

// Create a Context to Share SDK State
export const AppsFlyerContext = createContext({ initialized: false });

const App: React.FC = () => {
  const [isAppsFlyerInitialized, setAppsFlyerInitialized] = useState(false);

  useEffect(() => {
    const options = {
      isDebug: true,
      devKey: 'RMscjivqfqLG2jqKyckdoU',
      onInstallConversionDataListener: true,
      onDeepLinkListener: true,
      timeToWaitForATTUserAuthorization: 10,
      manualStart: false,
    };

    // Initialize AppsFlyer SDK
    appsFlyer.initSdk(
      options,
      (result) => {
        console.log('AppsFlyer SDK initialized:', result);
        setAppsFlyerInitialized(true); // Update state on success
      },
      (error) => {
        console.error('AppsFlyer SDK initialization error:', error);
      }
    );
  }, []);

  return (
    <AppsFlyerContext.Provider value={{ initialized: isAppsFlyerInitialized }}>
      <NavigationContainer>
        <View style={styles.topBar}>
          <ProfileIcon />
          <CartIcon itemCount={3} />
        </View>
        <BottomTabNavigator />
      </NavigationContainer>
    </AppsFlyerContext.Provider>
  );
};

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
});

export default App;
