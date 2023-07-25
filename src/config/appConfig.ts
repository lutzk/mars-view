import { API_BASE_URL, USE_REACTROTRON } from '@env';
const appConfig = {
  apiBaseUrl: API_BASE_URL,
  useReactotron: __DEV__ && USE_REACTROTRON === 'true',
} as const;

export { appConfig };
