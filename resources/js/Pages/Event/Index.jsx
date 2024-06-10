import Filterside from "@/Components/Filterside";
import Footerpage from "@/Components/Footerpage";
import Navbar from "@/Components/Navbar";
import Searchinput from "@/Components/Searchinput";
import Slider from "@/Components/Slider";
import { useEffect, useState } from "react";
import axios from 'axios';
import Breadcrumbs from "@/Components/Breadcrumbs";
// import { Breadcrumbs } from "@material-tailwind/react";

export default function Index({ auth, allCategories }) {
  const [searchArgs, setSearchArgs] = useState({
    name: "",
    price: "",
    categories: [],
    sort:"Low to High",
  });
  

  const [isLoading, setIsLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState({
    events: {
      data: [],
      links: [],
      current_page: 0,
      last_page: 0,
      first_page_url: null,
      last_page_url: null,
      from: 0,
      to: 0,
      next_page_url: null,
      prev_page_url: null,
      path: null,
      per_page: 0,
      total: 0,
    },
    searchParams: null,
  });

  const [triggerFetch, setTriggerFetch] = useState(false);

  const searchFieldChanged = (e) => {
    
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setSearchArgs((prevState) => {
        const updatedCategories = checked
          ? [...prevState.categories, value]
          : prevState.categories.filter((cat) => cat !== value);

        return {
          ...prevState,
          categories: updatedCategories,
        };
      });
    } else {
      setSearchArgs((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
    setTriggerFetch((prev) => !prev); 
  };
console.log(auth)
  const handleSubmit = () => {
    setIsLoading(true);
    axios
      .get("/api/events", {
        params: {
          search: searchArgs.name,
          price: searchArgs.price,
          categories: searchArgs.categories,
          sort: searchArgs.sort,
        },
      })
      .then((response) => {
        setApiResponse(response.data);
        if (response.data.searchParams) {
          setSearchArgs((prevState) => ({
            ...prevState,
            name: response.data.searchParams.name || prevState.name,
            price: response.data.searchParams.price || prevState.price,
            categories: response.data.searchParams.categories || prevState.categories,
            sort: response.data.searchParams.sort || prevState.sort,
          }));
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    handleSubmit();
  
  }, [triggerFetch]);

  console.log(searchArgs);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar auth={auth} />
      
      <Slider />
      <Searchinput
        searchFieldChanged={searchFieldChanged}
        queryParams={searchArgs}
      />
      <Filterside
        events={apiResponse.events}
        queryParams={apiResponse.searchParams}
        searchArgs={searchArgs}
        allCategories={allCategories}
        searchFieldChanged={searchFieldChanged}
        setSearchArgs={setSearchArgs}
        setTriggerFetch={setTriggerFetch}
      />
      <Footerpage />
    </div>
  );
}
