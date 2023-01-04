import rootReducer from './store/reducers/rootReducer';
import { configureStore } from '@reduxjs/toolkit';

// export const store = createStore(rootReducer, applyMiddleware(myMiddleware, thunk));
export const store = configureStore({ reducer: rootReducer });
