import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { TAppStore } from './testStore';
// import configureStore from 'redux-mock-store';

interface IWrapper {
  children: ReactNode;
  store: TAppStore;
}

// const mockStore = configureStore([]);
// const store = mockStore({
//   // Mock the initial state of your Redux store
//   appointment: { appointments: [] },
// });
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const Wrapper = ({ children, store }: IWrapper) => (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <>{children}</>
    </QueryClientProvider>
  </Provider>
);

export default Wrapper;
