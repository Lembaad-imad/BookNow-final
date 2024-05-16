// src/components/PaymentForm.js
import Footerpage from "@/Components/Footerpage";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Navbar from "@/Components/Navbar";
import TextInput from "@/Components/TextInput";
import { Link } from "@inertiajs/react";
import React from "react";

function PaymentForm({ auth }) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 ">
      <Navbar
        auth={auth}
        header={
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-xl text-white dark:text-gray-200 leading-tight">
              Payment
            </h2>
          </div>
        }
      />
      <div className="py-6">
        <div className="max-w-full mx-auto sm:px-6 lg:px-8">
          <div className="p-2 text-gray-900 dark:text-gray-100">
            <div className=" pt-20">
              <div className="font-sans bg-white">
                <div className="max-lg:max-w-xl mx-auto w-full">
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 max-lg:order-1 p-6 max-w-4xl mx-auto w-full">
                      <div className="text-center max-lg:hidden">
                        <h2 className="text-3xl font-extrabold text-[#333] inline-block border-b-4 border-[#333] pb-1">
                          Checkout
                        </h2>
                      </div>
                      <form className="lg:mt-12">
                        <div>
                          <h2 className="text-2xl font-extrabold text-blue-900">
                            Shipping info
                          </h2>
                          <div className="grid grid-cols-2 gap-6 mt-8">
                            <div className="mt-4">
                              <TextInput
                                id="name"
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="mt-1 block w-full"
                              />

                              <InputError message="" className="mt-2" />
                            </div>
                            <div className="mt-4">
                            <TextInput
                              id="email"
                              type="text"
                              name="email"
                              placeholder="Address Email"
                              className="mt-1 block w-full"
                            />

                            <InputError message="" className="mt-2" />
                          </div>
                          </div>
                        </div>
                        <div className="mt-12">
                          <h2 className="text-2xl font-extrabold text-blue-900">
                            Payment method
                          </h2>
                          <div className="grid gap-4 sm:grid-cols-2 mt-8">
                            <div className="flex items-center">
                              <input
                                type="radio"
                                className="w-5 h-5 cursor-pointer"
                                id="card"
                                checked
                              />
                              <label
                                htmlFor="card"
                                className="ml-4 flex gap-2 cursor-pointer"
                              >
                                <img
                                  src="https://readymadeui.com/images/visa.webp"
                                  className="w-12"
                                  alt="card1"
                                />
                                <img
                                  src="https://readymadeui.com/images/american-express.webp"
                                  className="w-12"
                                  alt="card2"
                                />
                                <img
                                  src="https://readymadeui.com/images/master.webp"
                                  className="w-12"
                                  alt="card3"
                                />
                              </label>
                            </div>
                          
                          </div>
                          <div className="grid gap-6 mt-8">
                          <div className="mt-4">
                            <TextInput
                              id="cardname"
                              type="text"
                              name="cardname"
                              placeholder="Cardholder's Name"
                              className="mt-1 block w-full"
                            />

                            <InputError message="" className="mt-2" />
                          </div>
                          <div className="mt-4">
                            <TextInput
                              id="cardnumber"
                              type="text"
                              name="cardnumber"
                              placeholder="Card Number"
                              className="mt-1 block w-full"
                            />

                            <InputError message="" className="mt-2" />
                          </div>
                        
                            <div className="grid grid-cols-2 gap-6">
                            <div className="mt-4">
                            <TextInput
                              id="exp"
                              type="text"
                              name="exp"
                              placeholder="EXP."
                              className="mt-1 block w-full"
                            />

                            <InputError message="" className="mt-2" />
                          </div>
                          <div className="mt-4">
                            <TextInput
                              id="cvv"
                              type="password"
                              name="cvv"
                              placeholder="CVV"
                              className="mt-1 block w-full"
                            />

                            <InputError message="" className="mt-2" />
                          </div>
                            
                            </div>
                            <div className="flex items-center">
                              <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                              />
                              <label
                                htmlFor="remember-me"
                                className="ml-3 block text-sm"
                              >
                                I accept the{" "}
                                <a
                                  href="javascript:void(0);"
                                  className="text-blue-600 font-semibold hover:underline ml-1"
                                >
                                  Terms and Conditions
                                </a>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-4 mt-8">
                          <Link
                            type="button"
                            href={route("Checkout")}
                            className="min-w-[150px] px-6 py-3.5 text-sm bg-gray-100 text-[#333] rounded-md hover:bg-gray-200"
                          >
                            Back
                          </Link>
                          <button
                            type="button"
                            className="min-w-[150px] px-6 py-3.5 text-sm bg-blue-900 text-white rounded-md hover:bg-[#111]"
                          >
                            Confirm payment $240
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="bg-gray-100 lg:h-screen lg:sticky lg:top-0">
                      <div className="relative h-full">
                        <div className="p-8 lg:overflow-auto lg:h-[calc(100vh-60px)] max-lg:mb-8">
                          <h2 className="text-2xl font-extrabold text-[#333]">
                            Order Summary
                          </h2>
                          <div className="space-y-6 mt-10">
                            {/* Order summary items */}
                          </div>
                        </div>
                        <div className="absolute left-0 bottom-0 bg-gray-200 w-full p-4">
                          <h4 className="flex flex-wrap gap-4 text-base text-[#333] font-bold">
                            Total <span className="ml-auto">$240.00</span>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footerpage />
    </div>
  );
}

export default PaymentForm;
