import Navbar from "@/Components/Navbar";
import Myevent from "@/Pages/Event/Myevent";
import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import TableListEvent from "./Event/TableListEvent";
import Data from "@/Pages/Data";
import NavLink from "@/Components/NavLink";

function Dashboard({
  auth,
  counts,
  events,
  queryParams = null,
  success,
  paginationevent,
  urlpath,
  children,
}) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 ">
      <Navbar auth={auth} />
      <div className="flex">
        <Card className=" w-56 max-w-[20rem] p-2 ">
          <div className="mb-2 p-3">
            <Typography variant="h5" color="blue-gray">
              Sidebar
            </Typography>
          </div>
          <List>
            <ListItem>
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              <NavLink
                href={route("dashboard.index")}
                active={route().current("dashboard.index")}
              >
                Dashboard
              </NavLink>
              {/* Dashboard */}
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <ShoppingBagIcon className="h-5 w-5" />
              </ListItemPrefix>
              <NavLink
                href={route("listevent.index")}
                active={route().current("listevent.index")}
              >
                Events
              </NavLink>
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5" />
              </ListItemPrefix>
              <NavLink
                href={route("listevent.index")}
                active={route().current("listevent.index")}
              >
                Users
              </NavLink>
            </ListItem>
          </List>
        </Card>

        <div className="p-5 bg-gray-100 w-full">{children }</div>
      </div>
    </div>
  );
}

export default Dashboard;
