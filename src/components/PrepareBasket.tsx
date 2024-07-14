import React, { useState } from "react";
import { Plus, Minus, Search, BookOpenText } from "lucide-react";
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

const PrepareBasket: React.FC = () => {
  const [counts, setCounts] = useState<{ [key: number]: number }>({});
  const [selectedButton, setSelectedButton] = useState<number>(0);
  const [isSortingPopupOpen, setIsSortingPopupOpen] = useState<boolean>(false);

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

  return (
    <div className="container mx-auto p-4">
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

      <h2 className="exploreStoreSubHeading mt-4 mb-8">Explore by category</h2>
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
                onClick={() => handleDecrement(item.id)}
                className="bg-gray-300 text-gray-700 p-2 rounded-full"
                title="Decrement"
              >
                <Minus size={16} />
              </button>
              <span className="mx-4 text-2xl">{counts[item.id] || 0}</span>
              <button
                onClick={() => handleIncrement(item.id)}
                className="bg-gray-300 text-gray-700 p-2 rounded-full"
                title="Increment"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex items-center justify-center">
        <Link
          to="/select-store"
          type="button"
          className="w-[60%] px-8 py-6 bg-[#2E3B7F] rounded-[60px] text-[#ffffff] text-[30px]
              font-bold font-['Quicksand'] text-center uppercase"
        >
          Compare Basket Prices
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
  );
};

export default PrepareBasket;
