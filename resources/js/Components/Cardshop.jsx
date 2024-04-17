export default function Cardshop({ event }) {
    return (
        <div className="max-w-xs rounded-xl overflow-hidden shadow-lg w-64 cursor-pointer" onClick={() => console.log('hello')}>
            <img
                className="w-full"
                src={event.logo_path}
                alt="Sunset in the mountains"
            />
            <div className="px-6 py-4 flex flex-col gap-2">
                <div className="font-bold text-xl mb-2 text-blue-900 h-16 overflow-hidden">
                    {event.titre}
                </div>
                <div className="flex items-center text-sm h-10 overflow-hidden ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                        />
                    </svg>
                    <p className="font-bold h-full overflow-hidden">{event.localisation}</p>
                </div>
                <div className="font-bold text-sm mb-2">
                    Date : {event.start_date}
                </div>
                <div className="inline-block text-white font-bold text-xs p-1 rounded-md bg-clip-text">
                    <span className="bg-blue-900 p-1 rounded-md">{event.category}</span>
                </div>

                <div className="flex justify-between items-center">
                    <div className="text-sm">
                        <p className="font-bold">From :</p>
                        <p className="font-bold text-blue-900 text-2xl">10$</p>
                    </div>
                    <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Buy
                    </button>
                </div>
            </div>
        </div>
    );
}
