import { IButton } from '@/app/interface/button.interface';

export default function Button({ onClick, children, type = 'button' }: IButton) {
  return (
    <button
      className="bg-[#203136] text-white p-[10px] px-[15px] lg:rounded-[50px] w-full flex justify-center gap-2 cursor-pointer"
      onClick={() => onClick()}
      type={type}
    >
      {children}
    </button>
  );
}
