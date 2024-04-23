import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import Footerpage from "@/Components/Footerpage";
import NavLink from "@/Components/NavLink";
import { Link } from "@inertiajs/react";
export default function Navbar({auth,header}){
    return(

    <nav className="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="shrink-0 flex items-center">
                            <Link href="/">
                                <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" />
                            </Link>
                        </div>

                        <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex gap-10">
                            <NavLink
                                href={route("dashboard")}
                                active={route().current("dashboard")}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                href={route("event.index")}
                                active={route().current("event.index")}
                            >
                                Events
                            </NavLink>
                            <NavLink
                                href={route("event.index")}
                                active={route().current("index")}
                            >

                                Contacs
                            </NavLink>
                            <NavLink
                                href={route("dashboard")}
                                active={route().current("dashboard")}
                            >
                                Pricing
                            </NavLink>
                        </div>
                    </div>
                    
                    {!auth ? (
                        <div className="hidden sm:flex sm:items-center sm:ms-6">
                            <div className=" flex">
                                <Link
                                    href=""
                                    className="bg-white py-2 px-4 text-blue-900 border text-center border-blue-900 rounded shadow transition-all hover:bg-gray-200 mr-2 inline-block w-28 h-10"
                                >
                                    LOGIN
                                </Link>

                                <Link
                                    href=""
                                    className="bg-blue-900 py-2 px-4 text-white  text-center rounded shadow transition-all hover:bg-gray-200 mr-2 inline-block w-28 h-10"
                                >
                                    SINGUP
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <div className="hidden sm:flex sm:items-center sm:ms-6">
                            <div className="ms-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {auth.name}

                                                <svg
                                                    className="ms-2 -me-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route("profile.edit")}
                                        >
                                            Profile
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>
                    )}
                </div>
            </div>
                     {header && (
                <header className="bg-blue-900 dark:bg-gray-800 shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}
        </nav>
    )
}