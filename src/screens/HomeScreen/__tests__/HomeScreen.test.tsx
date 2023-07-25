import 'react-native';
import React from 'react';

// Note: import explicitly to use the types shiped with jest.
import { xit, expect } from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import { HomeScreen } from '../HomeScreen';

/**
 * https://github.com/react-navigation/react-navigation/issues/10943
 */

const sleep = (ms: number) =>
  new Promise(resolve => setTimeout(() => resolve(true), ms));

xit('renders correctly', async () => {
  const app = renderer.create(<HomeScreen />).toJSON();
  expect(app).toMatchSnapshot();
  await sleep(10);
});
