import Footerpage from "@/Components/Footerpage";
import Navbar from "@/Components/Navbar";
import React, { useEffect, useState } from "react";

export default function Show({ auth, evenement }) {
    const [notifcart, setNotifCart] = useState(
        localStorage.getItem('notifcart') === 'true'
      );
      const [countcart, setCountCart] = useState(
        parseInt(localStorage.getItem('countcart')) || 0
      );
      const [clickedEvents, setClickedEvents] = useState(
        JSON.parse(localStorage.getItem('clickedEvents')) || []
      );
    
      useEffect(() => {
        localStorage.setItem('notifcart', notifcart);
        localStorage.setItem('countcart', countcart);
        localStorage.setItem('clickedEvents', JSON.stringify(clickedEvents));
      }, [notifcart, countcart, clickedEvents]);
      
    console.log(clickedEvents);
      const handleClick = () =>{
        if (!clickedEvents.some(event => event.id === evenement.id)) {
          setClickedEvents([...clickedEvents, evenement]);
          setNotifCart(true);
          setCountCart(countcart + 1);
        }
      }
  return (
        <section className="relative">
            <Navbar
                auth={auth}
                notifcart={notifcart}
                countcart={countcart}
                clickedEvents={clickedEvents}
                header={
                <div className="">
                    <h2 className="font-semibold text-center text-xl text-white dark:text-gray-200 ">
                    {`Event "${evenement.titre}"`}
                    </h2>
                </div>
                }
            />
                <div className="w-full mx-auto py-4 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mx-auto max-md:px-2">
                        <div className="img">
                            <div className="img-box h-full max-lg:mx-auto">
                                <img src={evenement.cover_path} alt="pasd'mage" className="max-lg:mx-auto lg:ml-auto h-full rounded-lg	" />
                            </div>
                        </div>
                        <div className="data w-full lg:pr-8 pr-0 xl:justify-start justify-center flex items-center max-lg:pb-10 xl:my-2 lg:my-5 my-0">
                            <div className="data w-full max-w-xl">
                                <h2 className="font-manrope font-bold text-3xl leading-10 text-blue-900 mb-2 capitalize ">{evenement.titre}</h2>
                                <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                                    <h6 className="font-manrope font-extrabold text-2xl leading-9 text-gray-900 pr-5 sm:border-r border-gray-200 ">{evenement.prix} $ </h6>
                                    <div className="flex items-center ">
                                        <div className="flex items-center gap-1">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            </svg>
                                        </div>
                                        <span className="font-normal leading-7 text-gray-500 text-sm">Créé par :  {evenement.created_by.name}</span>
                                    </div>
                                </div>
                                <p className="text-base font-semibold text-blue-900">Description :</p>
                                <p className="text-gray-500 text-base font-normal mb-5">{evenement.description}</p>
                                <p className="text-base font-semibold text-blue-900">Localisation de l'événement :</p>
                                <p className="text-gray-500 text-base font-normal mb-5">{evenement.localisation}</p>
                                <div className="flex justify-between">
                                    <p className="text-base font-semibold text-blue-900 mr-10">Date de début de l'événement</p>
                                    <p className="text-base font-semibold text-blue-900 mr-1">Date de fin de l'événement</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="text-gray-500 text-base font-normal mb-5 ">{evenement.start_date}</p>
                                    <p className="text-gray-500 text-base font-normal mb-5 mr-28">{evenement.end_date}</p>
                                </div>
                                <div className="flex justify-between">
                                     <p className="text-base font-semibold text-blue-900">Capacité</p>
                                     <p className="text-base font-semibold text-blue-900 mr-2">Date de création</p>
                                     <p className="text-base font-semibold text-blue-900">Retour</p>
                                </div>
                                <div className="flex justify-between">
                                     <p className="text-gray-500 text-base font-normal mb-5">{evenement.capacity}</p>
                                     <p className="text-gray-500 text-base font-normal mb-5 ">{evenement.created_at}</p>
                                     <p className="text-gray-500 text-base font-normal mb-5 mr-10">{evenement.return}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-end justify-end mr-40  mt-8">
          <button onClick={handleClick} className="absolute text-center  w-96 h-12 px-5 py-4 rounded-[100px] bg-indigo-600 flex items-center justify-center font-semibold text-lg text-white shadow-sm transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400">
              <svg className="w-6 h-6 mr-2" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path>
              </svg>
              Buy Now
          </button>
      </div>
      <Footerpage />
      </section>

  );
}

// const InputLabel = ({ label, value }) => {
//   let displayValue = value;
//   if (label === "Return") {
//     displayValue = value === 1 ? "Yes" : "No";
//   }

//   return (
//     <div className="mt-4">
//       <label className="font-bold text-lg">{label}</label>
//       <p className="mt-1">{displayValue}</p>
//     </div>
//   );
// };
