import apiInstance from '../apiInstance';
import { APPOINTMENTS_URL, PROVIDERS_URL } from '../../helpers/constant';
import { IAppointmentReq } from '@/app/interface/api.interface';

export const fetchProviders = () => apiInstance(PROVIDERS_URL).then((res) => res.data);

export const postAppointments = (data: IAppointmentReq) => apiInstance.post(APPOINTMENTS_URL, data);

export const fetchAppointment = () => apiInstance(APPOINTMENTS_URL).then((res) => res.data);
