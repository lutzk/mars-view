import Reactotron from 'reactotron-react-native';
import { Reactotron as ReactotronCoreClient } from 'reactotron-core-client';
import { reactotronRedux } from 'reactotron-redux';

import { ReactotronReactNative } from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { appConfig } from './appConfig';

const reactotron = () => {
  // console.log('appConfig.useReactotron', appConfig.useReactotron);
  Reactotron.configure({ name: 'MarsView' }).setAsyncStorageHandler!(
    AsyncStorage,
  )
    .use(reactotronRedux())
    .useReactNative()
    .connect();

  console.tron = Reactotron;
  return Reactotron;
};

declare global {
  interface Console {
    tron: ReactotronCoreClient<ReactotronReactNative> & ReactotronReactNative;
  }
}

export default reactotron;
