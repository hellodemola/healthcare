'use client';
import Provider from './components/cards/provider';
import Modal from './components/common/modal';
import { IHandleBook, IProviderAppointment } from './interface/providers';
import { useGetProviders } from './services/queries/queryProviders';
import { useState } from 'react';
import { Title } from './components/common/typography';
import useModals from './hooks/useModals';
import Loading from './loading';
import Error from './error';
import useBooking from './hooks/useBooking';
import Schedule from './appointments/schdeule';

export default function Home() {
  const { isLoading, data: providers, error, isError, refetch } = useGetProviders();
  const { isShowModal, handleModalState } = useModals();
  const [provider, setProvider] = useState<IHandleBook>();
  const handleBooking = (props: IHandleBook) => {
    setProvider(props);
    handleModalState();
  };
  const { mutations, handlePostBooking } = useBooking(provider?.id, handleModalState);

  return (
    <div className="bg-ivory w-screen h-full lg:px-16 px-4 py-12">
      <main className="bg-ivory my-4 lg:min-h-screen">
        <div className="my-2 flex justify-between">
          <Title>Book appointment</Title>
          <div className="py-[8px] px-[24px] rounded-full bg-white text-primary flex gap-2 border border-sandstone shadow shadow[0px_4px_4px_0px_rgba(0, 0, 0, 0.03)] lg:justify-between justify-center w-full lg:w-fit hidden">
            {/* would be a dropdown to filter  */}
            Filter
          </div>
        </div>
        {(isError || mutations.isError) && (
          <Error error={(error as Error) || mutations.error} reset={() => refetch()} />
        )}
        {isLoading && <Loading />}
        {providers?.length > 0 && (
          <div data-testid="data" className="lg:grid-cols-2 grid gap-6">
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
      {isShowModal && provider && (
        <Modal setShowModal={handleModalState}>
          <Schedule name={provider?.name} handlePostBooking={handlePostBooking} />
        </Modal>
      )}
    </div>
  );
}
