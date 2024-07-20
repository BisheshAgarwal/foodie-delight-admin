import { Link } from "react-router-dom";
// import AcmeLogo from '@/app/ui/acme-logo';
import NavLinks from "./nav-links";
// import SwapiLogo from "./swapi-logo";
import { Outlet } from "react-router-dom";

export function Sidebar() {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="flex h-full flex-col px-3 py-4 md:px-2 w-full flex-none md:w-64">
        <Link
          className="mb-2 flex h-20 items-end justify-start rounded-md bg-black p-4 md:h-40"
          to="/"
        >
          <div className="text-white">
            <h1 className="uppercase font-bold text-xl">Foodie Delight</h1>
          </div>
        </Link>
        <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
          <NavLinks />
          <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        </div>
      </div>
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
}
