import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import Cardshop from "./Cardshop";
import Pagination from "@/Components/Pagination";

const sortOptions = [

  { name: "Low to High",  current: false },
  { name: "High to Low",  current: false },
];

const filters = [
  {
    id: "price",
    name: "price",
    options: [
      { value: "Paid", label: "Paid" },
      { value: "Free", label: "Free" },
    ],
  },

  {
    id: "date",
    name: "Date",
    options: [
      {
        value: "start",
        label: "Start Date",
        type: "date",
        defaultValue: "",
        checked: false,
      },
      {
        value: "end",
        label: "End Date",
        type: "date",
        defaultValue: "",
        checked: false,
      },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Filterside({
  events,
  paginationevent,
  handlePriceChange,
  selectedPrice,
  handleChnagecheckbox,
  setTriggerFetch,
  allCategories,
  searchFieldChanged,
  searchArgs,
  setSearchArgs,
}) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [SortOptions,setSortOptions] = useState(sortOptions);

  const categoryCheckboxesRef = useRef({});
  useEffect(() => {
    allCategories.forEach((category) => {
      if (searchArgs.categories.includes(category.value)) {
        categoryCheckboxesRef.current[category.value] = true;
      }
    });
  }, [searchArgs.categories]);

  const handleCategoryCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      categoryCheckboxesRef.current[value] = checked;
    } else {
      delete categoryCheckboxesRef.current[value];
    }

    const updatedCategories = Object.keys(categoryCheckboxesRef.current);

    setSearchArgs((prevState) => ({
      ...prevState,
      categories: updatedCategories,
    }));

    setTriggerFetch((prev) => !prev);
  };
  console.log(categoryCheckboxesRef);
  const filters = [
    {
      id: "price",
      name: "price",
      options: [
        { value: "Paid", label: "Paid" },
        { value: "Free", label: "Free" },
      ],
    },

    {
      id: "category",
      name: "Category",
      options: allCategories.map((category) => ({
        value: category.value,
        label: category.value,
        checked: searchArgs.categories.includes(category.value),
      })),
    },

  
  ];
  const HandlClicksort = (selectedSort)=>{
    setSortOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.name === selectedSort
          ? { ...option, current: true }
          : { ...option, current: false }
      )
    );
  
    setSearchArgs((prevState) => ({
      ...prevState,
      sort: selectedSort,
    }));
  
    setTriggerFetch((prev) => !prev);
  }
  return (
    <>
      <div className="bg-white">
        <div>
          <Transition.Root show={mobileFiltersOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-40 lg:hidden"
              onClose={setMobileFiltersOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 z-40 flex">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                    <div className="flex items-center justify-between px-4">
                      <h2 className="text-lg font-medium text-gray-900">
                        Filters
                      </h2>
                      <button
                        type="button"
                        className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                        onClick={() => setMobileFiltersOpen(false)}
                      >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>

                    <form className="mt-4 border-t border-gray-200">
                      {filters.map((section) => (
                        <Disclosure
                          as="div"
                          key={section.id}
                          className="border-t border-gray-200 px-4 py-6"
                        >
                          {({ open }) => (
                            <>
                              <h3 className="-mx-2 -my-3 flow-root">
                                <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                  <span className="font-medium text-gray-900">
                                    {section.name}
                                  </span>
                                  <span className="ml-6 flex items-center">
                                    {open ? (
                                      <MinusIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    ) : (
                                      <PlusIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    )}
                                  </span>
                                </Disclosure.Button>
                              </h3>
                              <Disclosure.Panel className="pt-6">
                                <div className="space-y-6">
                                  {section.options.map((option, optionIdx) => (
                                    <div
                                      key={option.value}
                                      className="flex items-center"
                                    >
                                      {section.options.map(
                                        (option, optionIdx) => (
                                          <div
                                            key={option.value}
                                            className="flex items-center"
                                          >
                                            {option.type === "date" ? (
                                              <div className="">
                                                <label
                                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                                  className="ml-3 min-w-0 flex-1 text-gray-500"
                                                >
                                                  {option.label}
                                                </label>
                                                <input
                                                  id={`filter-${section.id}-${option.value}`}
                                                  name={`${section.id}-${option.value}`}
                                                  defaultValue={
                                                    option.defaultValue
                                                  }
                                                  type="date"
                                                  className="h-10 w-full px-3 border border-gray-300 rounded-md"
                                                />
                                              </div>
                                            ) : (
                                              <>
                                                {option.name === "price" ? (
                                                  <input
                                                    id={`filter-${section.id}-${optionIdx}`}
                                                    name={`${section.id}`}
                                                    value={option.value}
                                                    type="radio"
                                                    checked={option.checked}
                                                    onChange={
                                                      searchFieldChanged
                                                    }
                                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                  />
                                                ) : (
                                                  <input
                                                    id={`filter-${section.id}-${optionIdx}`}
                                                    name={`${section.id}[]`}
                                                    defaultValue={option.value}
                                                    type="checkbox"
                                                    defaultChecked={
                                                      option.checked
                                                    }
                                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                  />
                                                )}
                                                <label
                                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                                  className="ml-3 min-w-0 flex-1 text-gray-500"
                                                >
                                                  {option.label}
                                                </label>
                                              </>
                                            )}
                                          </div>
                                        )
                                      )}
                                    </div>
                                  ))}
                                </div>
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      ))}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>

          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                Evenements
              </h1>

              <div className="flex items-center">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                      Sort
                      <ChevronDownIcon
                        className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        {sortOptions.map((option) => (
                          <Menu.Item key={option.name}>
                            {({ active }) => (
                                <a
                                // href="#"
                                className={classNames(
                                  option.current ? "font-medium text-gray-900 active" : "text-gray-500",
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm cursor-pointer"
                                )}
                                onClick={() => HandlClicksort(option.name)}
                              >
                                {option.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>

                <button
                  type="button"
                  className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
                ></button>
                <button
                  type="button"
                  className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <span className="sr-only">Filters</span>
                  <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            <section aria-labelledby="products-heading" className="pb-24 pt-6">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                <form className="hidden lg:block">
                  {filters.map((section) => (
                    <Disclosure
                      as="div"
                      key={section.id}
                      className="border-b border-gray-200 py-6"
                    >
                      {({ open }) => (
                        <>
                          <h3 className="-my-3 flow-root">
                            <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                              <span className="font-medium text-gray-900">
                                {section.name}
                              </span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-4">
                              {section.options.map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className="flex items-center"
                                >
                                
                                    <>
                                      {section.id === "price" ? (
                                        <input
                                          id={`filter-${section.id}-${optionIdx}`}
                                          name={`${section.id}`}
                                          value={option.value}
                                          type="radio"
                                          checked={
                                            option.value === searchArgs.price
                                          }
                                          onChange={searchFieldChanged}
                                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                        />
                                      ) : (
                                        <input
                                          key={option.value}
                                          id={`filter-${section.id}-${optionIdx}`}
                                          name={`${section.id}[]`}
                                          value={option.value}
                                          type="checkbox"
                                          onChange={
                                            handleCategoryCheckboxChange
                                          }
                                          checked={
                                            categoryCheckboxesRef.current[
                                              option.value
                                            ] || false
                                          }
                                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                        />
                                      )}
                                      <label
                                        htmlFor={`filter-${section.id}-${optionIdx}`}
                                        className="ml-3 min-w-0 flex-1 text-gray-500"
                                      >
                                        {option.label}
                                      </label>
                                    </>
                                
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </form>

                <div className="lg:col-span-3 p-2 flex flex-col flex-wrap gap-5">
                  <div className="lg:col-span-3 p-2 flex  flex-wrap gap-5">
                    {events.data.map((event, index) => (
                      <Cardshop key={index} event={event} />
                    ))}
                  </div>
                  <div>{/* <Pagination links={paginationevent} /> */}</div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
