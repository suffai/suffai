import React, { useState } from "react";
import { Plus, Minus, BadgePercent, Trash } from "lucide-react";
import { Link } from "react-router-dom";

const dayButtons = ["Same Day", "Next Day"];

const timeButtons = [
  "9:00 AM - 11:00 AM",
  "11:00 AM - 1:00 PM",
  "1:00 PM - 3:00 PM",
  "3:00 PM - 5:00 PM",
  "5:00 PM - 7:00 PM",
  "7:00 PM - 9:00 PM",
];

const CartPage: React.FC = () => {
  const [counts, setCounts] = useState<{ [key: number]: number }>({});
  const [isSelectItem, setIsSelectItem] = useState<boolean>(false);
  const [isPickupTime, SetIsPickupTime] = useState<boolean>(false);
  const [selectedButton, setSelectedButton] = useState<number>(0);
  const [selectedButton2, setSelectedButton2] = useState<number>(0);
  const [isTerms, setIsTerms] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleButtonClick = (index: number) => {
    setSelectedButton(index);
  };

  const handleButtonClick2 = (index: number) => {
    setSelectedButton2(index);
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

  const toggleSelectItem = () => {
    setIsSelectItem(!isSelectItem);
  };

  const closeSelectItem = () => {
    setIsSelectItem(false);
  };

  const togglePickupTime = () => {
    SetIsPickupTime(!isPickupTime);
  };

  const closePickupTime = () => {
    SetIsPickupTime(false);
  };

  const toggleTerms = () => {
    setIsTerms(!isTerms);
  };

  const closeTerms = () => {
    setIsTerms(false);
  };

  const pickupTimeClose = () => {
    SetIsPickupTime(false);
  };

  return (
    <main className="relative font-['Quicksand']">
      <div className="mx-auto">
        <h1 className="flex items-center mb-8 font-['Quicksand'] text-[#121212]">
          My Laundry Basket
        </h1>

        <h2 className="text-[22px] font-['Quicksand'] text-[#121212] font-semibold mb-6">
          Selected Store: JK Laundry store
        </h2>

        <div>
          <div>
            <div className="flex flex-col items-center justify-between font-['Quicksand'] text-[#121212] mb-8 rounded-[20px] shadow-[0px_0px_15px_0px_#0000001A]">
              <div className="flex items-center justify-between w-full px-8 py-4 border-b-[1px] border-[#D9D9D9]">
                <p className="w-[70%] text-[16px] font-semibold capitalize">
                  Wash & Fold
                </p>
                <p className="w-[30%] flex items-center justify-between cursor-pointer">
                  <span
                    className="text-[18px] underline text-[#3771FF]"
                    onClick={toggleSelectItem}
                  >
                    3 Items
                  </span>
                  <span className="text-[15px] text-[#666666]">₹600</span>
                </p>
              </div>
              <div className="flex items-center justify-between w-full px-8 py-4 border-b-[1px] border-[#D9D9D9]">
                <p className="w-[70%] text-[16px] font-semibold capitalize">
                  Wash & Fold
                </p>
                <p className="w-[30%] flex items-center justify-between cursor-pointer">
                  <span
                    className="text-[18px] underline text-[#3771FF]"
                    onClick={toggleSelectItem}
                  >
                    3 Items
                  </span>
                  <span className="text-[15px] text-[#666666]">₹600</span>
                </p>
              </div>
              <div className="flex items-center justify-between w-full px-8 py-4 border-b-[1px] border-[#D9D9D9]">
                <p className="w-[70%] text-[16px] font-semibold capitalize">
                  Wash & Fold
                </p>
                <p className="w-[30%] flex items-center justify-between cursor-pointer">
                  <span
                    className="text-[18px] underline text-[#3771FF]"
                    onClick={toggleSelectItem}
                  >
                    3 Items
                  </span>
                  <span className="text-[15px] text-[#666666]">₹600</span>
                </p>
              </div>
              <div className="flex items-center justify-between w-full px-8 py-4 border-b-[1px] border-[#D9D9D9]">
                <p className="w-[70%] text-[16px] font-semibold capitalize">
                  Wash & Fold
                </p>
                <p className="w-[30%] flex items-center justify-between cursor-pointer">
                  <span
                    className="text-[18px] underline text-[#3771FF]"
                    onClick={toggleSelectItem}
                  >
                    3 Items
                  </span>
                  <span className="text-[15px] text-[#666666]">₹600</span>
                </p>
              </div>
              <div className="flex items-center justify-between w-full px-8 py-4 border-b-[1px] border-[#D9D9D9]">
                <p className="w-[70%] text-[16px] font-semibold capitalize">
                  Wash & Fold
                </p>
                <p className="w-[30%] flex items-center justify-between cursor-pointer">
                  <span
                    className="text-[18px] underline text-[#3771FF]"
                    onClick={toggleSelectItem}
                  >
                    3 Items
                  </span>
                  <span className="text-[15px] text-[#666666]">₹600</span>
                </p>
              </div>
              <div className="flex items-center justify-between w-full px-8 py-4 bg-[#FBEAEA] rounded-[20px] rounded-t-none">
                <p className="w-[70%] text-[16px] font-semibold capitalize">
                  Total Item
                </p>
                <p className="w-[30%] flex items-center justify-between cursor-pointer">
                  <span
                    className="text-[18px] underline text-[#3771FF]"
                    onClick={toggleSelectItem}
                  >
                    15 Items
                  </span>
                  <span className="text-[15px] text-[#666666]">₹3000</span>
                </p>
              </div>
            </div>
          </div>

          {isSelectItem && (
            <div className="fixed z-[9999] w-full h-full left-0 top-0 right-0 bottom-0 bg-black bg-opacity-50 inset-0 flex items-center justify-center max-[520px]:items-end">
              <div className="bg-white relative mt-[10.5rem] rounded-[30px] max-[520px]:rounded-b-none p-12 w-[40%] max-[520px]:w-[100%]">
                <span
                  className="absolute cursor-pointer right-12 top-6 text-black text-[2.5rem]"
                  onClick={closeSelectItem}
                >
                  ✖
                </span>
                <h2
                  className="text-6xl w-[90%] mx-auto relative after:w-[15rem] after:absolute after:top-0 after:left-[50%] 
              after:translate-x-[-50%] after:h-[2px] after:bg-black after:opacity-30 pt-8 font-medium font-['Quicksand'] text-center mb-8 text-black"
                >
                  Select Item
                </h2>
                <div className="mb-8 rounded-[20px] bg-[#ffffff] font-['Quicksand'] shadow-[0px_0px_15px_0px_#0000001A] flex items-center justify-between">
                  <div className="w-[10rem] h-[10rem] rounded-[20px]">
                    <img
                      src="https://via.placeholder.com/300x200?text=T-Shirt"
                      alt=""
                      className="w-full h-full object-cover rounded-[20px]"
                    />
                  </div>
                  <div className="w-[calc(100%-10rem)] ml-8 pr-8">
                    <div className="flex items-center justify-between mb-6">
                      <p className="text-[16px] font-medium text-[#333333]">
                        T-shirt Wash & Fold
                      </p>
                      <Trash size={30} className="stroke-[#EF5350]" />
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="text-[16px] font-medium text-[#3771FF]">
                        ₹200
                      </p>
                      <div className="flex items-center">
                        <button
                          onClick={() => handleDecrement(0)}
                          className="bg-white shadow-[0px_0px_15px_0px_#0000001A] text-gray-700 p-2 rounded-full"
                          title="Decrement"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="mx-4 text-2xl text-[#3771FF]">
                          {counts[0] || 0}
                        </span>
                        <button
                          onClick={() => handleIncrement(0)}
                          className="bg-white shadow-[0px_0px_15px_0px_#0000001A] text-gray-700 p-2 rounded-full"
                          title="Increment"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-8 rounded-[20px] bg-[#ffffff] font-['Quicksand'] shadow-[0px_0px_15px_0px_#0000001A] flex items-center justify-between">
                  <div className="w-[10rem] h-[10rem] rounded-[20px]">
                    <img
                      src="https://via.placeholder.com/300x200?text=T-Shirt"
                      alt=""
                      className="w-full h-full object-cover rounded-[20px]"
                    />
                  </div>
                  <div className="w-[calc(100%-10rem)] ml-8 pr-8">
                    <div className="flex items-center justify-between mb-6">
                      <p className="text-[16px] font-medium text-[#333333]">
                        T-shirt Wash & Fold
                      </p>
                      <Trash size={30} className="stroke-[#EF5350]" />
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="text-[16px] font-medium text-[#3771FF]">
                        ₹200
                      </p>
                      <div className="flex items-center">
                        <button
                          onClick={() => handleDecrement(0)}
                          className="bg-white shadow-[0px_0px_15px_0px_#0000001A] text-gray-700 p-2 rounded-full"
                          title="Decrement"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="mx-4 text-2xl text-[#3771FF]">
                          {counts[0] || 0}
                        </span>
                        <button
                          onClick={() => handleIncrement(0)}
                          className="bg-white shadow-[0px_0px_15px_0px_#0000001A] text-gray-700 p-2 rounded-full"
                          title="Increment"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div>
            <p className="flex items-center justify-start text-[16px] font-['Quicksand'] capitalize font-semibold mb-8 text-[#2E3B7F]">
              Want it quicker?
              <br />
              Upgrade to Express services at only ₹100
            </p>
          </div>
          <div className="flex items-center justify-start mb-8">
            <input
              type="checkbox"
              id="termsCheckbox"
              className="w-[20px] h-[20px] cursor-pointer"
            />
            <label
              htmlFor="termsCheckbox"
              className="checkbox-custom-label cursor-pointer text-[#2E3B7F] text-[14px] font-bold capitalize ml-6"
            >
              Avail Express services on your order
            </label>
          </div>
          <div className="flex items-center justify-between py-4 mb-2">
            <div className="exploreStoreSearchContainer relative">
              <BadgePercent
                size={25}
                className="absolute left-6 top-[50%] translate-y-[-50%] stroke-[#666666]"
              />
              <input
                type="text"
                placeholder="Discount Code Here"
                className="w-[70%] px-8 pl-20 py-6 text-[20px] font-medium border border-[#C7C7C7] bg-[#F5F5F5] rounded-full placeholder:text-[#666666] text-[#666666]"
              />
            </div>
          </div>
          <div>
            <p className="text-[16px] font-medium text-[#EF5350]">
              Avoiding cancellations will help us be more environmentally
              efficient! All cancellations after pickup will carry a 100% fee
            </p>
          </div>
        </div>

        <div className="w-full px-12 py-8 bg-[#FBEAEA] flex items-center justify-between mt-8">
          <div className="w-[50%]">
            <div>
              <p
                className="text-[18px] underline capitalize font-normal text-[#2E3B7F] cursor-pointer"
                onClick={togglePickupTime}
              >
                Schedule pickup<span className="text-[#EF5350]">*</span>
              </p>
            </div>
            <div className="my-4">
              <p className="text-[26px] font-medium text-[#3771FF]">₹2400.00</p>
            </div>
            <div className="flex items-center justify-start mb-8">
              <input
                type="checkbox"
                id="terms2Checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="w-[20px] h-[20px] cursor-pointer text-[#2E3B7F]"
              />
              <label
                htmlFor="terms2Checkbox"
                className="checkbox-custom-label cursor-pointer text-[#000000] text-[14px] font-bold capitalize ml-6"
              >
                Accept
                <span
                  className="text-[#2E3B7F] underline ml-2"
                  onClick={toggleTerms}
                >
                  term & Condition
                </span>
              </label>
            </div>
          </div>
          <div className="w-[50%] flex items-center justify-center">
            <Link
              to={isChecked ? "/payment-page" : "#"}
              type="button"
              className={`w-[60%] px-8 py-6 rounded-[60px] text-[24px] font-bold font-['Quicksand'] text-center uppercase ${
                isChecked
                  ? "bg-[#2E3B7F] text-[#ffffff] cursor-pointer"
                  : "bg-gray-400 text-white cursor-not-allowed"
              }`}
              onClick={(e) => {
                if (!isChecked) e.preventDefault();
              }}
            >
              Check out
            </Link>
          </div>
        </div>

        {isPickupTime && (
          <div className="fixed z-[9999] w-full h-full left-0 top-0 right-0 bottom-0 bg-black bg-opacity-50 inset-0 flex items-center justify-center max-[520px]:items-end">
            <div className="bg-white relative mt-[10.5rem] rounded-[30px] max-[520px]:rounded-b-none p-12 w-[40%] max-[520px]:w-[100%]">
              <span
                className="absolute cursor-pointer right-12 top-6 text-black text-[2.5rem]"
                onClick={closePickupTime}
              >
                ✖
              </span>
              <h2
                className="text-5xl w-[90%] mx-auto relative after:w-[15rem] after:absolute after:top-0 after:left-[50%] 
              after:translate-x-[-50%] after:h-[2px] after:bg-black after:opacity-30 pt-8 font-medium font-['Quicksand'] text-center mb-6 text-black"
              >
                Pickup Time
              </h2>
              <div className="mb-6 rounded-[10px] px-8 py-4 bg-[#ffffff] font-['Quicksand']">
                <div className="mb-6">
                  <h3 className="text-[20px] font-normal text-[#121212] font-['Quicksand'] mb-4">
                    Select Day
                  </h3>
                  <div className="grid grid-cols-2 gap-4 w-full">
                    {dayButtons.map((button, index) => (
                      <button
                        key={index}
                        onClick={() => handleButtonClick(index)}
                        className={`py-4 px-4 text-[17px] rounded-full uppercase shadow-[0px_4px_15px_0px_#0000001A] ${
                          selectedButton === index
                            ? "bg-[#2E3B7F] text-white"
                            : "bg-[#ffffff] text-black"
                        }`}
                      >
                        {button}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="">
                  <h3 className="text-[20px] font-normal text-[#121212] font-['Quicksand'] mb-4">
                    Select Time
                  </h3>
                  <div className="grid grid-cols-2 gap-4 w-full">
                    {timeButtons.map((button, index) => (
                      <button
                        key={index}
                        onClick={() => handleButtonClick2(index)}
                        className={`py-4 px-4 text-[17px] rounded-full uppercase shadow-[0px_4px_15px_0px_#0000001A] ${
                          selectedButton2 === index
                            ? "bg-[#2E3B7F] text-white"
                            : "bg-[#ffffff] text-black"
                        }`}
                      >
                        {button}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <h2 className="text-5xl relative font-medium font-['Quicksand'] text-center mb-6 text-black">
                Pickup Address
              </h2>
              <div className="flex flex-col items-center justify-between py-4 mb-2">
                <div className="w-full mb-4">
                  <input
                    type="text"
                    placeholder="House/Flat/Room No*"
                    className="w-full px-8 py-4 text-[17px] font-medium border border-[#C7C7C7] bg-[#F5F5F5] rounded-full placeholder:text-[#666666] text-[#666666]"
                  />
                </div>
                <div className="w-full mb-4">
                  <input
                    type="text"
                    placeholder="Sector/Area/Locality*"
                    className="w-full px-8 py-4 text-[17px] font-medium border border-[#C7C7C7] bg-[#F5F5F5] rounded-full placeholder:text-[#666666] text-[#666666]"
                  />
                </div>
                <div className="w-full flex items-center justify-between mb-4">
                  <input
                    type="text"
                    placeholder="City*"
                    className="w-[49%] px-8 py-4 text-[17px] font-medium border border-[#C7C7C7] bg-[#F5F5F5] rounded-full placeholder:text-[#666666] text-[#666666]"
                  />
                  <input
                    type="text"
                    placeholder="Pin Code*"
                    className="w-[49%] px-8 py-4 text-[17px] font-medium border border-[#C7C7C7] bg-[#F5F5F5] rounded-full placeholder:text-[#666666] text-[#666666]"
                  />
                </div>
                <div className="w-full mb-4">
                  <input
                    type="text"
                    placeholder="Landmark*"
                    className="w-full px-8 py-4 text-[17px] font-medium border border-[#C7C7C7] bg-[#F5F5F5] rounded-full placeholder:text-[#666666] text-[#666666]"
                  />
                </div>
              </div>
              <div className="w-[100%] flex items-center justify-center">
                <button
                  type="button"
                  className="w-[60%] px-8 py-6 bg-[#2E3B7F] rounded-[60px] text-[#ffffff] text-[20px]
              font-bold font-['Quicksand'] text-center uppercase"
                  onClick={pickupTimeClose}
                >
                  Schedule
                </button>
              </div>
            </div>
          </div>
        )}

        {isTerms && (
          <div className="fixed z-[9999] w-full h-full left-0 top-0 right-0 bottom-0 bg-black bg-opacity-50 inset-0 flex items-center justify-center max-[520px]:items-end">
            <div className="bg-white relative mt-[10.5rem] rounded-[30px] max-[520px]:rounded-b-none p-12 w-[40%] max-[520px]:w-[100%]">
              <span
                className="absolute cursor-pointer right-12 top-6 text-black text-[2.5rem]"
                onClick={closeTerms}
              >
                ✖
              </span>
              <h2
                className="text-5xl w-[90%] mx-auto relative after:w-[15rem] after:absolute after:top-0 after:left-[50%] 
              after:translate-x-[-50%] after:h-[2px] after:bg-black after:opacity-30 pt-8 font-medium font-['Quicksand'] text-center mb-6 text-black"
              >
                Term & Conditions
              </h2>
              <div className="mb-6 rounded-[10px] px-8 py-4 bg-[#ffffff] font-['Quicksand']">
                <p className="text-[18px] font-normal text-[#333333]">
                  At Suffai, we maintain regular checks with all onboarded
                  stores so that you get exceptional quality services. While we
                  take the most extensive measures to mitigate any chances of an
                  ill incident happening, and despite the stores’ best efforts,
                  we want to be transparent about the realistic expectations you
                  should have with the services.
                  <br />
                  <br />
                  Your trust is of extreme importance to us, hence we outline
                  important guidelines regarding payments and disputes that are
                  designed to safeguard your interests and provide clarity in
                  our interactions.
                  <br />
                  <br />
                  Here to serve you with all our hearts,
                  <br />
                  Team Suffai
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default CartPage;
