'use client';
import { useSelector } from 'react-redux';
import Appointment from '../components/cards/appointment';
import { Label, Title } from '../components/common/typography';
import { RootState } from '../store/store';
import { IAppointmentResp } from '../interface/api.interface';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { updateAppointment } from '../store/slices/appointments.slice';
import { TStatus } from '../interface/appointments';
import Button from '../components/common/button';
import toast from 'react-hot-toast';

export default function Appointments() {
  const { appointments } = useSelector((state: RootState) => state.appointment);

  const dispatch = useDispatch();

  const handleBooking = (appointmentId: string, status: TStatus) => {
    dispatch(updateAppointment({ status, appointmentId }));
    toast.success(`status ${status} updated`);
  };

  return (
    <div className="bg-[#f9f7f5] w-screen h-full lg:px-16 px-4 py-12">
      <main className="bg-[#F9F7F5] my-4 lg:h-screen">
        <div className="my-2 flex justify-between">
          <Title>Appointments</Title>
          <div className="py-[8px] px-[24px] rounded-full bg-[#fff] text-primary flex gap-2 border border-[#DDDAD0] shadow shadow[0px_4px_4px_0px_rgba(0, 0, 0, 0.03)] lg:justify-between justify-center w-full lg:w-fit hidden lg:block">
            Filter by: Upcoming
          </div>
        </div>

        {appointments.length === 0 && (
          <div className="flex justify-center">
            <div>
              <Label>No appointments set</Label>
              <Link className="my-6" href="/">
                <Button>Book an appointment</Button>
              </Link>
            </div>
          </div>
        )}

        {appointments && (
          <div className="lg:grid-cols-2 grid gap-6">
            {appointments.map((each: IAppointmentResp) => (
              <Appointment
                key={each.appointmentId}
                name={each.name}
                specialty={each.specialty}
                status={each.status}
                appointmentDate={each.appointmentDate}
                appointmentId={each.appointmentId}
                handleBooking={handleBooking}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
