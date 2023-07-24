import axios from 'axios';
import { RoverNames } from '@store/features/rovers/roverSlice';

const apiBaseUrl = 'https://api.nasa.gov/mars-photos/api/v1/';
const roverManifestUrl = 'manifests/';
const API_KEY = 'DEMO_KEY';

const axiosClient = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

type MissionStatus = 'complete' | 'running';

export type RoverManifest = {
  landing_date: string;
  launch_date: string;
  status: MissionStatus;
  max_sol: number;
  max_date: string;
  total_photos: number;
  name: RoverNames;
  photos?: Array<{
    sol: number;
    earth_date: string;
    total_photos: number;
  }>;
};
export type RoverManifestResponse = {
  photo_manifest: RoverManifest;
};
const roverAPI = {
  fetchRoverManifestByName: (roverName: RoverNames) =>
    axiosClient.get<RoverManifestResponse>(`${roverManifestUrl}${roverName}`, {
      params: { api_key: API_KEY },
    }),
};

axiosClient;

export { roverAPI };
