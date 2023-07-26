import 'react-native';
import React from 'react';

// Note: import explicitly to use the types shiped with jest.
import { it, expect } from '@jest/globals';

// Note: test renderer must be required after react-native.
import { render } from '@testing-library/react-native';

import { HomeScreen } from '../HomeScreen';
import { Provider } from 'react-redux';
import { mockStore } from '@store/mockStore';

it('renders correctly', () => {
  const app = render(
    <Provider store={mockStore}>
      <HomeScreen />
    </Provider>,
  ).toJSON();

  expect(app).toMatchSnapshot();
});
