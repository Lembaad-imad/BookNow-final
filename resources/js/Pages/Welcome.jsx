import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import Footerpage from "@/Components/Footerpage";
import NavLink from "@/Components/NavLink";
import { Link } from "@inertiajs/react";

export default function Welcome({ children, auth }) {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 ">
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
                                    active={route().current("index")}
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
            </nav>

            <section className="max-w-7xl mx-auto relative py-4">
                <div className="h-auto relative">
                    <img
                        src="/images/one.jpg"
                        alt="Application Logo"
                        className="w-full h-auto rounded-lg shadow-lg"
                        style={{ maxHeight: "38rem" }}
                    />
                    <div className="absolute inset-0 flex flex-col items-le justify-center p-8 mb-16 gap-3">
                        <p className="text-white text-5xl font-blod ">WITH </p>
                        <p className="text-white text-7xl font-bold ">
                            BOOKNOW
                        </p>
                        <p className="text-white text-5xl font-bold ">
                            YOU CAN
                        </p>
                        <div>
                            <Link
                                href=""
                                className="bg-white py-2 px-4 text-blue-900 border text-center font-bold border-blue-900 rounded shadow transition-all hover:bg-gray-200 mr-2 inline-block w-28 h-10"
                            >
                                CREATE
                            </Link>

                            <Link
                                href=""
                                className="bg-white py-2 px-4 text-blue-900 border text-center font-bold rounded shadow transition-all hover:bg-gray-200 mr-2 inline-block w-28 h-10"
                            >
                                BUY
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto relative py-4">
                <div className="h-auto relative">
                    <div>
                        <p className="text-blue-900 text-5xl font-bold text-center sm:text-4xl">
                            WHY US?
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="bg-gray-100 w-full border rounded-md shadow-md p-5 flex flex-col gap-8">
                            <div className="flex flex-row items-center font-bold">
                                <p className="flex-grow">SUPPORT</p>
                                <Link
                                    href="#"
                                    className="bg-blue-900 py-2 px-4 text-white text-center rounded shadow transition-all hover:bg-gray-200 inline-block w-28 h-10 sm:w-auto sm:h-12"
                                >
                                    contact us
                                </Link>
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className="font-bold">
                                    Your Guide from Start to finish
                                </p>
                                <p>
                                    Get personalized support every step of the
                                    way from our dedicated team of event
                                    experts, whether you're hosting or attending
                                    an event.
                                </p>
                            </div>
                        </div>
                        <div className="bg-gray-100 w-full border rounded-md shadow-md p-5 flex flex-col gap-8">
                            <div className="flex flex-row items-center font-bold">
                                <p className="flex-grow">SIMPLIFY</p>
                                <Link
                                    href="#"
                                    className="bg-blue-900 py-2 px-4 text-white text-center rounded shadow transition-all hover:bg-gray-200 inline-block w-28 h-10 sm:w-auto sm:h-12"
                                >
                                    buy now
                                </Link>
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className="font-bold">
                                    Expert Guidance for Every Occasion
                                </p>
                                <p>
                                    Discover the Ease of Ticket Purchase:
                                    Effortlessly Secure Your Spot at Events
                                </p>
                            </div>
                        </div>
                        <div className="bg-gray-100 w-full border rounded-md shadow-md p-5 flex flex-col gap-8">
                            <div className="flex flex-row items-center font-bold">
                                <p className="flex-grow">STREAMLINE</p>
                                <Link
                                    href="#"
                                    className="bg-blue-900 py-2 px-4 text-white text-center rounded shadow transition-all hover:bg-gray-200 hover:text-blue-900 inline-block w-28 h-10 sm:w-auto sm:h-12"
                                >
                                    create
                                </Link>
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className="font-bold">
                                    Simplify Planning with Our User-Friendly
                                    Platform
                                </p>
                                <p>
                                    Easily create your event hassle-free with
                                    our intuitive platform, designed for
                                    seamless event planning.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto relative py-4 flex flex-col gap-10 mt-14 p-10">
                <div>
                    <p className="font-bold bg-blue-900 text-white p-3 inline-block rounded-xl">
                        Trending events
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-16 mt-5 justify-center">
                    <div class="max-w-xs rounded-xl overflow-hidden shadow-lg">
                        <img
                            class="w-full"
                            src="./images/image 2.avif"
                            alt="Sunset in the mountains"
                        />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">
                                The Coldest Sunset
                            </div>
                            <p class="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Voluptatibus quia, nulla!
                                Maiores et perferendis eaque, exercitationem
                                praesentium nihil.
                            </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                #photography
                            </span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                #travel
                            </span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                #winter
                            </span>
                        </div>
                    </div>
                    <div class="max-w-xs rounded-xl overflow-hidden shadow-lg">
                        <img
                            class="w-full"
                            src="./images/image 2.avif"
                            alt="Sunset in the mountains"
                        />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">
                                The Coldest Sunset
                            </div>
                            <p class="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Voluptatibus quia, nulla!
                                Maiores et perferendis eaque, exercitationem
                                praesentium nihil.
                            </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                #photography
                            </span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                #travel
                            </span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                #winter
                            </span>
                        </div>
                    </div>
                    <div class="max-w-xs rounded-xl overflow-hidden shadow-lg">
                        <img
                            class="w-full"
                            src="./images/image 2.avif"
                            alt="Sunset in the mountains"
                        />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">
                                The Coldest Sunset
                            </div>
                            <p class="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Voluptatibus quia, nulla!
                                Maiores et perferendis eaque, exercitationem
                                praesentium nihil.
                            </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                #photography
                            </span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                #travel
                            </span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                #winter
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-16 mt-5 justify-center">
                    <div class="max-w-xs rounded-xl overflow-hidden shadow-lg">
                        <img
                            class="w-full"
                            src="./images/image 2.avif"
                            alt="Sunset in the mountains"
                        />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">
                                The Coldest Sunset
                            </div>
                            <p class="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Voluptatibus quia, nulla!
                                Maiores et perferendis eaque, exercitationem
                                praesentium nihil.
                            </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                #photography
                            </span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                #travel
                            </span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                #winter
                            </span>
                        </div>
                    </div>
                    <div class="max-w-xs rounded-xl overflow-hidden shadow-lg">
                        <img
                            class="w-full"
                            src="./images/image 2.avif"
                            alt="Sunset in the mountains"
                        />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">
                                The Coldest Sunset
                            </div>
                            <p class="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Voluptatibus quia, nulla!
                                Maiores et perferendis eaque, exercitationem
                                praesentium nihil.
                            </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                #photography
                            </span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                #travel
                            </span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                #winter
                            </span>
                        </div>
                    </div>
                    <div class="max-w-xs rounded-xl overflow-hidden shadow-lg">
                        <img
                            class="w-full"
                            src="./images/image 2.avif"
                            alt="Sunset in the mountains"
                        />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">
                                The Coldest Sunset
                            </div>
                            <p class="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Voluptatibus quia, nulla!
                                Maiores et perferendis eaque, exercitationem
                                praesentium nihil.
                            </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                #photography
                            </span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                #travel
                            </span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                #winter
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto relative py-4 z-0">
                <div className="h-auto relative">
                    <img
                        src="/images/one.jpg"
                        alt="Application Logo"
                        className="w-full h-auto shadow-lg"
                        style={{ maxHeight: "38rem" }}
                    />
                    <div className="absolute inset-0 flex flex-col items-le justify-center p-8 mb-16 gap-7">
                        <div className="flex flex-col gap-16">
                            <p className="text-white text-6xl font-blod ">
                                Low fees, high impact
                            </p>
                            <div className="w-1/2">
                                <p className="text-white text-3xl">
                                    All the good we do in the world is made
                                    possible by our diverse community of event
                                    hosts. We couldn’t do it without you!
                                </p>
                            </div>
                        </div>

                        <div>
                            <Link
                                href=""
                                className="bg-blue-900 py-2 px-4 text-white text-center rounded shadow transition-all hover:bg-gray-200 hover:text-blue-900 mr-2 inline-block"
                            >
                                Get Started Now
                            </Link>
                        </div>
                    </div>
                </div>
                <section className="absolute mt-[-1rem] z-10 w-full flex justify-center gap-10">
                    <div className="bg-white w-72  rounded-md shadow-md p-5 flex flex-col  gap-8 border-t-8 border-blue-900 h-52">
                        <div className="flex flex-row items-center  border-b-2 border-black">
                            <p className="flex-grow font-bold mb-5 text-center text-2xl">
                                Free events
                            </p>
                        </div>
                        <div className="text-center">
                            <p className="text-1xl">Zero fees</p>
                        </div>
                    </div>
                    <div className="bg-white w-72  rounded-md shadow-md p-5 flex flex-col  gap-8 border-t-8 border-blue-900 h-52">
                        <div className="flex flex-row items-center  border-b-2 border-black">
                            <p className="flex-grow font-bold mb-5 text-center text-2xl">
                                Standard
                            </p>
                        </div>
                        <div className="text-center">
                            <p className="text-1xl">
                                3.5% + $0.99 Per paid ticket
                            </p>
                        </div>
                    </div>
                    <div className="bg-white w-72  rounded-md shadow-md p-5 flex flex-col  gap-8 border-t-8 border-blue-900 h-52">
                        <div className="flex flex-row items-center  border-b-2 border-black">
                            <p className="flex-grow font-bold mb-5 text-center text-2xl">
                                Charities & Schools
                            </p>
                        </div>
                        <div className="text-center">
                            <p className="text-1xl">
                                2% + $0.3 Per paid ticket
                            </p>
                        </div>
                    </div>
                </section>
            </section>
            <Footerpage />
        </div>
    );
}
