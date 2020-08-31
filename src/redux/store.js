// import {
//   configureStore,
//   combineReducers,
//   getDefaultMiddleware,
// } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { authSlice } from './auth/authReducer';

// const persistConfig = {
//   key: 'root',
//   storage,
//   // whitelist: ['access_token', 'userName'],
// };

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
//   logger,
// ];

// const rootReducer = combineReducers({
//   [authSlice.name]: authSlice.reducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware,
//   // middleware: [...getDefaultMiddleware({ serializableCheck: false })]
// });

// export const persistor = persistStore(store);

import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
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
import storage from 'redux-persist/lib/storage';
import { authSlice } from './auth/authReducer';
const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ['auth.access_token', 'userName'],
};
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];
const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware,
  // middleware: [...getDefaultMiddleware({ serializableCheck: false })]
});
export const persistor = persistStore(store);
