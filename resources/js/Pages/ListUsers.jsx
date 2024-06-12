import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import TextInput from '@/Components/TextInput';
import SelectInput from '@/Components/SelectInput';
import Pagination from '@/Components/Pagination';
import TableHeading from '@/Components/TableHeading';

import Dashboard from './Dashboard';
const ListUsers = ({ users, queryParams, paginationUser, urlpath, auth }) => {
  const searchFieldChanged = (name, value) => {
    // Your search field changed logic
  };

  const onKeyPress = (name, e) => {
    // Your onKeyPress logic
  };

  const toggleSortDirection = (currentDirection) => {
    // Your toggleSortDirection logic
  };

  const sortChanged = (name) => {
    // Your sortChanged logic
  };

  const deleteUser = (user) => {
    // Your delete user logic
  };
console.log(users)
  return (
    <Dashboard auth={auth}>
        <div className="h-96 overflow" style={{ height: '33rem' }}>
      <table className="w-full text-sm text-left rt1:text-right text-gray-500 dark:text-gary-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
          <tr className="text-nowrap">
            <TableHeading
              name={'id'}
            //   sort_field={queryParams.sort_field}
            //   sort_direction={queryParams.sort_direction}
            //   sortChanged={sortChanged}
            >
              ID
            </TableHeading>
            <TableHeading name={'email'} sortable={false}>
              Email
            </TableHeading>
            <TableHeading
              name={'name'}
            //   sort_field={queryParams.sort_field}
            //   sort_direction={queryParams.sort_direction}
            //   sortChanged={sortChanged}
            >
              Name
            </TableHeading>
            <TableHeading
              name={'role'}
            //   sort_field={queryParams.sort_field}
            //   sort_direction={queryParams.sort_direction}
            //   sortChanged={sortChanged}
            >
              Role
            </TableHeading>
            <TableHeading name={'actions'} sortable={false}>
              Actions
            </TableHeading>
          </tr>
        </thead>
        <tbody>
          {users.data.map((user) => (
            <tr key={user.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-3 py-2">{user.id}</td>
              <td className="px-3 py-2">{user.email}</td>
              <td className="px-3 py-2">{user.name}</td>
              <td className="px-3 py-2">{user.role}</td>
              <td className="px-3 py-2">
                <Link
                //   href={route(`user.edit`, { id: user.id, fromRoute: urlpath })}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                >
                  Edit
                </Link>
                <button
                  onClick={(e) => deleteUser(user)}
                  className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination links={users.links} />
      </div>
    </Dashboard>
  );
};

export default ListUsers;
