import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import RoverSlice from './features/rovers/roverSlice';
import Reactotron from '@config/reactotronConfig';
import { persistConfig } from '@config/reduxPersistConfig';
import { appConfig } from '@config/appConfig';

const rootReducer = combineReducers({
  rovers: RoverSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const reactotronEnhancer = appConfig.useReactotron
  ? // @ts-ignore fix possible undef
    [Reactotron().createEnhancer()]
  : [];

const store = configureStore({
  reducer: persistedReducer,

  enhancers: reactotronEnhancer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export { store, persistor };
