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
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar
        auth={auth}
        notifcart={notifcart}
        countcart={countcart}
        clickedEvents={clickedEvents}
        header={
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-xl text-white dark:text-gray-200 leading-tight">
              {`Event "${evenement.titre}"`}
            </h2>
          </div>
        }
      />
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <img
              src={evenement.cover_path}
              alt=""
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">{evenement.titre}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <InputLabel
                    label="Event Localisation"
                    value={evenement.localisation}
                  />
                  <InputLabel
                    label="Event Start Date"
                    value={evenement.start_date}
                  />
                  <InputLabel
                    label="Event End Date"
                    value={evenement.end_date}
                  />
                  <InputLabel label="Return" value={evenement.return} />
                  <InputLabel label="Prix" value={evenement.prix} />
                  <InputLabel label="Capacity" value={evenement.capacity} />
                </div>
                <div>
                  <InputLabel
                    label="Created By"
                    value={evenement.created_by.name}
                  />
                  <InputLabel
                    label="Create Date"
                    value={evenement.created_at}
                  />
                </div>
              </div>
              <div className="mt-4">
                <InputLabel
                  label="Event Description"
                  value={evenement.description}
                />
              </div>
              <div className="mt-4">
                <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleClick}
                >
                  Buy Ticket
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footerpage />
    </div>
  );
}

const InputLabel = ({ label, value }) => {
  let displayValue = value;
  if (label === "Return") {
    displayValue = value === 1 ? "Yes" : "No";
  }

  return (
    <div className="mt-4">
      <label className="font-bold text-lg">{label}</label>
      <p className="mt-1">{displayValue}</p>
    </div>
  );
};
