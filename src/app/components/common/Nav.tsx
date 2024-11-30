'use client';
import Hamburger from 'hamburger-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import EachMenu from './menu';

export default function Nav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const routes = [
    { label: 'Appointments', route: '/appointments' },
    { label: 'Deliveries', route: '#' },
    { label: 'Prescription', route: '#' },
  ];
  return (
    <>
      <nav className="bg-white lg:px-16 px-4 py-6 lg:grid grid-cols-3 items-center sticky top-0 flex justify-between">
        <div>
          <Link className="font-poppins text-xl" href="/">
            HealthCare
          </Link>
        </div>
        <div id="hambugger" className="lg:hidden col-span-3 flex justify-end w-full">
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
        </div>
        <div id="menu" className="lg:flex gap-8 hidden">
          {routes.map((e, index) => (
            <EachMenu key={index} pathname={pathname} menu={e} />
          ))}
        </div>
        <div className="lg:flex gap-4 items-center justify-end hidden">
          <Link href="#">Profile</Link>
          <Link
            href="/"
            className="bg-[#203136] text-white p-[10px] px-[15px] rounded-[50px] w-fit flex justify-center gap-2 cursor-pointer"
          >
            Book appointment
          </Link>
        </div>
      </nav>
      {isOpen && (
        <div className="bg-white shadow-sm">
          <div>
            {routes.map((e, index) => (
              <EachMenu key={index} pathname={pathname} menu={e} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
