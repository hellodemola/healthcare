import LoaderCard from './components/cards/loader';

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="lg:grid-cols-2 grid gap-6">
      <LoaderCard />
      <LoaderCard />
      <LoaderCard />
      <LoaderCard />
    </div>
  );
}
