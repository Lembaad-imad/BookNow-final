import React from 'react'
import Dashboard from './Dashboard';
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
const Data = ({ auth,
    counts,
    events,
    queryParams = null,
    success,
    paginationevent,
    urlpath,}) => {
        const data = [
          {
            icons: <ShoppingBagIcon />,
            statick: counts.eventsCount,
            text: "Total Events",
          },
          {
            icons: <UserCircleIcon />,
            statick: counts.usersCount,
            text: "Total Users",
          },
          {
            icons: <ShoppingBagIcon />,
            statick: counts.ticketsCount,
            text: "Total Ticktes",
          },
          {
            icons: <ShoppingBagIcon />,
            statick: counts.RevenueTotal + " " + "$",
            text: "Total Revenus",
          },
        ];
  return (
    <Dashboard auth={auth}>
  <div className="flex gap-5">
        {data.map(d=>
            <div className="bg-white flex flex-col gap-3 p-5 w-full">
              <div className="bg-gray-100 w-12 h-12 flex justify-center items-center rounded-full">
    <p className="text-blue-900 w-9">{d.icons}</p>
    </div>
                <p className=" font-bold text-2xl">{d.statick}</p>
                <p className=" text-sm text-gray-500">{d.text}</p>
            </div>
         )}
         </div>
    </Dashboard>
  )
}

export default Data
