import 'react-native';
import React from 'react';
import App from '../src/App';

// Note: import explicitly to use the types shiped with jest.
import { it, expect } from '@jest/globals';

// Note: test renderer must be required after react-native.
import { render } from '@testing-library/react-native';

/**
 * https://github.com/react-navigation/react-navigation/issues/10943
 */

it('renders correctly', () => {
  const app = render(<App />).toJSON();
  expect(app).toMatchSnapshot();
});
