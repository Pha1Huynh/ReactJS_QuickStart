import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import rootReducer from './store/reducers/rootReducer';
import { configureStore } from '@reduxjs/toolkit';
const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({ reducer: persistedReducer });
let persistor = persistStore(store);
export { store, persistor };
