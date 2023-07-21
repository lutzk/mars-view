import Reactotron from 'reactotron-react-native';
import { Reactotron as ReactotronCoreClient } from 'reactotron-core-client';
import { reactotronRedux } from 'reactotron-redux';

import { ReactotronReactNative } from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const reactotron = Reactotron.configure({ name: 'MarsView' })
  .setAsyncStorageHandler!(AsyncStorage)
  .use(reactotronRedux())
  .useReactNative()
  .connect();

declare global {
  interface Console {
    tron: ReactotronCoreClient<ReactotronReactNative> & ReactotronReactNative;
  }
}
console.tron = Reactotron;

export default reactotron;
