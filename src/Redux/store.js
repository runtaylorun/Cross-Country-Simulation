import { createStore } from 'redux';
import { root as rootReducer } from './Reducers/root';

export const store = createStore(rootReducer);
