'use client';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';

export interface ReduxProviderProps {
  children: ReactNode;
}

const ReduxProvider = ({ children }: ReduxProviderProps) => (
  <Provider store={store}>{children}</Provider>
);

export default ReduxProvider;
