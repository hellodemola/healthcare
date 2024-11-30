import { useMutation } from 'react-query';
import { postAppointments } from '../apis/providers.api';
import { IAppointmentResp } from '@/app/interface/api.interface';
import toast from 'react-hot-toast';

export const useBookingMutation = () =>
  useMutation({
    mutationFn: (data: IAppointmentResp) =>
      postAppointments(data).then(() => toast.success('Appointment set successfully')),
  });
