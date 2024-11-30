import Link from 'next/link';

interface IEachMenu {
  menu: { route: string; label: string };
  pathname: '/about' | '/service' | '/client' | '/careers' | '/contact' | string;
}

function EachMenu({ menu, pathname }: IEachMenu) {
  const isCurrentPage = pathname === menu.route;
  return (
    <div className="border-b-2 lg:border-b-0 last:border-b-0 p-2">
      <Link
        className={`${isCurrentPage ? 'text-[#CA9237]' : 'text-primary'} ${isCurrentPage ? 'font-[900]' : 'font-[400]'} ${isCurrentPage && 'underline'}`}
        href={menu.route}
      >
        {menu.label}
      </Link>
    </div>
  );
}

export default EachMenu;
