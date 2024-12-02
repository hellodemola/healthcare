import { useDispatch } from 'react-redux';
import { useBookingMutation } from '../services/mutations';
import { StartTimeEventEmit } from 'react-schedule-meeting';
import { IAppointmentReq, IAppointmentResp } from '../interface/api.interface';
import mockAppResp from '../helpers/mockAppResp';
import toast from 'react-hot-toast';
import { regAppointment } from '../store/slices/appointments.slice';
import { useRouter } from 'next/navigation';

const useBooking = (providerId = '', handleModalState: () => void) => {
  const dispatch = useDispatch();
  const mutations = useBookingMutation();
  const router = useRouter();
  
  const handlePostBooking = async (props: StartTimeEventEmit) => {
    const data: IAppointmentReq = mockAppResp(props.startTime, providerId);
    return mutations.mutate(data, {
      onSuccess(res) {
        const appointment: IAppointmentResp = res?.data;
        toast.success(`Appointment set with ${appointment?.name}`);
        dispatch(regAppointment(appointment));
        handleModalState();
        router.push('/appointments')
      },
      onError() {
        toast.success(`Unable to fulfil this appointment at the moment`);
      },
    });
  };

  return { handlePostBooking, mutations };
};

export default useBooking;
