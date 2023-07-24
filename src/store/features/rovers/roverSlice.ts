import { RoverManifest, roverAPI } from '@api/roverApi';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

enum RoverNames {
  Curiosity = 'curiosity',
  Opportunity = 'opportunity',
  Spirit = 'spirit',
}

const WikiUrls = {
  [RoverNames.Spirit]: 'https://en.wikipedia.org/wiki/Spirit_(rover)',
  [RoverNames.Curiosity]: 'https://en.wikipedia.org/wiki/Curiosity_(rover)',
  [RoverNames.Opportunity]: 'https://en.wikipedia.org/wiki/Opportunity_(rover)',
};

type RoverManifests = {
  [key in RoverNames]?: RoverManifest;
};

export interface RoverState {
  rovers: Array<unknown>;
  roversManifests: RoverManifests;
}

const fetchRoverManifestByName = createAsyncThunk(
  'rovers/fetchByName',
  async (roverName: RoverNames, _thunkAPI) => {
    const response = await roverAPI.fetchRoverManifestByName(roverName);
    return response.data;
  },
);

const initialState: RoverState = {
  rovers: [RoverNames.Curiosity, RoverNames.Opportunity, RoverNames.Spirit],
  roversManifests: {},
};

export const RoverSlice = createSlice({
  name: 'Rovers',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchRoverManifestByName.fulfilled, (state, action) => {
      const {
        name,
        status,
        landing_date,
        launch_date,
        max_date,
        max_sol,
        total_photos,
      } = action.payload.photo_manifest;
      state.roversManifests[action.meta.arg] = {
        name,
        status,
        landing_date,
        launch_date,
        max_sol,
        max_date,
        total_photos,
        wikiUrl: WikiUrls[action.meta.arg],
      };
    });
  },
});

// Action creators are generated for each case reducer function
// const { loadRoverInfo } = RoverSlice.actions;
export { RoverNames, fetchRoverManifestByName };
export default RoverSlice.reducer;
