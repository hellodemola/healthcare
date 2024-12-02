import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Nav from './components/common/Nav';
import QueryProvider from './components/QueryProvider';
import ReduxProvider from './components/ReduxProvider';
import { Toaster } from 'react-hot-toast';

const interRegular = localFont({
  src: './fonts/InterRegular.woff',
  variable: '--font-inter-regular',
  weight: '400',
});
const poppinsBold = localFont({
  src: './fonts/PoppinsBold.woff',
  variable: '--font-poppins-bold',
  weight: '600',
});

const poppinsRegular = localFont({
  src: './fonts/PoppinsRegular.woff',
  variable: '--font-poppins',
  weight: '400',
});

export const metadata: Metadata = {
  title: 'HealthCare meeting',
  description: 'Accessment for Plateaumed',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interRegular.variable} ${poppinsBold.variable} ${poppinsRegular.variable} antialiased text-primary`}
      >
        <ReduxProvider>
          <QueryProvider>
            <>
              <Nav />
              {children}
              <Toaster />
            </>
          </QueryProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
