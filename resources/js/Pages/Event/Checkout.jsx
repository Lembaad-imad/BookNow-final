import Footerpage from "@/Components/Footerpage";
import useCheckedEvent from "@/zustand/CheckedEvent";
import Navbar from "@/Components/Navbar";
import { useEffect, useState } from "react";
import { Link, useForm } from "@inertiajs/react";

export default function Checkout({ auth }) {
  const { clickedEvents, removeFromCart } = useCheckedEvent((state) => ({
    clickedEvents: state.clickedEvents,
    removeFromCart: state.removeFromCart,
  }));

  const [eventQuantities, setEventQuantities] = useState({});
  const [couponValue, setCouponValue] = useState();
  const [totalPrice, setTotalprice] = useState({});
  const [totalPriceAfterDiscount, setTotalPriceAfterDiscount] = useState({});
  const [idevent, setIdevent] = useState();
  const [listCodeCoupon, setListCodeCoupon] = useState({});
  const [ticket, setTciekt] = useState({});

  useEffect(() => {
    const initialQuantities = clickedEvents.reduce(
      (acc, event) => ({
        ...acc,
        [event.id]: 1,
      }),
      {}
    );
    setEventQuantities(initialQuantities);
  }, [clickedEvents]);
  console.log(eventQuantities)

  useEffect(() => {
    const newTotalPrices = {};
    clickedEvents.forEach((event) => {
      const quantity = eventQuantities[event.id] || 1;
      newTotalPrices[event.id] = (quantity * parseFloat(event.prix)).toFixed(2);
    });
    setTotalprice(newTotalPrices);
    const newTicketData = {};
    clickedEvents.forEach((event) => {
      const quantity = eventQuantities[event.id] || 1;

      const promoCodes = listCodeCoupon[event.id] || []; 
      let idcoupon = null;
    
      promoCodes.forEach((promoCode) => {
        if (promoCode.name === couponValue) {
          idcoupon = promoCode.id;
        }
      });
      const priceid = totalPriceAfterDiscount[event.id] || totalPrice[event.id];

      newTicketData[event.id] = {
        eventId: event.id,
        idCoupon: idcoupon,
        totalPrice: priceid, 
        ticketQuantity: quantity,
      };
    });

    setTciekt((prevTicket) => ({
      ...prevTicket,
      ...newTicketData, 
    }));
  },  [eventQuantities, clickedEvents, listCodeCoupon ]);

console.log(ticket)
  const TotalPrice = parseFloat(
    Object.values(totalPrice)
      .reduce((sum, price) => sum + parseFloat(price), 0)
      .toFixed(2)
  );

  const handleChangeQuantity = (id, value) => {
    const quantity = value || 1;
    setEventQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: quantity,
    }));
    
  };
  console.log(clickedEvents)

  const handleClickRemove = (id) => {
    removeFromCart(id);
    setEventQuantities((prevQuantities) => {
      const updatedQuantities = { ...prevQuantities };
      delete updatedQuantities[id];
      return updatedQuantities;
    });
  };

  const handleClickCouponButton = (eventId) => {
    setIdevent(eventId);
    const event = clickedEvents.find((e) => e.id === eventId);

    if (event && event.codepromos) {
      setListCodeCoupon({ ...listCodeCoupon, [eventId]: event.codepromos });
    }
  };
  console.log(listCodeCoupon);

  useEffect(() => {
    const applyCouponDiscount = () => {
      if (!idevent || !listCodeCoupon[idevent]) return;
  
      const eventCodes = listCodeCoupon[idevent];
      const foundCoupon = eventCodes.find((code) => code.name === couponValue);
  
      if (foundCoupon) {
        const percentageDiscount = foundCoupon.percentage / 100;
        const originalPrice = totalPrice[idevent];
        const discountedPrice = originalPrice - (originalPrice * percentageDiscount);
        const formattedDiscountedPrice = parseFloat(discountedPrice).toFixed(2);
  
        setTotalPriceAfterDiscount(prevTotalPriceAfterDiscount => ({
          ...prevTotalPriceAfterDiscount,
          [idevent]: formattedDiscountedPrice,
        }));
      }
    };
  
    applyCouponDiscount();
  
  }, [listCodeCoupon, idevent, couponValue, totalPrice]);
  

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 ">
      <Navbar
        auth={auth}
        header={
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-xl text-white dark:text-gray-200 leading-tight">
              Checkout
            </h2>
          </div>
        }
      />
      <div className="py-6">
        <div className="max-w-full mx-auto sm:px-6 lg:px-8">
          <div className="p-2 text-gray-900 dark:text-gray-100">
            <div className="h-screen  pt-20">
              <h1 className="mb-10 text-center text-2xl font-bold">
                Events List
              </h1>
              <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                <div className="rounded-lg  overflow-y-scroll no-scrollbar md:w-2/3 h-96">
                  {clickedEvents.map((event) => (
                    <div
                      key={event.id}
                      className="justify-between flex-col gap-5 mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                    >
                      <div className="flex">
                        <img
                          src={event.logo_path}
                          alt={event.titre}
                          className="w-full rounded-lg sm:w-40"
                        />
                        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                          <div className="mt-5 sm:mt-0">
                            <h2 className="text-lg font-bold text-gray-900">
                              {event.titre}
                            </h2>
                            <p className="mt-1 text-xs text-gray-700">
                              {event.localisation}
                            </p>
                          </div>
                          <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                            <div className="flex items-center border-gray-100">
                              <button
                                className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100  hover:text-blue-50"
                                onClick={() =>
                                  handleChangeQuantity(
                                    event.id,
                                    Math.max(
                                      0,
                                      (eventQuantities[event.id] || 0) - 1
                                    )
                                  )
                                }
                              >
                                -
                              </button>
                              <input
                                className="h-8 w-10 border bg-white text-center text-xs outline-none"
                                type="text"
                                value={eventQuantities[event.id]}
                                min="0"
                                onChange={(e) =>
                                  handleChangeQuantity(
                                    event.id,
                                    parseInt(e.target.value)
                                  )
                                }
                              />
                              <button
                                className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                                onClick={() =>
                                  handleChangeQuantity(
                                    event.id,
                                    (eventQuantities[event.id] || 0) + 1
                                  )
                                }
                              >
                                +
                              </button>
                            </div>
                            <div className="flex items-center space-x-4">
                              <div className="flex flex-col gap-2">
                                <p
                                  className={
                                    !totalPriceAfterDiscount[event.id]
                                      ? "text-sm"
                                      : "line-through"
                                  }
                                >
                                  {totalPrice[event.id]}$
                                </p>
                                {totalPriceAfterDiscount[event.id] && (
                                  <p className="text-1xl font-bold text-green-600 ">
                                    {totalPriceAfterDiscount[event.id]}$
                                  </p>
                                )}
                              </div>

                              <svg
                                onClick={() => handleClickRemove(event.id)}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div></div>
                      </div>
                      <div className="">
                        <div class="flex items-center w-full h-13 pl-3 border rounded-md">
                          <input
                            type="coupon"
                            name="code"
                            id="coupon"
                            placeholder="Apply coupon"
                            onChange={(e) => setCouponValue(e.target.value)}
                            class="w-full  outline-none appearance-none focus:outline-none active:outline-none"
                            disabled={
                              totalPriceAfterDiscount[event.id] ? true : false
                            }
                          />
                          <button
                            onClick={() => handleClickCouponButton(event.id)}
                            type="submit"
                            class="text-sm flex items-center px-3 py-1 text-white bg-blue-900 rounded-md outline-none md:px-4 hover:bg-gray-700 focus:outline-none active:outline-none"
                          >
                            <svg
                              aria-hidden="true"
                              data-prefix="fas"
                              data-icon="gift"
                              class="w-8"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path
                                fill="currentColor"
                                d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z"
                              />
                            </svg>
                            <span class="font-medium">Apply coupon</span>
                          </button>
                        </div>
                        <div className="mt-2">
                          {!totalPriceAfterDiscount[event.id] && idevent ? (
                            <p className="text-red-800">
                              Code Coupon not found
                            </p>
                          ) : totalPriceAfterDiscount[event.id] ? (
                            <p className="text-green-800">
                              Congratulation you saved{" "}
                              <span className="font-bold">
                                {(
                                  totalPrice[event.id] -
                                  totalPriceAfterDiscount[event.id]
                                ).toFixed(2)}{" "}
                                $
                              </span>
                            </p>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  ))}
                  <div class="justify-center md:flex"></div>
                </div>

                <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                  <div className="mb-2 flex justify-between">
                    <p className="text-gray-700">Subtotal</p>
                    <p className="text-gray-700">${TotalPrice}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray-700">Discound</p>
                    <p className="text-gray-700 line-through">-$4.99</p>
                  </div>
                  <hr className="my-4" />
                  <div className="flex justify-between">
                    <p className="text-lg font-bold">Total</p>
                    <div>
                      <p className="mb-1 text-lg font-bold">
                        ${TotalPrice} USD
                      </p>
                    </div>
                  </div>

                  <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                    <Link href={route("paymentevent.index", { eventQuantities ,clickedEvents})}>
                      Check out
                    </Link>
                  </button>
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
