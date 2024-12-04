import { http, HttpResponse } from 'msw';
import providers from '../mockData.json';
import { PROVIDERS_URL } from '../constant';

export const mockProvidersApi = [
  http.get(PROVIDERS_URL, () => {
    return HttpResponse.json(providers);
  }),
];

export const failedMockProvidersApi = [
  http.get(PROVIDERS_URL, () => {
    return HttpResponse.error();
  }),
];
