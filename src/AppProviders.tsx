import React, { FC } from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
// workaround for https://github.com/rt2zz/redux-persist/issues/1166
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { persistReducer as _persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { persistor, store } from '@store/store';

type AppProviderProps = {
  children?: React.ReactNode;
};
const AppProviders: FC<AppProviderProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={
          <View>
            <Text>___load persist data____</Text>
          </View>
        }
        persistor={persistor}>
        <NavigationContainer>
          <SafeAreaView style={{ flex: 1 }}>
            <StatusBar
            // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            // backgroundColor={backgroundStyle.backgroundColor}
            />

            {children}
          </SafeAreaView>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default AppProviders;
