import Footerpage from "@/Components/Footerpage";
import Navbar from "@/Components/Navbar";
import Pagination from "@/Components/Pagination";
import SelectInput from "@/Components/SelectInput";
import TableHeading from "@/Components/TableHeading";
import TextInput from "@/Components/TextInput";
import { Head, Link, router, useForm } from "@inertiajs/react";
import { EVENT_STATUS_CLASS_MAP, EVENT_STATUS_TEXT_MAP } from "@/constants.jsx";
import { useState ,useEffect} from "react";
export default function Create({ events, auth, queryParams = null, success,paginationevent }) {
  const [displaySuccess, setDisplaySuccess] = useState(success);
  useEffect(() => {
    if (success) {
      setDisplaySuccess(success);
      const timer = setTimeout(() => {
        setDisplaySuccess(null);
      }, 5000); 
      return () => clearTimeout(timer);
    }
  }, [success]);
  queryParams = queryParams || {};
  const searchFieldChanged = (name, value) => {
    if (value) {
      queryParams[name] = value;
    } else {
      delete queryParams[name];
    }
    fetchEvents();
  };

  const onKeyPress = (name, e) => {
    if (e.key === "Enter") {
      searchFieldChanged(name, e.target.value);
    }
  };

  const toggleSortDirection = (currentDirection) => {
    return currentDirection === "asc" ? "desc" : "asc";
  };

  const sortChanged = (name) => {
    if (queryParams.sort_field === name) {
      queryParams.sort_direction = toggleSortDirection(
        queryParams.sort_direction
      );
    } else {
      queryParams.sort_field = name;
      queryParams.sort_direction = "asc";
    }
    fetchEvents();
  };
  const deleteEevent = (event) => {
    if (!window.confirm("Are you sure you want to delete the project?")) {
      return;
    }
    console.log(event.id);
    router.delete(route("eventlist.destroy", event.id));
  };

  const fetchEvents = () => {
    router.get(route("eventlist.index"), queryParams);
  };
  console.log(paginationevent);
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar
        auth={auth}
        header={
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-xl text-white dark:text-gray-200 leading-tight">
              My events List
            </h2>
          </div>
        }
      />
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-5">
   {displaySuccess && (
  <div className={`py-2 px-4 text-white rounded mb-4 bg-blue-500 ${displaySuccess.includes("deleted") ? 'bg-red-500' : 'bg-green-500'}`}>
    {displaySuccess}
  </div>
)}
</div>

      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
          <div className="p-6 text-gray-900 dark:text-gray-100">
            <table className="w-full text-sm text-left rt1:text-right text-gray-500 dark:text-gary-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                <tr className="text-nowrap">
                  <TableHeading
                    name={"id"}
                    sort_field={queryParams.sort_field}
                    sort_direction={queryParams.sort_direction}
                    sortChanged={sortChanged}
                  >
                    ID
                  </TableHeading>
                  <TableHeading name={"image"} sortable={false}>
                    Image
                  </TableHeading>
                  <TableHeading
                    name={"titre"}
                    sort_field={queryParams.sort_field}
                    sort_direction={queryParams.sort_direction}
                    sortChanged={sortChanged}
                  >
                    Name
                  </TableHeading>
                  <TableHeading
                    name={"status"}
                    sort_field={queryParams.sort_field}
                    sort_direction={queryParams.sort_direction}
                    sortChanged={sortChanged}
                  >
                    Status
                  </TableHeading>
                  <TableHeading
                    name={"created_at"}
                    sort_field={queryParams.sort_field}
                    sort_direction={queryParams.sort_direction}
                    sortChanged={sortChanged}
                  >
                    Create Date
                  </TableHeading>

                  <TableHeading name={"createdby"} sortable={false}>
                    Created by
                  </TableHeading>
                  <TableHeading name={"actions"} sortable={false}>
                    Actions
                  </TableHeading>
                </tr>
              </thead>
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                <tr className="text-nowrap">
                  <th className="px-3 py-3"></th>
                  <th className="px-3 py-3"></th>
                  <th className="px-3 py-3">
                    <TextInput
                      className="w-full"
                      defaultValue={queryParams.titre}
                      placeholder="Event Name"
                      onBlur={(e) =>
                        searchFieldChanged("titre", e.target.value)
                      }
                      onKeyPress={(e) => onKeyPress("titre", e)}
                    />
                  </th>
                  <th className="px-3 py-3">
                    <SelectInput
                      className="w-full"
                      defaultValue={queryParams.status}
                      onChange={(e) =>
                        searchFieldChanged("status", e.target.value)
                      }
                    >
                      <option value="">Select Status</option>
                      <option value="pending">Pending</option>
                      <option value="approved">Approved</option>
                      <option value="unapproved">Unapproved</option>
                    </SelectInput>
                  </th>
                  <th className="px-3 py-3"></th>
                  <th className="px-3 py-3"></th>
                  <th className="px-3 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {events.data.map((event) => (
                
                  <tr
                    key={event.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td className="px-3 py-2">{event.id}</td>
                    <td className="px-3 py-2">
                      <img src={event.logo_path} style={{ width: 60 }} />
                    </td>
                    <th className="px-3 py-2 text-gray-800 text-nowrap hover:underline">
                      <Link href={route("event.show", event.id)}>
                        {event.titre}
                      </Link>
                    </th>
                    <td className="px-3 py-2">
                      <span
                        className={
                          "px-2 py-1 rounded text-white " +
                          EVENT_STATUS_CLASS_MAP[event.status]
                        }
                      >
                        {EVENT_STATUS_TEXT_MAP[event.status]}
                      </span>
                    </td>

                    <td className="px-3 py-2">{event.created_at}</td>

                   <td className="px-3 py-2">{event.created_by.name}</td>
                    <td className="px-3 py-2">
                      <Link
                        href={route("eventlist.edit", event.id)}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={(e) => deleteEevent(event)}
                        className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination links={paginationevent.links} />
          </div>
        </div>
      </div>
      
      <Footerpage />
      
    </div>
  );
}
