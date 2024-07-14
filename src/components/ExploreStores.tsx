import React, { useState } from "react";
import { Search, Filter, SlidersHorizontal, MapPin, Clock } from "lucide-react";
import "../assets/css/exploreStore.css";
import DistanceSlider from "./DistanceSlider";
import { Link } from "react-router-dom";

interface StoreData {
  name: string;
  address: string;
  category: string;
  rating: number;
  distance: number;
  expressLaundry: boolean;
  price: string;
  storeImage: string;
}

interface StarProps {
  filled: boolean;
  onClick: () => void;
}

const Star: React.FC<StarProps> = ({ filled, onClick }) => (
  <svg
    onClick={onClick}
    height="30"
    width="30"
    className="cursor-pointer mr-4"
    viewBox="0 0 25 23"
    fill={filled ? "#FFC107" : "#D9D9D9"}
    stroke={filled ? "#FFC107" : "#D9D9D9"}
    strokeWidth="2"
  >
    <polygon points="9.9, 1.1, 12.3, 7.5, 18.8, 7.5, 13.8, 11.5, 15.7, 17.9, 9.9, 13.8, 4.2, 17.9, 6, 11.5, 1, 7.5, 7.5, 7.5" />
  </svg>
);

const ExploreStores: React.FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  // const [distance, setDistance] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  // const [selectedRating, setSelectedRating] = useState<number | null>(null);
  // const [expressLaundry, setExpressLaundry] = useState("");
  const [stores, setStores] = useState<StoreData[]>([
    {
      name: "Store 1",
      address: "123 Main St",
      rating: 4.5,
      distance: 5,
      category: "Wash",
      expressLaundry: true,
      price: "200",
      storeImage: "../src/assets/images/store-image.png",
    },
    {
      name: "Store 2",
      address: "456 Elm St",
      rating: 3.8,
      distance: 20,
      category: "Wash",
      expressLaundry: false,
      price: "200",
      storeImage: "../src/assets/images/store-image.png",
    },
    {
      name: "Store 3",
      address: "456 Elm St",
      rating: 3.8,
      distance: 20,
      category: "Wash",
      expressLaundry: false,
      price: "200",
      storeImage: "../src/assets/images/store-image.png",
    },
    {
      name: "Store 4",
      address: "456 Elm St",
      rating: 3.8,
      distance: 20,
      category: "Wash",
      expressLaundry: false,
      price: "200",
      storeImage: "../src/assets/images/store-image.png",
    },
    {
      name: "Store 5",
      address: "456 Elm St",
      rating: 3.8,
      distance: 20,
      category: "Wash",
      expressLaundry: false,
      price: "200",
      storeImage: "../src/assets/images/store-image.png",
    },
    {
      name: "Store 6",
      address: "456 Elm St",
      rating: 3.8,
      distance: 20,
      category: "Wash",
      expressLaundry: false,
      price: "200",
      storeImage: "../src/assets/images/store-image.png",
    },
    {
      name: "Store 7",
      address: "456 Elm St",
      rating: 3.8,
      distance: 20,
      category: "Wash",
      expressLaundry: false,
      price: "200",
      storeImage: "../src/assets/images/store-image.png",
    },
    {
      name: "Store 8",
      address: "456 Elm St",
      rating: 3.8,
      distance: 20,
      category: "Wash",
      expressLaundry: false,
      price: "200",
      storeImage: "../src/assets/images/store-image.png",
    },
  ]);
  const [isSortingPopupOpen, setIsSortingPopupOpen] = useState<boolean>(false);

  const categoriesList = [
    {
      name: "Wash and Iron",
      imageLink: "../src/assets/images/wash-and-iron.webp",
    },
    {
      name: "Wash and Fold",
      imageLink: "../src/assets/images/washing-and-folding.webp",
    },
    {
      name: "Ironing",
      imageLink: "../src/assets/images/Ironing.png",
    },
    {
      name: "Dry Clean",
      imageLink: "../src/assets/images/Dry-cleaning.webp",
    },
    {
      name: "Shoe Clean",
      imageLink:
        "https://s3-alpha-sig.figma.com/img/2af4/1e4b/8e1b7426637579793e7451c646227bde?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nc0hRLAUtitjigQh28f1WYftHrij~YNOiF2w5v8x8jdW3z2yHtOfuAjsIEVhp2VOk3Zi5nvFcHvQWzgwCSas~oH57ZdqYKlWdCXHJrAdc0MEDpYeED95BMrDKLSSL9VpGc-6k~yu3SiHSBQ4T7yJ-nVmBoYWlC6vE4LgYiVoDA~Zid8KXr-vr7-5OA6ARDDyjpfcy4dbKCGRoFP4T~oyGNdfGGp0OCcP0HmcVp~BWsy9XMO3S-n0-13XEk9vTeEz8p11nd8FfU9ekGw0W2sU7OWLd-FoAnHe3XFgUOPtkcfEHRFltnTCVR~yzEGWHr-FgOGSV93RnAeddwDnHW1zXQ__",
    },
    {
      name: "Home Textile",
      imageLink:
        "https://s3-alpha-sig.figma.com/img/da9f/f38c/106e6ae69f1f947d8a82380de7b95601?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QK6q2on8AaHrEIipJHSkp8Vzp3eQa6xwooEd8u~8OiuWt~Z8jIFiHbZSoKpBssB04cvQLpvQfyPMzA7-LX6YJPyKiTIU8AtY~cX4odWX0HMhI-3xitOziDEFgWkyDgQs4XRpPmyqdBGNWeG9NPRthHvauEln80LSJGntKi0epHqsmOCFmeDucvlrXQCM8rDpbZIwP9M04vSbxZx3OEYLTu-CK~o73fnEqbhm1O52b27XGCDAzAbpsSVE1kYVwa13Pu7do-DEvEo0mSb1U27Yh7w04JmOUOdMDMQq97M4AeiHmf0CuSLuCvJZGNtGQ3vDLKYv1Mupf1czqNaqlUKJvw__",
    },
  ];

  const [rating, setRating] = useState(0);

  const handleFilterClick = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const closeFilter = () => {
    setIsFilterOpen(false);
  };

  // const handleDistanceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setDistance(Number(event.target.value));
  // };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  // const handleExpressLaundryChange = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   setExpressLaundry(event.target.value);
  // };

  const handleFilterApply = () => {
    setIsFilterOpen(false);

    // Filter stores based on selected filters
    let filteredStores = [...stores];

    // Filter by distance
    // filteredStores = filteredStores.filter((store) => {
    //   // Convert distance to meters if needed (1 km = 1000 meters)
    //   const distanceInMeters = distance * 1000;
    //   // Implement distance filter logic here
    //   // For example, if the store's distance is less than or equal to the selected distance
    //   return store.distance <= distanceInMeters;
    // });

    // Filter by category
    if (selectedCategory) {
      filteredStores = filteredStores.filter((store) => {
        // Implement category filter logic here
        // For example, if the store's category matches the selected category
        return store.category === selectedCategory;
      });
    }

    // Filter by rating
    // if (selectedRating !== null) {
    //   filteredStores = filteredStores.filter((store) => {
    //     // Implement rating filter logic here
    //     // For example, if the store's rating is greater than or equal to the selected rating
    //     return store.rating >= selectedRating;
    //   });
    // }

    // // Filter by express laundry
    // if (expressLaundry !== "") {
    //   filteredStores = filteredStores.filter((store) => {
    //     // Implement express laundry filter logic here
    //     // For example, if the store offers express laundry and the selected option is 'Yes'
    //     return store.expressLaundry === (expressLaundry === "Yes");
    //   });
    // }

    // Update the stores state with filtered data
    setStores(filteredStores);
  };

  // const handleFilterReset = () => {
  //   setDistance(0);
  //   setSelectedCategory(null);
  //   setSelectedRating(null);
  //   setExpressLaundry("");
  // };

  const toggleSortingPopup = () => {
    setIsSortingPopupOpen(!isSortingPopupOpen);
  };

  const closeSortingPopup = () => {
    setIsSortingPopupOpen(false);
  };

  // Function to handle sorting
  const handleSort = (option: string) => {
    let sortedStores: StoreData[] = [];

    switch (option) {
      case "Price: Low to High":
        sortedStores = stores.slice().sort((a, b) => a.rating - b.rating);
        break;
      case "Price: High to Low":
        sortedStores = stores.slice().sort((a, b) => b.rating - a.rating);
        break;
      case "Rating":
        sortedStores = stores.slice().sort((a, b) => b.rating - a.rating);
        break;
      case "Distance":
        sortedStores = stores.slice().sort((a, b) => b.rating - a.rating);
        break;
      default:
        sortedStores = stores; // Default to original order
    }

    // Update the stores state with sorted data
    setStores(sortedStores);

    // Close the sorting popup
    setIsSortingPopupOpen(false);
  };

  return (
    <div className="exploreStorePage font-['Quicksand']">
      {/* Search bar */}
      <div className="flex items-center justify-between py-4">
        <div className="exploreStoreSearchContainer w-[80%] relative">
          <Search
            className="exploreStoreSearchBtn absolute left-[1.5rem] top-[50%] translate-y-[-50%]"
            size={30}
          />
          <input
            type="text"
            placeholder="Search"
            className="exploreStoreSearchField w-full rounded-[10px] bg-white border-0 outline-0 shadow-[0px_0px_15px_1px_#2e3b7f25] pl-[6rem] pr-[1rem] py-[1rem]"
          />
        </div>
        <Filter
          className="cursor-pointer"
          size={30}
          onClick={handleFilterClick}
        />
      </div>

      {/* Filter popup */}
      {isFilterOpen && (
        <div className="fixed z-[9999] w-full h-full left-0 top-0 right-0 bottom-0 bg-black bg-opacity-50 inset-0 flex items-center justify-center max-[520px]:items-end">
          <div className="bg-white relative mt-[10.5rem] rounded-[30px] max-[520px]:rounded-b-none p-12 w-[60%] max-[520px]:w-[100%]">
            <span
              className="absolute cursor-pointer right-12 top-6 text-black text-[2.5rem]"
              onClick={closeFilter}
            >
              ✖
            </span>
            <h2
              className="text-6xl w-[90%] mx-auto relative after:w-[15rem] after:absolute after:top-0 after:left-[50%] 
              after:translate-x-[-50%] after:h-[2px] after:bg-black after:opacity-30 pt-8 font-semibold font-['Quicksand'] text-center mb-8"
            >
              Search Filter
            </h2>
            <div className="mb-8 rounded-[10px] px-8 py-4 bg-[#3771FF1A]">
              <label
                htmlFor="distanceFromUser"
                className="block text-[#333333] font-semibold font-['Quicksand'] text-[20px] mb-8"
              >
                Range Distance (km)
              </label>
              <DistanceSlider min={0} max={100} step={0.1} />
            </div>
            <div className="mb-8 rounded-[10px] px-8 py-4 bg-[#3771FF1A]">
              <h2 className="block text-[#333333] font-semibold font-['Quicksand'] text-[20px] mb-8">
                Categories
              </h2>
              <div className="grid grid-cols-3 items-center justify-between">
                {[
                  "Wash and Iron",
                  "Wash and Fold",
                  "Ironing",
                  "Dry Clean",
                  "Shoe Clean",
                  "Home textile",
                ].map((category, index) => (
                  <label
                    key={index}
                    className="flex items-center justify-start text-[18px] text-[#333333] cursor-pointer mb-4"
                  >
                    <input
                      type="radio"
                      name="category"
                      value={category}
                      checked={selectedCategory === category}
                      onChange={() => handleCategoryFilter(category)}
                      className="mr-4 w-8 h-8 customRadio"
                    />
                    {category}
                  </label>
                ))}
              </div>
            </div>
            <div className="mb-8 rounded-[10px] px-8 py-4 bg-[#3771FF1A]">
              <h2 className="block text-[#333333] font-semibold font-['Quicksand'] text-[20px] mb-8">
                Rating
              </h2>
              <div className="flex items-center">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      filled={star <= rating}
                      onClick={() => setRating(star)}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="mb-8 rounded-[10px] px-8 py-4 bg-[#3771FF1A]">
              <h2 className="block text-[#333333] font-semibold font-['Quicksand'] text-[20px] mb-8">
                Express Laundry
              </h2>
              <div className="grid grid-cols-2 items-center justify-between">
                <label className="flex items-center justify-start text-[18px] text-[#333333] cursor-pointer mb-4">
                  <input
                    type="radio"
                    name="category"
                    value="Yes"
                    className="mr-4 w-8 h-8 customRadio"
                  />
                  Yes
                </label>
                <label className="flex items-center justify-start text-[18px] text-[#333333] cursor-pointer mb-4">
                  <input
                    type="radio"
                    name="category"
                    value="No"
                    className="mr-4 w-8 h-8 customRadio"
                  />
                  No
                </label>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button
                onClick={handleFilterApply}
                className="px-[80px] py-4 text-white rounded-[30px] bg-[#2E3B7F] text-[24px] uppercase font-['Quicksand'] font-bold text-center"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Explore by category section */}
      <h2 className="exploreStoreSubHeading mt-8">Explore by category</h2>
      <div className="grid grid-cols-6 gap-8 mt-8 exploreCatCards">
        {categoriesList.map((category, index) => (
          <div
            key={index}
            className="exploreCatCard cursor-pointer hover:scale-[1.05] hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="">{category.name}</h3>
            <img
              src={category.imageLink}
              alt={category.name}
              className="w-full h-[15rem]"
            />
          </div>
        ))}
      </div>

      {/* Sort icon */}
      <div className="flex items-center justify-between py-4 mt-10 mb-4">
        <h2 className="exploreStoreSubHeading">all Stores</h2>
        <SlidersHorizontal
          className="cursor-pointer"
          onClick={toggleSortingPopup}
          size={30}
        />
        {/* Sorting popup */}
        {isSortingPopupOpen && (
          <div className="fixed z-[9999] w-full h-full left-0 top-0 right-0 bottom-0 bg-black bg-opacity-50 inset-0 flex items-center justify-center max-[520px]:items-end">
            <div className="bg-white relative mt-[10.5rem] rounded-[30px] max-[520px]:rounded-b-none p-12 w-[40%] max-[520px]:w-[100%]">
              <span
                className="absolute cursor-pointer right-12 top-6 text-black text-[2.5rem]"
                onClick={closeSortingPopup}
              >
                ✖
              </span>
              <h2
                className="text-6xl w-[90%] mx-auto relative after:w-[15rem] after:absolute after:top-0 after:left-[50%] 
              after:translate-x-[-50%] after:h-[2px] after:bg-black after:opacity-30 pt-8 font-medium font-['Quicksand'] text-center mb-8"
              >
                Search Filter
              </h2>
              <div className="mb-8 rounded-[10px] px-8 py-4 bg-[#3771FF1A]">
                <label
                  className="flex items-center justify-start text-[18px] text-[#333333] cursor-pointer mb-4"
                  onClick={() => handleSort("Price: Low to High")}
                >
                  <input
                    type="radio"
                    name="sorting"
                    className="mr-4 w-8 h-8 customRadio"
                    checked
                  />
                  Price: Low to High
                </label>
                <label
                  className="flex items-center justify-start text-[18px] text-[#333333] cursor-pointer mb-4"
                  onClick={() => handleSort("Price: High to Low")}
                >
                  <input
                    type="radio"
                    name="sorting"
                    className="mr-4 w-8 h-8 customRadio"
                  />
                  Price: High to Low
                </label>
                <label
                  className="flex items-center justify-start text-[18px] text-[#333333] cursor-pointer mb-4"
                  onClick={() => handleSort("Rating")}
                >
                  <input
                    type="radio"
                    name="sorting"
                    className="mr-4 w-8 h-8 customRadio"
                  />
                  Rating
                </label>
                <label
                  className="flex items-center justify-start text-[18px] text-[#333333] cursor-pointer mb-4"
                  onClick={() => handleSort("Distance")}
                >
                  <input
                    type="radio"
                    name="sorting"
                    className="mr-4 w-8 h-8 customRadio"
                  />
                  Distance
                </label>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* All stores section */}
      <div className="mt-8 grid grid-cols-4 gap-8 storeCardContainer">
        {stores.map((store, index) => (
          <div
            key={index}
            className="storeCard  hover:scale-[1.04] hover:border-[#aaaaaa] border transition-all duration-300"
          >
            <Link to="/store-page">
              <div className="w-full mb-[1.5rem] flex items-center justify-center">
                <img
                  src={store.storeImage}
                  alt={store.name}
                  className="w-[100%] block object-cover relative rounded-[10px]"
                />
              </div>
              <div className="storeCard-body relative">
                <h2 className="text-lg font-semibold">{store.name}</h2>
                <h3 className="text-lg font-semibold storeCard-price">
                  ₹{store.price} /
                  <span className="text-2xl text-black">Starting</span>
                </h3>
                <p className="text-lg font-semibold">{store.category}</p>
                <p className="text-sm text-gray-600">{store.address}</p>
                <p>Express Laundry: {store.expressLaundry ? "Yes" : "No"}</p>
                <div className="absolute right-0 top-0 flex flex-col items-end">
                  <div className="flex items-center mt-2">
                    <svg
                      height="24"
                      width="24"
                      className="cursor-pointer mr-3"
                      viewBox="0 0 25 23"
                      fill="#FFC107"
                      stroke="#FFC107"
                      strokeWidth="2"
                    >
                      <polygon points="9.9, 1.1, 12.3, 7.5, 18.8, 7.5, 13.8, 11.5, 15.7, 17.9, 9.9, 13.8, 4.2, 17.9, 6, 11.5, 1, 7.5, 7.5, 7.5" />
                    </svg>
                    <span>{store.rating}</span>
                  </div>
                  <p className="flex items-center my-4">
                    <MapPin size={24} className="mr-3 text-[#2E3B7F]" />
                    <span>{store.distance} km</span>
                  </p>
                  <p className="flex items-center my-4">
                    <Clock size={24} className="mr-3 text-[#2E3B7F]" />
                    <span>3 to 5 days</span>
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreStores;
