import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import Navbar from "@/Components/Navbar";
import { Link } from "@inertiajs/react";
import Footerpage from "@/Components/Footerpage";

export default function contact({ children, auth }) {

    function Contactform() {
          return (
                <div className="m-36">
                <form>
                    <div className="flex flex-wrap justify-center">
                    <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-2">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input type="text" id="name" name="name" className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:ring focus:ring-blue-200" />
                    </div>
                    <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pl-2">
                        <label htmlFor="familyName" className="block text-sm font-medium text-gray-700 mb-1">Family Name</label>
                        <input type="text" id="familyName" name="familyName" className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:ring focus:ring-blue-200" />
                    </div>
                    </div>
                    <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input type="text" id="phone" name="phone" className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:ring focus:ring-blue-200" />
                    </div>
                    <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" id="email" name="email" className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:ring focus:ring-blue-200" />
                    </div>
                    <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea id="message" name="message" rows="4" className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:ring focus:ring-blue-200"></textarea>
                    </div>
                    <div className="flex items-center justify-center">
                        <button type="submit" className="flex items-center justify-center bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
                            <span className="mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M2.293 7.293a1 1 0 0 1 1.414-1.414L10 12.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1-0.001-1.415z" clipRule="evenodd" />
                                </svg>
                            </span>
                            Send Message
                        </button>
                    </div>
                </form>
                </div>

          );
        }
    
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
            <div className="flex items-center justify-center m-10">
                     <p className="text-4xl font-bold text-sky-600 dark:text-white">Contact us</p>
            </div>
            <div>
                <Contactform/>
            </div>
            <div>
                <Footerpage/>
            </div>
        </div>
    );
}