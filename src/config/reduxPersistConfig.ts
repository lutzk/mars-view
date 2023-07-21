import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  debug: __DEV__,
  storage: AsyncStorage,
  whitelist: ['rovers'],
};

export { persistConfig };
