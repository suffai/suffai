import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Plus,
  Minus,
  Search,
  BookOpenText,
  ChevronLeft,
  Images,
  Info,
  BookmarkMinus,
  ChevronDown,
  MapPin,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";

const buttons = [
  "Wash and Iron",
  "Wash and Fold",
  "Ironing",
  "Dry Clean",
  "Shoe Clean",
  "Home Textile",
];

const cardItems = [
  { id: 1, name: "Shirt", imageUrl: "shirt.png" },
  { id: 2, name: "Pant", imageUrl: "pant.png" },
  { id: 3, name: "T-shirt", imageUrl: "tshirt.png" },
  { id: 4, name: "Salwar", imageUrl: "salwar.png" },
  { id: 5, name: "Shirt", imageUrl: "shirt.png" },
  { id: 6, name: "Pant", imageUrl: "pant.png" },
  { id: 7, name: "T-shirt", imageUrl: "tshirt.png" },
  { id: 8, name: "Salwar", imageUrl: "salwar.png" },
  { id: 9, name: "Shirt", imageUrl: "shirt.png" },
  { id: 10, name: "Pant", imageUrl: "pant.png" },
];

const StorePage: React.FC = () => {
  const [counts, setCounts] = useState<{ [key: number]: number }>({});
  const [selectedButton, setSelectedButton] = useState<number>(0);
  const [isSortingPopupOpen, setIsSortingPopupOpen] = useState<boolean>(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState<boolean>(false);
  const [isOutletOpen, setIsOutletOpen] = useState<boolean>(false);
  const [isExpressOpen, setIsExpressOpen] = useState<boolean>(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleButtonClick = (index: number) => {
    setSelectedButton(index);
  };

  const handleIncrement = (id: number) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: (prevCounts[id] || 0) + 1,
    }));
  };

  const handleDecrement = (id: number) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: Math.max((prevCounts[id] || 0) - 1, 0),
    }));
  };

  const toggleSortingPopup = () => {
    setIsSortingPopupOpen(!isSortingPopupOpen);
  };

  const closeSortingPopup = () => {
    setIsSortingPopupOpen(false);
  };

  const toggleDetailsPopUp = () => {
    setIsDetailsOpen(!isDetailsOpen);
  };

  const closeDetailsPopUp = () => {
    setIsDetailsOpen(false);
  };

  const toggleOutletPopUp = () => {
    setIsOutletOpen(!isOutletOpen);
  };

  const closeOutletPopUp = () => {
    setIsOutletOpen(false);
  };

  const toggleExpressOpen = () => {
    setIsExpressOpen(!isExpressOpen);
  };

  const toggleExpressClose = () => {
    setIsExpressOpen(false);
  };

  // Function to handle sorting
  const handleSort = (option: string) => {
    // let sortedStores: StoreData[] = [];

    switch (option) {
      // case "Price: Low to High":
      //   sortedStores = stores.slice().sort((a, b) => a.rating - b.rating);
      //   break;
      // case "Price: High to Low":
      //   sortedStores = stores.slice().sort((a, b) => b.rating - a.rating);
      //   break;
      // case "Rating":
      //   sortedStores = stores.slice().sort((a, b) => b.rating - a.rating);
      //   break;
      case "Distance":
        // sortedStores = stores.slice().sort((a, b) => b.rating - a.rating);
        break;
      default:
      // sortedStores = stores; // Default to original order
    }

    // // Update the stores state with sorted data
    // setStores(sortedStores);

    // Close the sorting popup
    setIsSortingPopupOpen(false);
  };

  const handleBackClick = () => {
    if (location.state?.from) {
      navigate(location.state.from);
    } else {
      navigate(-1);
    }
  };

  return (
    <main className="relative font-['Quicksand']">
      <div className="mx-auto">
        <h1 className="flex items-center mb-8 font-['Quicksand'] text-[#121212]">
          <div
            onClick={handleBackClick}
            className="flex items-center cursor-pointer"
          >
            <ChevronLeft size={34} className="mr-4" />
            Jk Dry Clearner
          </div>
        </h1>

        <div className="absolute right-0 top-[5rem] flex items-center justify-end text-[#121212]">
          <Images className="mx-4 cursor-pointer" size={30} />
          <Info
            className="mx-4 cursor-pointer"
            size={30}
            onClick={toggleDetailsPopUp}
          />
          <BookmarkMinus className="mx-4 cursor-pointer" size={30} />
        </div>

        {isDetailsOpen && (
          <div className="fixed z-[9999] w-full h-full left-0 top-0 right-0 bottom-0 bg-black bg-opacity-50 inset-0 flex items-center justify-center max-[520px]:items-end">
            <div className="bg-white relative mt-[10.5rem] rounded-[30px] max-[520px]:rounded-b-none p-12 w-[30%] max-[520px]:w-[100%]">
              <span
                className="absolute cursor-pointer right-12 top-6 text-black text-[2.5rem]"
                onClick={closeDetailsPopUp}
              >
                ✖
              </span>
              <h2 className="text-5xl w-[90%] mx-auto relative pt-8 font-medium font-['Quicksand'] text-left mb-8 text-black">
                Detail
              </h2>
              <div className="flex items-center justify-start mb-8 rounded-[10px] px-8 py-4 bg-[#ffffff] shadow-[0px_0px_15px_0px_#0000001A] font-['Quicksand']">
                <div className="rounded-[50%] shadow-[0px_0px_10.71px_0px_#0000001A] w-[50px] h-[50px] flex items-center justify-center">
                  <Clock size={30} />
                </div>
                <div className="ml-8">
                  <p className="text-[12px] font-medium text-[#121212]">Time</p>
                  <p className="text-[12px] font-medium text-[#121212]">
                    9:00 AM - 10:00 PM
                  </p>
                  <p className="text-[12px] font-medium text-[#FFAE1B]">
                    Wednesday off
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-start mb-8 rounded-[10px] px-8 py-4 bg-[#ffffff] shadow-[0px_0px_15px_0px_#0000001A] font-['Quicksand']">
                <div className="rounded-[50%] shadow-[0px_0px_10.71px_0px_#0000001A] w-[50px] h-[50px] flex items-center justify-center">
                  <MapPin size={30} />
                </div>
                <div className="ml-8">
                  <p className="text-[12px] font-medium text-[#121212]">
                    Location
                  </p>
                  <p className="text-[12px] font-medium text-[#121212]">
                    44 street New Delhi, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div>
          <div>
            <p className="flex items-center justify-start text-[20px] font-['Quicksand'] capitalize font-medium mb-8 text-[#121212]">
              <span>outlets : 3</span>
              <ChevronDown
                className="cursor-pointer"
                size={20}
                onClick={toggleOutletPopUp}
              />
            </p>
          </div>

          {isOutletOpen && (
            <div className="fixed z-[9999] w-full h-full left-0 top-0 right-0 bottom-0 bg-black bg-opacity-50 inset-0 flex items-center justify-center max-[520px]:items-end">
              <div className="bg-white relative mt-[10.5rem] rounded-[30px] max-[520px]:rounded-b-none p-12 w-[30%] max-[520px]:w-[100%]">
                <span
                  className="absolute cursor-pointer right-12 top-6 text-black text-[2.5rem]"
                  onClick={closeOutletPopUp}
                >
                  ✖
                </span>
                <h2 className="text-5xl w-[90%] mx-auto capitalize relative pt-8 font-medium font-['Quicksand'] text-left mb-8 text-black">
                  store Outlet
                </h2>
                <div className="flex flex-col items-start justify-center mb-8 rounded-[10px] bg-[#ffffff] font-['Quicksand']">
                  <p className="text-[16px] mb-4 capitalize font-medium text-[#333333]">
                    Wash n Wear, North Delhi
                  </p>
                  <p className="text-[16px] mb-4 capitalize font-medium text-[#333333]">
                    Wash n Wear, South Delhi
                  </p>
                  <p className="text-[16px] capitalize font-medium text-[#333333]">
                    Wash n Wear, Central Delhi
                  </p>
                </div>
              </div>
            </div>
          )}

          <div>
            <div className="flex items-center justify-between font-['Quicksand'] text-[#121212] mb-8">
              <h2 className="text-[26px] font-['Quicksand'] text-[#121212] font-semibold">
                Description
              </h2>
              <div className="flex items-center justify-between">
                <Link
                  to="/review-page"
                  className="text-[18px] underline text-[#FFAE1B] mr-8"
                >
                  Reviews
                </Link>
                <p className="flex items-center justify-between">
                  <svg
                    height="18"
                    width="18"
                    className="cursor-pointer mr-2"
                    viewBox="0 0 25 23"
                    fill="#FFC107"
                    stroke="#FFC107"
                    strokeWidth="2"
                  >
                    <polygon points="9.9, 1.1, 12.3, 7.5, 18.8, 7.5, 13.8, 11.5, 15.7, 17.9, 9.9, 13.8, 4.2, 17.9, 6, 11.5, 1, 7.5, 7.5, 7.5" />
                  </svg>
                  <span className="text-[16px]">4.8</span>
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="flex items-center justify-start text-[16px] font-['Quicksand'] capitalize font-normal mb-8 text-[#333333]">
              Lorem ipsum dolor sit amet consectetur. Massa eget nisl libero
              tincidunt id sed.
            </p>
          </div>
          <div className="flex items-center justify-between mb-8">
            <p className="flex items-center justify-start text-[16px] font-['Quicksand'] capitalize font-medium text-[#333333]">
              Express Laundry : Yes
            </p>
            <div className="flex items-center justify-between  font-['Quicksand']">
              <p className="flex items-center justify-center mr-6">
                <MapPin size={18} />
                <span className="text-[16px] ml-2">0.5 km</span>
              </p>
              <p className="flex items-center justify-center">
                <Clock size={18} />
                <span className="text-[16px] ml-2">0.5 km</span>
              </p>
            </div>
          </div>
          <div className="flex items-center justify-start mb-8">
            <input
              type="checkbox"
              id="termsCheckbox"
              className="w-[20px] h-[20px] cursor-pointer"
              onClick={toggleExpressOpen}
            />
            <label
              htmlFor="termsCheckbox"
              className="checkbox-custom-label cursor-pointer text-[#2E3B7F] text-[14px] font-bold capitalize ml-6"
            >
              Avail Express services on your order
            </label>
          </div>

          {isExpressOpen && (
            <div className="fixed z-[9999] w-full h-full left-0 top-0 right-0 bottom-0 bg-black bg-opacity-50 inset-0 flex items-center justify-center max-[520px]:items-end">
              <div className="bg-white relative mt-[10.5rem] rounded-[30px] max-[520px]:rounded-b-none p-12 w-[30%] max-[520px]:w-[100%]">
                <span
                  className="absolute cursor-pointer right-12 top-6 text-black text-[2.5rem]"
                  onClick={toggleExpressClose}
                >
                  ✖
                </span>
                <h2
                  className="text-6xl w-[90%] mx-auto relative after:w-[15rem] after:absolute after:top-0 after:left-[50%] 
              after:translate-x-[-50%] after:h-[2px] after:bg-black after:opacity-30 pt-8 font-medium font-['Quicksand'] text-center mb-8 text-black capitalize"
                >
                  Express Laundry
                </h2>
                <div className="flex flex-col items-start justify-center mb-8 rounded-[10px] bg-[#ffffff] font-['Quicksand']">
                  <p className="text-[16px] text-center mb-4 font-medium text-[#333333]">
                    Are you in a rush then select express laundry then you pay
                    1.5x value of your whole cart.
                  </p>
                </div>
                <div className="mt-12 flex items-center justify-center">
                  <button
                    type="button"
                    className="w-[60%] px-8 py-6 bg-[#2E3B7F] rounded-[60px] text-[#ffffff] text-[24px]
              font-bold font-['Quicksand'] text-center uppercase"
                    onClick={toggleExpressClose}
                  >
                    USE EXPRESS
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="my-8">
          <h2 className="text-[#333333] text-[20px] font-medium capitalize font-['Quicksand']">
            services
          </h2>
        </div>

        <div className="mb-10 grid grid-cols-3 gap-8 w-full">
          {buttons.map((button, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(index)}
              className={`py-6 px-4 text-4xl rounded-full shadow-[0px_4px_15px_0px_#0000001A] ${
                selectedButton === index
                  ? "bg-[#2E3B7F] text-white"
                  : "bg-[#ffffff] text-black"
              }`}
            >
              {button}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between py-4 mb-8">
          <div className="exploreStoreSearchContainer">
            <Search className="exploreStoreSearchBtn" size={30} />
            <input
              type="text"
              placeholder="Search"
              className="exploreStoreSearchField"
            />
          </div>
        </div>

        <h2 className="exploreStoreSubHeading mt-4 mb-8">
          Explore by category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {cardItems.map((item) => (
            <div
              key={item.id}
              className="border rounded-2xl p-8 flex flex-col items-center"
            >
              <img
                src={`https://via.placeholder.com/300x200?text=${item.name}`}
                alt={item.name}
                className="mb-2 w-full rounded-2xl object-cover"
              />
              <div className="mb-2 text-4xl my-8">{item.name}</div>
              <div className="flex items-center">
                <button
                  title="Decrement"
                  onClick={() => handleDecrement(item.id)}
                  className="bg-gray-300 text-gray-700 p-2 rounded-full"
                >
                  <Minus size={16} />
                </button>
                <span className="mx-4 text-2xl">{counts[item.id] || 0}</span>
                <button
                  title="Increment"
                  onClick={() => handleIncrement(item.id)}
                  className="bg-gray-300 text-gray-700 p-2 rounded-full"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center">
          <Link
            to="/cart-page"
            type="button"
            className="w-[60%] px-8 py-6 bg-[#2E3B7F] rounded-[60px] text-[#ffffff] text-[30px]
              font-bold font-['Quicksand'] text-center uppercase"
          >
            Add to basket
          </Link>
        </div>

        <div className="fixed w-[100px] h-[100px] bottom-[3%] right-[1%] bg-[#121212] rounded-[50%] flex items-center justify-center text-white py-4 mt-10 mb-4">
          <div className="flex flex-col items-center justify-center">
            <BookOpenText
              className="cursor-pointer"
              onClick={toggleSortingPopup}
              size={40}
            />
            <span className="text-[20px] font-medium font-['Quicksand'] text-center">
              Menu
            </span>
          </div>
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
                  Menu
                </h2>
                <div className="mb-8 rounded-[10px] px-8 py-4 bg-[#3771FF1A] font-['Quicksand']">
                  <label
                    className="flex relative items-center justify-start text-[20px] text-[#333333] cursor-pointer mb-4 capitalize"
                    onClick={() => handleSort("Men’s wear")}
                  >
                    <input
                      type="radio"
                      name="sorting"
                      className="mr-4 w-8 h-8 customRadio"
                      checked
                    />
                    Men’s wear
                    <span className="self-end absolute right-0">15</span>
                  </label>
                  <label
                    className="flex relative items-center justify-start text-[20px] text-[#333333] cursor-pointer mb-4 capitalize"
                    onClick={() => handleSort("women’s wear")}
                  >
                    <input
                      type="radio"
                      name="sorting"
                      className="mr-4 w-8 h-8 customRadio"
                    />
                    women’s wear
                    <span className="self-end absolute right-0">07</span>
                  </label>
                  <label
                    className="flex relative items-center justify-start text-[20px] text-[#333333] cursor-pointer mb-4 capitalize"
                    onClick={() => handleSort("child’s wear")}
                  >
                    <input
                      type="radio"
                      name="sorting"
                      className="mr-4 w-8 h-8 customRadio"
                    />
                    child’s wear
                    <span className="self-end absolute right-0">10</span>
                  </label>
                  <label
                    className="flex relative items-center justify-start text-[20px] text-[#333333] cursor-pointer mb-4 capitalize"
                    onClick={() => handleSort("home textile")}
                  >
                    <input
                      type="radio"
                      name="sorting"
                      className="mr-4 w-8 h-8 customRadio"
                    />
                    home textile
                    <span className="self-end absolute right-0">12</span>
                  </label>
                  <label
                    className="flex relative items-center justify-start text-[20px] text-[#333333] cursor-pointer mb-4 capitalize"
                    onClick={() => handleSort("Shoe Laundry")}
                  >
                    <input
                      type="radio"
                      name="sorting"
                      className="mr-4 w-8 h-8 customRadio"
                    />
                    Shoe Laundry
                    <span className="self-end absolute right-0">12</span>
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default StorePage;
