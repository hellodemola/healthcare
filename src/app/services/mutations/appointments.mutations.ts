import { useMutation } from 'react-query';
import { postAppointments } from '../apis/providers.api';
import { IAppointmentReq, IAppointmentResp } from '@/app/interface/api.interface';
import toast from 'react-hot-toast';

export const useBookingMutation = () =>
  useMutation({
    mutationFn: (data: IAppointmentReq) =>
      postAppointments(data)
      .then((res) => res.data.data)
      .then((data:IAppointmentResp) => {
        toast.success(`Appointment set with ${data?.name}`)
      })
  });
