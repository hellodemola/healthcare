import { useQuery } from 'react-query';
import { fetchAppointment, fetchProviders } from '../apis/providers.api';

export const useGetProviders = () => useQuery(['PROVIDERS'], fetchProviders);

export const useGetAppointments = () => useQuery(['APPOINTMENT'], fetchAppointment);
