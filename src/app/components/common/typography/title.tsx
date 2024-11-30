import { ReactNode } from 'react';

export const Title = ({ children }: { children: ReactNode }) => (
  <h1 className="font-poppinsBold text-primary text-2xl">{children}</h1>
);

export const Label = ({ children }: { children: ReactNode }) => (
  <h3 className="font-poppinsBold font-bold text-primary text-lg">{children}</h3>
);

export const SubLabel = ({ children }: { children: ReactNode }) => (
  <p className="font-inter text-gray">{children}</p>
);

export const Text = ({ children }: { children: ReactNode }) => (
  <p className="font-inter">{children}</p>
);

export const SmallPara = ({ children }: { children: ReactNode }) => (
  <p className="text-primary my-1 font-[700] text-[0.8rem]">{children}</p>
);
