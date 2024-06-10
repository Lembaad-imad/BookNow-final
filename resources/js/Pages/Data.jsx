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
import LineGraph from '@/Components/LineGraph';
const Data = ({ auth,
    counts,
    tickets,
    events,
    queryParams = null,
    success,
    paginationevent,
    urlpath,}) => {
      const calculateTotalTicketsSold = (tickets) => {
        return tickets.reduce((total, ticket) => total + ticket.quantity, 0);
    };
    const totalTicketsSold = calculateTotalTicketsSold(tickets);
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
            statick: totalTicketsSold,
            text: "Total Ticktes",
          },
          {
            icons: <ShoppingBagIcon />,
            statick: counts.RevenueTotal + " " + "$",
            text: "Total Revenus",
          },
        ];
        console.log(tickets)
        
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
       <LineGraph tickets={tickets}/>
    </Dashboard>
  )
}

export default Data
