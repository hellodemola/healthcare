import { configureStore } from '@reduxjs/toolkit';
import appointmentReducer from '../store/slices/appointments.slice';

export type TAppStore = ReturnType<typeof createTestStore>;

export function createTestStore(initialState = {}) {
  const store = configureStore({
    preloadedState: initialState,
    reducer: {
      appointment: appointmentReducer,
    },
  });
  return store;
}
