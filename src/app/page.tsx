'use client';
import Provider from './components/cards/provider';
import Modal from './components/common/modal';
import { IHandleBook, IProviderAppointment } from './interface/providers';
import { ScheduleMeeting, StartTimeEventEmit } from 'react-schedule-meeting';
import { useGetProviders } from './services/queries/queryProviders';
import { useEffect, useState } from 'react';
import { Label, Title } from './components/common/typography';
import useModals from './hooks/useModals';
import mockAvaliableTimeslots from './helpers/mockAvaliable';
import { IAppointmentResp } from './interface/api.interface';
import { useBookingMutation } from './services/mutations';
import mockAppResp from './helpers/mockAppResp';
import Loading from './loading';
import Error from './error';
import { Toaster } from 'react-hot-toast';

export default function Home() {
  const { isLoading, data: providers, error, isError, refetch } = useGetProviders();
  const { isShowModal, handleModalState } = useModals();
  const [provider, setProvider] = useState<IHandleBook>();
  const handleBooking = (props: IHandleBook) => {
    setProvider(props);
    handleModalState();
  };

  const mutations = useBookingMutation();
  const handlePostBooking = async (props: StartTimeEventEmit) => {
    const data: IAppointmentResp = mockAppResp(props.startTime);
    return mutations.mutate(data);
  };

  useEffect(() => {
    if (mutations.isSuccess) {
      handleModalState();
    }
  }, [mutations.isSuccess]);

  return (
    <div className="bg-ivory w-screen h-full lg:px-16 px-4 py-12">
      <main className="bg-ivory my-4 lg:min-h-screen">
        <div className="my-2 flex justify-between">
          <Title>Book appointment</Title>
          <div className="py-[8px] px-[24px] rounded-full bg-white text-primary flex gap-2 border border-sandstone shadow shadow[0px_4px_4px_0px_rgba(0, 0, 0, 0.03)] lg:justify-between justify-center w-full lg:w-fit hidden lg:block">
            {/* would be a dropdown to filter  */}
            Filter
          </div>
        </div>
        {(isError || mutations.isError) && (
          <Error error={(error as Error) || mutations.error} reset={() => refetch()} />
        )}
        {isLoading && <Loading />}
        {providers && (
          <div className="lg:grid-cols-2 grid gap-6">
            {providers.map((each: IProviderAppointment) => (
              <Provider
                key={each.userId}
                name={each.name}
                specialty={each.specialty}
                experience={each.experience}
                availableDate={each.availableDate}
                userId={each.userId}
                handleBooking={handleBooking}
              />
            ))}
          </div>
        )}
      </main>
      {isShowModal && (
        <Modal setShowModal={handleModalState}>
          <>
            <Label>Set an appointment with {provider?.name}</Label>
            <ScheduleMeeting
              borderRadius={10}
              primaryColor="#3f5b85"
              eventDurationInMinutes={30}
              availableTimeslots={mockAvaliableTimeslots}
              onStartTimeSelect={handlePostBooking}
              startTimeListStyle="scroll-list"
            />
          </>
        </Modal>
      )}
      <Toaster />
    </div>
  );
}