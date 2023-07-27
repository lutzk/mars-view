import React, { FC } from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
// workaround for https://github.com/rt2zz/redux-persist/issues/1166
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { persistReducer as _persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { persistor, store } from '@store/store';
import { Colors } from '@styleguide/Colors';

type AppProviderProps = {
  children?: React.ReactNode;
};

const appTheme = {
  ...DefaultTheme,
  colors: {
    primary: 'rgb(216, 67, 21)',
    background: 'rgb(255, 240, 235)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

const AppProviders: FC<AppProviderProps> = ({ children }) => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate
          loading={
            <View>
              <Text>___load persist data____</Text>
            </View>
          }
          persistor={persistor}>
          <NavigationContainer theme={appTheme}>
            <SafeAreaView style={{ flex: 1 }}>
              <StatusBar
                barStyle={'dark-content'}
                backgroundColor={Colors.appMain}
              />

              {children}
            </SafeAreaView>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
};

export default AppProviders;
