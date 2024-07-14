import React, { useState } from "react";
import { Star, SlidersHorizontal, MapPin, ChevronLeft } from "lucide-react";
import "../assets/css/selectStore.css";
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

const ExploreStores: React.FC = () => {
  const [stores, setStores] = useState<StoreData[]>([
    {
      name: "Store 1",
      address: "123 Main St",
      rating: 4.5,
      distance: 5,
      category: "Wash",
      expressLaundry: true,
      price: "200",
      storeImage:
        "https://s3-alpha-sig.figma.com/img/6cb0/a043/2142e9d7cdf2994e745313c466044595?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WyEyASWXgfmgLsUWVywaAXs8pYYthe27qbi~j02GkmfzGluw-wRuu~GQQ9b1yr3dE09owcEiOSPhEJuQY8UlS305NPGo5uFlhJvDJvfR2DggsIYnSnMaDVFnA0PPMF91x4FnZjpqBzvTyc~CU5Iq0S2mPw8X3n33LdOMMEBPLD3nZSeO0FvB~RbwK4MUof4~Mj51eTttV8HRiTsy3T-FrsNZ-ZfhA8-2EqQusIwIUVaK0nGOi3~sIg83RJ0t0JeybGFhbujWrHWUWKatBIPjmjGTECBIBS3zfK0Pgm-pT3r7qKjg2Byils22vDl~6qFbE6H74O4A1puinsPrXkDyBg__",
    },
    {
      name: "Store 2",
      address: "456 Elm St",
      rating: 3.8,
      distance: 20,
      category: "Wash",
      expressLaundry: false,
      price: "200",
      storeImage:
        "https://s3-alpha-sig.figma.com/img/6cb0/a043/2142e9d7cdf2994e745313c466044595?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WyEyASWXgfmgLsUWVywaAXs8pYYthe27qbi~j02GkmfzGluw-wRuu~GQQ9b1yr3dE09owcEiOSPhEJuQY8UlS305NPGo5uFlhJvDJvfR2DggsIYnSnMaDVFnA0PPMF91x4FnZjpqBzvTyc~CU5Iq0S2mPw8X3n33LdOMMEBPLD3nZSeO0FvB~RbwK4MUof4~Mj51eTttV8HRiTsy3T-FrsNZ-ZfhA8-2EqQusIwIUVaK0nGOi3~sIg83RJ0t0JeybGFhbujWrHWUWKatBIPjmjGTECBIBS3zfK0Pgm-pT3r7qKjg2Byils22vDl~6qFbE6H74O4A1puinsPrXkDyBg__",
    },
    {
      name: "Store 3",
      address: "456 Elm St",
      rating: 3.8,
      distance: 20,
      category: "Wash",
      expressLaundry: false,
      price: "200",
      storeImage:
        "https://s3-alpha-sig.figma.com/img/6cb0/a043/2142e9d7cdf2994e745313c466044595?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WyEyASWXgfmgLsUWVywaAXs8pYYthe27qbi~j02GkmfzGluw-wRuu~GQQ9b1yr3dE09owcEiOSPhEJuQY8UlS305NPGo5uFlhJvDJvfR2DggsIYnSnMaDVFnA0PPMF91x4FnZjpqBzvTyc~CU5Iq0S2mPw8X3n33LdOMMEBPLD3nZSeO0FvB~RbwK4MUof4~Mj51eTttV8HRiTsy3T-FrsNZ-ZfhA8-2EqQusIwIUVaK0nGOi3~sIg83RJ0t0JeybGFhbujWrHWUWKatBIPjmjGTECBIBS3zfK0Pgm-pT3r7qKjg2Byils22vDl~6qFbE6H74O4A1puinsPrXkDyBg__",
    },
    {
      name: "Store 4",
      address: "456 Elm St",
      rating: 3.8,
      distance: 20,
      category: "Wash",
      expressLaundry: false,
      price: "200",
      storeImage:
        "https://s3-alpha-sig.figma.com/img/6cb0/a043/2142e9d7cdf2994e745313c466044595?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WyEyASWXgfmgLsUWVywaAXs8pYYthe27qbi~j02GkmfzGluw-wRuu~GQQ9b1yr3dE09owcEiOSPhEJuQY8UlS305NPGo5uFlhJvDJvfR2DggsIYnSnMaDVFnA0PPMF91x4FnZjpqBzvTyc~CU5Iq0S2mPw8X3n33LdOMMEBPLD3nZSeO0FvB~RbwK4MUof4~Mj51eTttV8HRiTsy3T-FrsNZ-ZfhA8-2EqQusIwIUVaK0nGOi3~sIg83RJ0t0JeybGFhbujWrHWUWKatBIPjmjGTECBIBS3zfK0Pgm-pT3r7qKjg2Byils22vDl~6qFbE6H74O4A1puinsPrXkDyBg__",
    },
    {
      name: "Store 5",
      address: "456 Elm St",
      rating: 3.8,
      distance: 20,
      category: "Wash",
      expressLaundry: false,
      price: "200",
      storeImage:
        "https://s3-alpha-sig.figma.com/img/6cb0/a043/2142e9d7cdf2994e745313c466044595?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WyEyASWXgfmgLsUWVywaAXs8pYYthe27qbi~j02GkmfzGluw-wRuu~GQQ9b1yr3dE09owcEiOSPhEJuQY8UlS305NPGo5uFlhJvDJvfR2DggsIYnSnMaDVFnA0PPMF91x4FnZjpqBzvTyc~CU5Iq0S2mPw8X3n33LdOMMEBPLD3nZSeO0FvB~RbwK4MUof4~Mj51eTttV8HRiTsy3T-FrsNZ-ZfhA8-2EqQusIwIUVaK0nGOi3~sIg83RJ0t0JeybGFhbujWrHWUWKatBIPjmjGTECBIBS3zfK0Pgm-pT3r7qKjg2Byils22vDl~6qFbE6H74O4A1puinsPrXkDyBg__",
    },
    {
      name: "Store 6",
      address: "456 Elm St",
      rating: 3.8,
      distance: 20,
      category: "Wash",
      expressLaundry: false,
      price: "200",
      storeImage:
        "https://s3-alpha-sig.figma.com/img/6cb0/a043/2142e9d7cdf2994e745313c466044595?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WyEyASWXgfmgLsUWVywaAXs8pYYthe27qbi~j02GkmfzGluw-wRuu~GQQ9b1yr3dE09owcEiOSPhEJuQY8UlS305NPGo5uFlhJvDJvfR2DggsIYnSnMaDVFnA0PPMF91x4FnZjpqBzvTyc~CU5Iq0S2mPw8X3n33LdOMMEBPLD3nZSeO0FvB~RbwK4MUof4~Mj51eTttV8HRiTsy3T-FrsNZ-ZfhA8-2EqQusIwIUVaK0nGOi3~sIg83RJ0t0JeybGFhbujWrHWUWKatBIPjmjGTECBIBS3zfK0Pgm-pT3r7qKjg2Byils22vDl~6qFbE6H74O4A1puinsPrXkDyBg__",
    },
  ]);
  const [isSortingPopupOpen, setIsSortingPopupOpen] = useState<boolean>(false);


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
    <main>
      <h1 className="flex items-center font-['Quicksand']">
        <Link to="/placeorder/prepare-basket" className="flex items-center">
          <ChevronLeft size={34} className="mr-4" />
          Select store
        </Link>
      </h1>
      <div className="App">
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
              after:translate-x-[-50%] after:h-[2px] after:bg-black after:opacity-30 pt-8 font-medium font-['Quicksand'] text-center mb-8 text-black"
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
        <div className="mt-8 grid grid-cols-3 gap-8 storeCardContainer">
          {stores.map((store, index) => (
            <div key={index} className="storeCard">
              <Link to="/store-page">
                <div className="storeCard-img">
                  <img src={store.storeImage} alt={store.name} />
                </div>
                <div className="storeCard-body">
                  <h2 className="text-lg font-semibold">{store.name}</h2>
                  <h3 className="text-lg font-semibold storeCard-price">
                    ₹{store.price} /{" "}
                    <span className="text-2xl text-black">Starting</span>
                  </h3>
                  <p className="text-lg font-semibold">{store.category}</p>
                  <p className="text-sm text-gray-600">{store.address}</p>
                  <div className="flex items-center mt-2">
                    <Star size={20} className="text-yellow-500 mr-1" />
                    <span>{store.rating}</span>
                  </div>
                  <p className="flex items-center my-4">
                    <MapPin className="mr-2" />
                    {store.distance}km
                  </p>
                  <p>Express Laundry: {store.expressLaundry ? "Yes" : "No"}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center">
          <Link
            to="/store-page"
            type="button"
            className="w-[60%] px-8 py-6 bg-[#2E3B7F] rounded-[60px] text-[#ffffff] text-[30px]
              font-bold font-['Quicksand'] text-center uppercase"
          >
            Proceed
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ExploreStores;
