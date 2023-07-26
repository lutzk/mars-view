import 'react-native';
import React from 'react';

// Note: import explicitly to use the types shiped with jest.
import { it, expect } from '@jest/globals';

// Note: test renderer must be required after react-native.
import { render, screen } from '@testing-library/react-native';

// imported to fix extendedmatchers types
import '@testing-library/jest-native/';

import { RoverCard } from '../Rovercard';
import { MissionStatus } from '@api/roverApi';
import { RoverNames } from '@store/features/rovers/roverSlice';

/**
 * https://github.com/react-navigation/react-navigation/issues/10943
 */

const MANIFEST_MOCK = {
  name: RoverNames.Spirit,
  status: 'complete' as MissionStatus,
  landing_date: '2004-01-04',
  launch_date: '2003-06-10',
  max_sol: 2208,
  max_date: '2010-03-21',
  total_photos: 124550,
  wikiUrl: 'https://en.wikipedia.org/wiki/Spirit_(rover)',
};

it('renders correctly', () => {
  const app = render(<RoverCard manifest={MANIFEST_MOCK} />).toJSON();
  const headline = screen.queryByTestId('cardHeader');
  const wikiLink = screen.queryByText(`${RoverNames.Spirit} on wikipedia`);
  expect(headline).toBeOnTheScreen();
  expect(headline).toHaveTextContent(RoverNames.Spirit);
  expect(wikiLink).toBeOnTheScreen();
  expect(app).toMatchSnapshot();
});
