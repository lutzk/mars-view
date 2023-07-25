import 'react-native';
import React from 'react';

// Note: import explicitly to use the types shiped with jest.
import { it, expect } from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { RoverCard } from '../Rovercard';
import { MissionStatus } from '@api/roverApi';
import { RoverNames } from '@store/features/rovers/roverSlice';

/**
 * https://github.com/react-navigation/react-navigation/issues/10943
 */

const sleep = (ms: number) =>
  new Promise(resolve => setTimeout(() => resolve(true), ms));

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
it('renders correctly', async () => {
  const app = renderer.create(<RoverCard manifest={MANIFEST_MOCK} />).toJSON();
  expect(app).toMatchSnapshot();
  await sleep(10);
});
