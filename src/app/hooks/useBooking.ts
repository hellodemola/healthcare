import { useDispatch } from 'react-redux';
import { useBookingMutation } from '../services/mutations';
import { StartTimeEventEmit } from 'react-schedule-meeting';
import { IAppointmentReq, IAppointmentResp } from '../interface/api.interface';
import mockAppResp from '../helpers/mockAppResp';
import toast from 'react-hot-toast';
import { regAppointment } from '../store/slices/appointments.slice';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import compareDate from '../helpers/compareDate';

const useBooking = (providerId = '', handleModalState: () => void) => {
  const dispatch = useDispatch();
  const mutations = useBookingMutation();
  const router = useRouter();
  const { appointments } = useSelector((state: RootState) => state.appointment);

  const appointmentCheck = (data: IAppointmentReq) => {
    return appointments.find(
      (appointment) =>
        appointment.providerId === data.providerId &&
        compareDate(data.appointmentDate, appointment.appointmentDate)
    );
  };

  const handlePostBooking = async (props: StartTimeEventEmit) => {
    const data: IAppointmentReq = mockAppResp(props.startTime, providerId);
    const isAppointment = appointmentCheck(data);
    if (isAppointment)
      return toast.error(`Already got an appointment with ${isAppointment.name} for this time`);

    return mutations.mutate(data, {
      onSuccess(res) {
        const appointment: IAppointmentResp = res?.data;
        toast.success(`Appointment set with ${appointment?.name}`);
        dispatch(regAppointment(appointment));
        handleModalState();
        router.push('/appointments');
      },
      onError() {
        toast.success(`Unable to fulfil this appointment at the moment`);
      },
    });
  };

  return { handlePostBooking, mutations };
};

export default useBooking;
