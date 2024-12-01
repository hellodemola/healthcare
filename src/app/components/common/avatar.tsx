export default function Avatar({ name }: { name: string }) {
  return (
    <div className="h-24 w-24 rounded-full bg-[#F9F7F5] lg:block hidden place-items-center place-content-center center">
      <p className="font-poppinsBold text-primary text-2xl">{name.charAt(0)}</p>
    </div>
  );
}
