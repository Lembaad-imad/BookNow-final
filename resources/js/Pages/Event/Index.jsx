import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import Filterside from "@/Components/Filterside";
import Footerpage from "@/Components/Footerpage";
import NavLink from "@/Components/NavLink";
import Navbar from "@/Components/Navbar";
import Searchinput from "@/Components/Searchinput";
import Slider from "@/Components/Slider";
import TextInput from "@/Components/TextInput";
import { Link, router } from "@inertiajs/react";
import { useState } from "react";
import { Inertia } from '@inertiajs/inertia-react';
export default function Index({ auth, events, queryParams = null }) {
  const [selectedPrice, setSelectedPrice] = useState("");
  const [checkboxvalues , setCheckboxValues] = useState([])
  queryParams = queryParams || {};
  const searchFieldChanged = (e) => {
    const { name, value } = e.target;
    if (value) {
      queryParams[name] = value;
    } else {
      delete queryParams[name];
    }
    router.get(route("event.index"), queryParams);
  };

  const handleSubmit = (name, e) => {
    e.preventDefault();
    searchFieldChanged(name, e.target.value);
  };
  const handlePriceChange = (value) => {
    setSelectedPrice(value);
    queryParams["price"] = value;
    router.get(route("event.index"), queryParams);
  };
  const handleChnagecheckbox = (e) => {
    const { checked, value } = e.target;

    // Update local state of selected categories
    if (checked) {
        setCheckboxValues([...checkboxvalues, value]);
    } else {
        setCheckboxValues(checkboxvalues.filter(cat => cat !== value));
    }

    // Update queryParams based on the updated checkboxvalues
    const updatedCategory = checked
        ? [...checkboxvalues, value]
        : checkboxvalues.filter(cat => cat !== value);

    // Update queryParams object without mutating the original queryParams
    const updatedQueryParams = { ...queryParams };
    updatedQueryParams["Category"] = updatedCategory;

    // Update the route using Inertia.visit
    Inertia.visit(route("event.index", updatedQueryParams));

    // Log checkboxvalues for debugging
};
console.log(checkboxvalues);




  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 ">
      <Navbar auth={auth} />
      <Slider />
      <Searchinput
        searchFieldChanged={searchFieldChanged}
        queryParams={queryParams}
      />
      <Filterside
        events={events}
        HnadleSubmit={handleSubmit}
        handlePriceChange={handlePriceChange}
        queryParams={queryParams}
        selectedPrice={selectedPrice}
        handleChnagecheckbox={handleChnagecheckbox}
      />
      <Footerpage />
    </div>
  );
}
