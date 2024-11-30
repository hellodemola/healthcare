import { ReactElement } from 'react';

export default function Card({ children }: { children: ReactElement }) {
  return (
    <div
      id="card"
      className="lg:p-[32px] p-2 rounded-[16px] lg:border lg:border-[#F1F1F1] lg:bg-white h-full lg:shadow-md shadow-[0_40px_40px_0px_rgba(0, 0, 0, 0.05)]"
    >
      {children}
    </div>
  );
}
