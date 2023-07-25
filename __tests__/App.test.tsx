import 'react-native';
import React from 'react';
import App from '../src/App';

// Note: import explicitly to use the types shiped with jest.
import { it, expect } from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const sleep = (ms: number) =>
  new Promise(resolve => setTimeout(() => resolve(true), ms));

it('renders correctly', async () => {
  const app = renderer.create(<App />).toJSON();
  expect(app).toMatchSnapshot();
  await sleep(10);
});
