import { useMutation } from 'react-query';
import { postAppointments } from '../apis/providers.api';
import { IAppointmentReq } from '@/app/interface/api.interface';

export const useBookingMutation = () =>
  useMutation({
    mutationFn: (data: IAppointmentReq) => postAppointments(data),
  });
