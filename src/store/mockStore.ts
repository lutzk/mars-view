import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { RootState } from './store';
import { RoverNames } from './features/rovers/roverSlice';
import { MissionStatus } from '@api/roverApi';

const middlewares = [thunk];
const createMockStore = configureMockStore<RootState>(middlewares);
const mockStore = createMockStore({
  _persist: {
    version: -1,
    rehydrated: true,
  },
  rovers: {
    rovers: [],
    roversManifests: {
      [RoverNames.Spirit]: {
        name: RoverNames.Spirit,
        status: 'complete' as MissionStatus,
        landing_date: '2004-01-04',
        launch_date: '2003-06-10',
        max_sol: 2208,
        max_date: '2010-03-21',
        total_photos: 124550,
        wikiUrl: 'https://en.wikipedia.org/wiki/Spirit_(rover)',
      },
      [RoverNames.Curiosity]: {
        name: RoverNames.Curiosity,
        status: 'active' as MissionStatus,
        landing_date: '2004-01-04',
        launch_date: '2003-06-10',
        max_sol: 2208,
        max_date: '2010-03-21',
        total_photos: 124550,
        wikiUrl: 'https://en.wikipedia.org/wiki/Curiosity_(rover)',
      },
      [RoverNames.Opportunity]: {
        name: RoverNames.Opportunity,
        status: 'complete' as MissionStatus,
        landing_date: '2004-01-04',
        launch_date: '2003-06-10',
        max_sol: 2208,
        max_date: '2010-03-21',
        total_photos: 124550,
        wikiUrl: 'https://en.wikipedia.org/wiki/Opportunity_(rover)',
      },
    },
  },
});

export { mockStore };
