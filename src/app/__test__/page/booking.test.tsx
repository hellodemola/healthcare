import Wrapper from '@/app/helpers/test.wrapper';
import { createTestStore, TAppStore } from '@/app/helpers/testStore';
import Home from '@/app/page';
import { act, render, screen, waitFor } from '@testing-library/react';
import { afterAll, afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { setupServer } from 'msw/node';
import { failedMockProvidersApi, mockProvidersApi } from '@/app/helpers/mocks/fetch.mocks';

const server = setupServer(...mockProvidersApi);
const failedInstance = setupServer(...failedMockProvidersApi);
let store: TAppStore;

// Mock the router
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
    pathname: '/', // Mocked current route
  }),
}));

describe('SET_APPOINTMENTS', () => {
  beforeEach(() => {
    store = createTestStore();
    server.listen();
  });

  afterEach(() => {
    server.close();
  });

  afterAll(() => server.close());

  test('DISPLAY_LOADING_STATE_WHEN_FETCHING_DATA', () => {
    render(
      <Wrapper store={store}>
        <Home />
      </Wrapper>
    );
    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });

  test('DISPLAY_PAGE_STATE_WHEN_FETCHED_DATA', async () => {
    await act(async () => {
      render(
        <Wrapper store={store}>
          <Home />
        </Wrapper>
      );
    });
    await waitFor(() => {
      expect(screen.getByTestId('data')).toBeInTheDocument();
    });
  });
});

describe('TEST_NETWORK_ERROR', () => {
  beforeEach(() => {
    store = createTestStore();
    failedInstance.listen();
  });

  afterEach(() => {
    failedInstance.close();
  });
  test('DISPLAY_ERROR_STATE_WHEN_FETCHED_DATA', async () => {
    await act(async () => {
      render(
        <Wrapper store={store}>
          <Home />
        </Wrapper>
      );
    });
    await waitFor(() => {
      screen.debug();
      expect(screen.getByText('Something went wrong!')).toBeInTheDocument();
    });
  });
});
