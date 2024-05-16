import CodePromos from "@/Components/CodePromos";
import CodePromosEdit from "@/Components/CodePromosEdit";
import DecisionAdmin from "@/Components/DecisionAdmin";
import Footerpage from "@/Components/Footerpage";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Navbar from "@/Components/Navbar";
import SelectInput from "@/Components/SelectInput";
import TableCodePromos from "@/Components/TableCodePromos";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, useForm } from "@inertiajs/react";
import { useState } from "react";
import TomSelect from "tom-select";
export default function Create({ auth, allCategories,event }) {
  const [showModal, setShowModal] = useState(false);
  const [idCodePromos, setIdCodePromos] = useState();
  const [showModalEdit, setShowModalEdit] = useState(false);
  const { data, setData, post, errors, reset } = useForm({
    titre:  event.titre || '',
    localisation: event.localisation || '',
    start_date: event.start_date || '',
    end_date: event.end_date || '',
    logo_path:  "",
   
    cover_path: "",
    description: event.description || '',
    return: event.return || '',
    capacity: event.capacity || '',
    prix: event.prix || '',
    _method: "put",
  });
  console.log(event.codepromos);
  const onSubmit = (e) => {
    e.preventDefault();
    post(route("eventlist.update",event));
  };
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const toggleModalEdit = () => {
    setShowModalEdit(!showModalEdit);
  };
  console.log(event.status)
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 ">
      <Navbar
        auth={auth}
        header={
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-xl text-white dark:text-gray-200 leading-tight">
            Edit Event "{event.titre}"
            </h2>
          </div>
        }
      />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <form
                onSubmit={onSubmit}
                className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg"
              >
               
                  <div >
                  <h1 >
                    
                    Event Status : <span 
                    className={ event.status ==="pending" ? "text-orange-300 font-bold text-xl" : event.status ==="approved" ? "text-green-600 font-bold text-xl" :"text-red-600 font-bold text-xl" }>
                      {event.status}
                      </span>  
                      </h1>
                   
                  </div>
                  <div className="mt-4">
                    <div className="flex gap-10">
                      <button className="bg-green-800 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600">Approved</button>
                      <button className="bg-red-800 py-1 px-3 text-white rounded shadow transition-all hover:bg-red-600">Unapproved</button>
                    </div>
                    <p>Di</p>
                    
                    <div  className="mt-4">
                    <TextAreaInput
                    id="description"
                    name="description"
                    value={data.description}
                    className="mt-1 block w-full"
                    onChange={(e) => setData("description", e.target.value)}
                  />
                  </div>
                  </div>
                <div className="mt-4">
                  <InputLabel htmlFor="event_title" value="Event Title" />

                  <TextInput
                    id="titre"
                    type="text"
                    name="titre"
                    value={data.titre}
                    className="mt-1 block w-full"
                    isFocused={true}
                    onChange={(e) => setData("titre", e.target.value)}
                  />

                  <InputError message={errors.titre} className="mt-2" />
                </div>
                <div className="mt-4">
                  <InputLabel
                    htmlFor="event_localisation"
                    value="Event Localisation"
                  />

                  <TextInput
                    id="localisation"
                    type="text"
                    name="localisation"
                    value={data.localisation}
                    className="mt-1 block w-full"
                    isFocused={true}
                    onChange={(e) => setData("localisation", e.target.value)}
                  />

                  <InputError message={errors.localisation} className="mt-2" />
                </div>
                <div className="mt-4">
                  <InputLabel
                    htmlFor="event_datedebut"
                    value="Event Date Debut"
                  />

                  <TextInput
                    id="start_date"
                    type="date"
                    name="start_date"
                    value={data.start_date}
                    className="mt-1 block w-full"
                    onChange={(e) => setData("start_date", e.target.value)}
                  />

                  <InputError message={errors.start_date} className="mt-2" />
                </div>
                <div className="mt-4">
                  <InputLabel htmlFor="event_datefin" value="Event Date Fin" />

                  <TextInput
                    id="end_date"
                    type="date"
                    name="end_date"
                    value={data.end_date}
                    className="mt-1 block w-full"
                    onChange={(e) => setData("end_date", e.target.value)}
                  />

                  <InputError message={errors.end_date} className="mt-2" />
                </div>
                <div className="mt-4">
                  <InputLabel
                    htmlFor="event_description"
                    value="Event Description"
                  />

                  <TextAreaInput
                    id="description"
                    name="description"
                    value={data.description}
                    className="mt-1 block w-full"
                    onChange={(e) => setData("description", e.target.value)}
                  />

                  <InputError message={errors.description} className="mt-2" />
                </div>
                <div className="mt-4">
                  <InputLabel htmlFor="return_option" value="Return Option" />

                  <div className="flex items-center mt-2">
                    <label htmlFor="return_yes" className="mr-2">
                      <input
                        type="radio"
                        id="return"
                        name="return"
                        value="1"
                        checked={data.return === "1"}
                        onChange={(e) => setData("return", e.target.value)}
                        className="mr-1"
                      />
                      Yes
                    </label>

                    <label htmlFor="return_no">
                      <input
                        type="radio"
                        id="return"
                        name="return"
                        value="0"
                        checked={data.return === "0"}
                        onChange={(e) => setData("return", e.target.value)}
                        className="mr-1"
                      />
                      No
                    </label>
                  </div>

                  <InputError message={errors.return} className="mt-2" />
                </div>
                <div className="mt-4">
                  <InputLabel htmlFor="capacity" value="Capacity" />

                  <TextInput
                    id="capacity"
                    type="text"
                    name="capacity"
                    value={data.capacity}
                    className="mt-1 block w-full"
                    onChange={(e) => setData("capacity", e.target.value)}
                  />

                  <InputError message={errors.capacity} className="mt-2" />
                </div>
                <div className="mt-4">
                  <InputLabel htmlFor="prix" value="Prix" />

                  <TextInput
                    id="prix"
                    type="text"
                    name="prix"
                    value={data.prix}
                    className="mt-1 block w-full"
                    onChange={(e) => setData("prix", e.target.value)}
                  />

                  <InputError message={errors.prix} className="mt-2" />
                </div>
             
                <div className="mt-4">
                <InputLabel htmlFor="event_logo_path" value="Event logo" />
                  <TextInput
                    id="logo_path"
                    type="file"
                    name="logo_path"
                    className="mt-1 block w-full"
                    onChange={(e) => setData("logo_path", e.target.files[0])}
                  />
                  <InputError message={errors.logo_path} className="mt-2" />


                  
                  <div className="mt-2">
                  {event.logo_path && (
                <div className="mb-4">
                  <img src={event.logo_path} className="w-56" />
                </div>
              )}
              </div>
                </div>
                <div className="mt-4">
                  <InputLabel htmlFor="event_cover_path" value="Event Cover" />
                  <TextInput
                    id="cover_path"
                    type="file"
                    name="cover_path"
                    className="mt-1 block w-full"
                    onChange={(e) => setData("cover_path", e.target.files[0])}
                  />
                  <InputError message={errors.cover_path} className="mt-2" />
                  
                </div>
                <div className="mt-2">
                  {event.cover_path && (
                <div className="mb-4">
                  <img src={event.cover_path} className="w-56" />
                </div>
              )}
              </div>
                <div className="mt-4">
                  <InputLabel
                    htmlFor="event_catagories"
                    value="Event catagories"
                  />

                  <SelectInput
                    name="categories"
                    id="categories"
                    className="mt-1 block w-full"
                    onChange={(e) => setData("categories", e.target.value)}
                  >
                    <option value="">Select Status</option>
                    {allCategories.map((category) => (
                      <option value={category.id}>{category.value}</option>
                    ))}
                  </SelectInput>

                  <InputError message={errors.categories} className="mt-2" />
                </div>
                <div className="mt-4 text-right">
                  <Link
                    href={route("event.index")}
                    className="bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2"
                  >
                    Cancel
                  </Link>
                  <button className="bg-blue-900 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600">
                    Submit
                  </button>
                </div>
              </form>
              <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg  mt-10">

              <button  onClick={toggleModal} className="bg-blue-900 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600">
                    Create Promo code
                  </button>
                  <div className="mt-5">
                    <TableCodePromos codepromosevent={event.codepromos} 
                    toggleModalEdit={toggleModalEdit}
                    setIdCodePromos={setIdCodePromos}
                    />
                  </div>
              </div>
                    {showModal && (
                      <CodePromos toggleModal={toggleModal} 
                      event={event.id}
                      />
                    )}
                    {showModalEdit && (
                      <CodePromosEdit toggleModalEdit={toggleModalEdit} 
                      codepromosevent={event.codepromos} 
                      event={event.id}
                      idCodePromos={idCodePromos}
                      />
                    )}
                   
                   
          
            </div>
          </div>
        </div>
      </div>

      <Footerpage />
    </div>
  );
}
