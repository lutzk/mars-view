import React from 'react';
import { MainStack } from '@navigation/MainStack';
import AppProviders from './AppProviders';

const App = () => {
  return (
    <AppProviders>
      <MainStack />
    </AppProviders>
  );
};

export default App;
