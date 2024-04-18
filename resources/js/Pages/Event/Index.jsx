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
import { useEffect, useState } from "react";
export default function Index({ auth, events, queryParams = null }) {
  const [selectedPrice, setSelectedPrice] = useState("");
  const [checkboxvalues, setCheckboxValues] = useState([]);
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
  useEffect(() => {
    const storedCheckboxValues = localStorage.getItem("checkboxValues");
    if (storedCheckboxValues) {
      setCheckboxValues(JSON.parse(storedCheckboxValues));
    }
  }, []);
  const handleChnagecheckbox = (e) => {
    const { checked, value } = e.target;
    let updatedCategories;

    if (checked) {
      updatedCategories = [...checkboxvalues, value];
    } else {
      updatedCategories = checkboxvalues.filter((val) => val !== value);
    }

    setCheckboxValues(updatedCategories);

    localStorage.setItem("checkboxValues", JSON.stringify(updatedCategories));

    queryParams["categories"] = updatedCategories;
    router.get(route("event.index"), queryParams);
  };

  console.log(queryParams.categories);

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
        checkboxvalues={checkboxvalues}
      />
      <Footerpage />
    </div>
  );
}
