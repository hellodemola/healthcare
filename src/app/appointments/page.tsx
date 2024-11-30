'use client';
import Appointment from '../components/cards/appointment';
import { Title } from '../components/common/typography';
import Error from '../error';
import { IAppointments } from '../interface/appointments';
import Loading from '../loading';
import { useGetAppointments } from '../services/queries/queryProviders';

export default function Appointments() {
  const { isLoading, isError, error, data: appointments, refetch } = useGetAppointments();
  return (
    <div className="bg-[#f9f7f5] w-screen h-full lg:px-16 px-4 py-12">
      <main className="bg-[#F9F7F5] my-4 lg:h-screen">
        <div className="my-2 flex justify-between">
          <Title>Appointments</Title>
          <div className="py-[8px] px-[24px] rounded-full bg-[#fff] text-primary flex gap-2 border border-[#DDDAD0] shadow shadow[0px_4px_4px_0px_rgba(0, 0, 0, 0.03)] lg:justify-between justify-center w-full lg:w-fit hidden lg:block">
            Filter by: Upcoming
          </div>
        </div>

        {isError && <Error error={error as Error} reset={() => refetch()} />}
        {isLoading && <Loading />}
        {appointments && (
          <div className="lg:grid-cols-2 grid gap-6">
            {appointments.map((each: IAppointments) => (
              <Appointment
                key={each.appointmentId}
                name={each.name}
                specialty={each.specialty}
                experience="8"
                status={each.status}
                appointmentDate={each.appointmentDate}
                appointmentId={each.appointmentId}
                handleBooking={(event) => console.log(event)}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
