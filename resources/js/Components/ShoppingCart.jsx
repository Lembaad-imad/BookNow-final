import { Fragment, useState } from "react";
import { Menu, Transition, Dialog } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ShoppingCart({ notifcart, countcart, clickedEvents }) {
  const [isOpen, setIsOpen] = useState(false);

  console.log(clickedEvents);
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div className="t-0 absolute left-3">
        {notifcart && (
          <span className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
            {countcart}
          </span>
        )}
      </div>
      <div>
        <Menu.Button
          className="py-2"
          onClick={() => setIsOpen((prev) => !prev)} // Toggle isOpen state
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="file: text-gray-700 h-5 w-5 hover:text-black"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </Menu.Button>
      </div>

      <Transition
        show={isOpen} // Use isOpen state to control visibility
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute overflow-y-scroll no-scrollbar right-0 z-10 mt-2 w-80 origin-top-right rounded-md bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <div
                  href="#"
                  className={classNames(
                    active ? " text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm h-full flex-col "
                  )}
                  style={{ maxHeight: "15rem" }}
                >
                  {clickedEvents.length > 0 ? (
                    <div>
                        <div className="flex items-start justify-between">
                      <h2 className="text-lg font-medium text-blue-900 mb-2">
                        Shopping cart
                      </h2>
                      <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setIsOpen(false)}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>  
                        </div>
                      <div className="flow-root">
                        <ul
                          role="list"
                          className="-my-6 divide-y divide-gray-200"
                        >
                          {clickedEvents.map((event) => (
                            <li key={event.id} className="flex py-6">
                              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img
                                  src={event.logo_path}
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>

                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>{event.titre}</h3>
                                    <p className="ml-4">{event.prix}$</p>
                                  </div>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                  <p className="text-gray-500">Qty 1</p>

                                  <div className="flex">
                                    <button
                                      type="button"
                                      className="font-medium text-blue-900 hover:text-indigo-500 mb-2"
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div className="mt-6">
                          <a
                            href="#"
                            className="flex items-center justify-center rounded-md border border-transparent bg-blue-900 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                          >
                            Checkout
                          </a>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p>Select event</p>
                  )}
                </div>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
