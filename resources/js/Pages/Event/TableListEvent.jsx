import React from 'react'
import Footerpage from "@/Components/Footerpage";
import Navbar from "@/Components/Navbar";
import Pagination from "@/Components/Pagination";
import SelectInput from "@/Components/SelectInput";
import TableHeading from "@/Components/TableHeading";
import TextInput from "@/Components/TextInput";
import { Head, Link, router, useForm } from "@inertiajs/react";
import { EVENT_STATUS_CLASS_MAP, EVENT_STATUS_TEXT_MAP } from "@/constants.jsx";
import { useState ,useEffect} from "react";
const TableListEvent = ({events, auth, queryParams = null, success,paginationevent ,urlpath}) => {
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
    
     
        router.delete(route(`eventlist.destroy`,event.id));
      };
    
      const fetchEvents = () => {
        router.get(route(`${urlpath}.index`), queryParams);
      };
  return (
     < >
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
                      <Link href={route(`eventlist.edit`,{'id' : event.id, 'fromRoute': urlpath} )}>
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
                        href={route(`eventlist.edit`,{'id' : event.id, 'fromRoute': urlpath} )}
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
            <div className='bg-white-500'>

            <Pagination links={paginationevent.links} />
            </div>
          </>
  )
}

export default TableListEvent