import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers'; //combined reducers

// Persist configuration
const persistConfig = {
  key: 'root', 
  storage,    
  whitelist: ['user','project'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ['persist/PERSIST'], 
        },
      }),
  });

const persistor = persistStore(store);

export { store, persistor };
