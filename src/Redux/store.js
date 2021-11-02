import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './slices/root';

export default configureStore({ reducer: rootReducer, devTools: true })
