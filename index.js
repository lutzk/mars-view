if (__DEV__ && !appConfig.USE_REACTROTRON) {
  void import('./src/config/reactotronConfig').then(() =>
    console.log('Reactotron Configured'),
  );
}

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import { appConfig } from '@config/appConfig';

AppRegistry.registerComponent(appName, () => App);
