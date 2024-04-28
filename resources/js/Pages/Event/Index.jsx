import Filterside from "@/Components/Filterside";
import Footerpage from "@/Components/Footerpage";
import Navbar from "@/Components/Navbar";
import Searchinput from "@/Components/Searchinput";
import Slider from "@/Components/Slider";
import { useEffect, useState } from "react";

export default function Index({ auth, allCategories }) {
  const [searchArgs, setSearchArgs] = useState({
    name: "",
    price: "",
    categories: [],
    startt_date: "",
    end_date: "",
  });
  const [isLoading, setIsloading] = useState(false);

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

  // handle search field change
  const searchFieldChanged = (e) => {
    setSearchArgs({ ...searchArgs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {};

  useEffect(() => {
    setIsloading(true);
    axios
      .get("/api/events", {
        params: {
          search: searchArgs.search,
          price: searchArgs.price,
          categories: searchArgs.categories,
        },
      })
      .then((response) => {
        setApiResponse(response.data);
        if (response.data.searchParams) {
          if (response.data.searchParams.name) {
            setSearchArgs({ ...searchArgs, name: response.data.searchParams.name });
          }
          if (response.data.searchParams.price) {
            setSearchArgs({ ...searchArgs, price: response.data.searchParams.price });
          }
          if (response.data.searchParams.categories) {
            setSearchArgs({ ...searchArgs, categories: response.data.searchParams.categories });
          }
        }
      }).finaly(() => {
        setIsloading(false);
      });
  }, [searchArgs.name, searchArgs.price, searchArgs.categories]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 ">
      <Navbar auth={auth} />

      <Slider />
      <Searchinput
        searchFieldChanged={searchFieldChanged}
        searchArgs={searchArgs}
        handleSubmit={handleSubmit}
      />
      <Filterside
        events={apiResponse.events}
        searchArgs={searchArgs}
        allCategories={allCategories}
        searchFieldChanged={searchFieldChanged}
      />
      <Footerpage />
    </div>
  );
}
