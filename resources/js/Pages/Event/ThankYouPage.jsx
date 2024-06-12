import React from 'react';
import Navbar from "@/Components/Navbar";
import Footerpage from "@/Components/Footerpage";

function ThankYouPage({ auth }) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar
        auth={auth}
        header={
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-xl text-white dark:text-gray-200 leading-tight">
              Thank You
            </h2>
          </div>
        }
      />
      <div className="py-6">
        <div className="max-w-full mx-auto sm:px-6 lg:px-8">
          <div className="p-2 text-gray-900 dark:text-gray-100">
            <div className="pt-20 text-center">
              <h1 className="text-4xl font-bold text-blue-900">Thank You for Your Purchase!</h1>
              <p className="mt-4 text-lg">We appreciate your business. Come visit us again!</p>
              <div className="mt-8">
                <a
                  href="/"
                  className="px-6 py-3 text-white bg-blue-900 rounded-md hover:bg-blue-700"
                >
                  Go to Homepage
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footerpage />
    </div>
  );
}

export default ThankYouPage;
