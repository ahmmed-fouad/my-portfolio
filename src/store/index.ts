import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from './slices/projectsSlice';
import themeReducer from './slices/themeSlice';
import contactReducer from './slices/contactSlice';

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    theme: themeReducer,
    contact: contactReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 

