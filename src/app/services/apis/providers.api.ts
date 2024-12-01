import apiInstance from '../apiInstance';
import { APPOINTMENTS_URL, GET_PROVIDERS_URL } from '../../helpers/constant';
import { IAppointmentReq } from '@/app/interface/api.interface';

export const fetchProviders = () => apiInstance(GET_PROVIDERS_URL).then((res) => res.data);

export const postAppointments = (data: IAppointmentReq) => apiInstance.post(APPOINTMENTS_URL, data);

export const fetchAppointment = () => apiInstance(APPOINTMENTS_URL).then((res) => res.data)
