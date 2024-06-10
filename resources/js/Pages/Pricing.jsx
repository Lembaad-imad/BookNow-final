import ApplicationLogo from "@/Components/ApplicationLogo";
import Footerpage from "@/Components/Footerpage";
import Navbar from "@/Components/Navbar";
import NavLink from "@/Components/NavLink";
import { Link } from "@inertiajs/react";
import React, { useState, useEffect } from 'react';
function FeeCalculator() {
    const [ticketPrice, setTicketPrice] = useState(0);
    const [quantity, setQuantity] = useState(1); 
    const [totalAmount, setTotalAmount] = useState(0);
    const [feeType, setFeeType] = useState("standard"); 
    useEffect(() => {
        const total = calculatePayment(ticketPrice, quantity, feeType);
        setTotalAmount(total);
    }, [ticketPrice, quantity, feeType]);

    const handleTicketPriceChange = (event) => {
        const price = parseFloat(event.target.value);
        setTicketPrice(price);
    };

    const handleQuantityChange = (event) => {
        const qty = parseInt(event.target.value);
        setQuantity(qty);
    };

    const handleFeeTypeChange = (selectedType) => {
        setFeeType(selectedType);
    };

    const calculatePayment = (price, qty, type) => {
        let feePercentage;
        if (type === "standard") {
            feePercentage = 0.035;
        } else if (type === "charity") {
            feePercentage = 0.02;
        } else {
            throw new Error("Invalid fee type.");
        }
        const subtotal = price * qty;
        const feeAmount = subtotal * feePercentage;
        const totalAmount = subtotal + feeAmount;
        return totalAmount;
    };
    
    return (
        <section className="flex m-16 bg-gradient-to-r from-teal-600 via-teal-400 to-teal-200 p-6 rounded-lg shadow-md">
            <div className="w-1/2 bg-white p-6 rounded-t-sm rounded-lg shadow-md">
                <form className="mt-8">
                    <div className="flex flex-col space-y-4">
                        <label className="text-black text-2xl font-semibold m-2">Type</label>
                        <div className="flex justify-between ">
                            <button type="button" className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg w-1/2 hover:bg-teal-600 hover:text-white focus:outline-none focus:bg-teal-600 flex items-center justify-center space-x-2" onClick={() => handleFeeTypeChange('standard')}>Standard</button>
                            <button type="button" className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg w-1/2 hover:bg-teal-600 hover:text-white focus:outline-none focus:bg-teal-600 ml-2" onClick={() => handleFeeTypeChange('charity')}>Charities & Schools</button>
                        </div>
                        <div className="flex justify-between">
                            <div className="w-1/2 relative mt-2">
                                <label className="text-black text-2xl font-semibold m-2">Ticket Price</label>
                                <div className="flex justify-between ">
                                    <input type="number" className="border border-gray-300 rounded-lg px-4 py-2 pl-10 mt-4" placeholder="Ticket Price" value={ticketPrice} onChange={handleTicketPriceChange} />
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                                        <i className="fas fa-dollar-sign text-gray-400"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="relative mt-2">
                                <label className="text-black text-2xl font-semibold mb-2">Total tickets</label>
                                <div className="flex justify-between">
                                    <input type="number" className="border border-gray-300 rounded-lg px-4 py-2 pl-10 mt-4" placeholder="Quantity" value={quantity} onChange={handleQuantityChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className="w-1/2">
                <div className="flex flex-col justify-end">
                    <p className="text-right text-4xl font-bold text-white mr-40 mt-10">Your estimated <br /><span className="mr-12 text-white">payout:</span> <br /></p>
                    <span className="text-right text-6xl mt-10 font-black text-white mr-36">US$ {totalAmount.toFixed(2)}</span><br />
                    <div className="flex justify-between ml-20">
                        <div>
                            <p className="font-bold mb-5 text-center text-white text-2xl mr-20">Attendees pay</p>
                        </div>
                        <div>
                            <p className="font-black mb-5 text-center text-white mr-20 text-2xl">Ticketing fee</p>
                        </div>
                    </div>
                    <div className="flex justify-between ml-20">
                        <div>
                            <p className="font-bold mb-5 text-center text-white text-xl ">US$ {(ticketPrice * quantity).toFixed(2)}</p>
                        </div>
                        <div>
                            <p className="font-black mb-5 text-center text-white mr-20 text-xl">US$ {(totalAmount - (ticketPrice * quantity)).toFixed(2)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default function Welcome({ children, auth }) {
    console.log(auth)
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 ">
            <nav className="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
                <div className="">
                   <Navbar auth={auth}/>
                </div>
            </nav>
            <section className="max-w-7xl mx-auto relative py-4 mb-8">
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
            <section className=" mt-[-1rem] z-10 w-full flex justify-center gap-10 mb-8>">
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
                            2% + $0.3 Per paid ticket
                        </p>
                    </div>
                </div>
            </section>
            <div className="text-center mt-16">
                <p className="text-4xl font-bold text-gray-900 dark:text-white">Ticket fee calculator</p>
                <p className="text-xl text-gray-900 font-extralight dark:text-white">Enter your ticket details to see your full costs.</p>
            </div>
            <FeeCalculator />
            <div className="flex items-center justify-center">
                <button className="bg-teal-600 text-gray-100 px-12 py-2 rounded-lg text-sm hover:bg-gray-100 hover:text-black focus:outline-none focus:bg-gray-100 mb-10">
                    Get Started For Free
                </button>
            </div>
        <Footerpage/>
        </div>

    );
}