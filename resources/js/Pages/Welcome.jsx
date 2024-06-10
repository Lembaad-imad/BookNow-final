import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import Footerpage from "@/Components/Footerpage";
import NavLink from "@/Components/NavLink";
import Navbar from "@/Components/Navbar";
import { Link } from "@inertiajs/react";

export default function Welcome({ children, auth }) {
    console.log(auth);
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 ">
            <nav className="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
                <div className="">
                   <Navbar auth={auth}/>
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
                                href={route("event.create")}
                                className="bg-white py-2 px-4 text-blue-900 border text-center font-bold border-blue-900 rounded shadow transition-all hover:bg-gray-200 mr-2 inline-block w-28 h-10"
                            >
                                CREATE
                            </Link>

                            <Link
                                 href={route("event.index")}
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
                                    className="bg-blue-900 py-3 px-4 text-white text-center rounded shadow transition-all hover:bg-gray-200 inline-block w-28 h-10 sm:w-auto sm:h-12"
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
                                    className="bg-blue-900 py-3 px-4 text-white text-center rounded shadow transition-all hover:bg-gray-200 inline-block w-28 h-10 sm:w-auto sm:h-12"
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
                                    className="bg-blue-900 py-3 px-4 text-white text-center rounded shadow transition-all hover:bg-gray-200 hover:text-blue-900 inline-block w-28 h-10 sm:w-auto sm:h-12"
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
                {/* <section className="absolute mt-[-1rem] z-10 w-full flex justify-center gap-10">
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
                </section> */}
            </section>
            <Footerpage />
        </div>
    );
}
