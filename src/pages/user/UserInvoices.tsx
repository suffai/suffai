import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const UserInvoices: React.FC = () => {
  const [isInvoiceOpen, setIsInvoiceOpen] = useState<boolean>(false);

  const toggleInvoicePopup = () => {
    setIsInvoiceOpen(!isInvoiceOpen);
  };

  const closeInvoicePopup = () => {
    setIsInvoiceOpen(false);
  };

  return (
    <main>
      <div>
        <h1 className="flex items-center mb-16 font-['Quicksand'] text-[#121212]">
          <Link to="/user-settings" className="flex items-center">
            <ChevronLeft size={34} className="mr-4" />
            Invoices
          </Link>
        </h1>
        <div
          className="flex items-center justify-start relative w-full px-12 py-8 rounded-[10px] shadow-[0px_0px_13.86px_0.92px_#2E3B7F1A] mb-12 cursor-pointer"
          onClick={toggleInvoicePopup}
        >
          <div className="flex items-center justify-center mr-8 w-[12rem] h-[12rem] rounded-[10px]">
            <img
              src="https://via.placeholder.com/300x200?text=Shop"
              alt=""
              className="object-cover w-[12rem] h-[12rem] rounded-[10px]"
            />
          </div>
          <div>
            <h2 className="text-[26px] font-medium text-[#333333] font-['Quicksand'] mb-4">
              Eco Laundry
            </h2>
            <p className="text-[20px] font-normal text-[#333333] mb-4">
              3 Dresses
            </p>
            <div className="flex items-center justify-between">
              <p className="text-[20px] font-normal text-[#333333]">₹900</p>
              <Link
                to=""
                className="flex items-center absolute underline text-[20px] font-normal text-[#3771FF] right-12"
              >
                Download pdf
              </Link>
            </div>
          </div>
        </div>
        <div
          className="flex items-center justify-start relative w-full px-12 py-8 rounded-[10px] shadow-[0px_0px_13.86px_0.92px_#2E3B7F1A] mb-12 cursor-pointer"
          onClick={toggleInvoicePopup}
        >
          <div className="flex items-center justify-center mr-8 w-[12rem] h-[12rem] rounded-[10px]">
            <img
              src="https://via.placeholder.com/300x200?text=Shop"
              alt=""
              className="object-cover w-[12rem] h-[12rem] rounded-[10px]"
            />
          </div>
          <div>
            <h2 className="text-[26px] font-medium text-[#333333] font-['Quicksand'] mb-4">
              Eco Laundry
            </h2>
            <p className="text-[20px] font-normal text-[#333333] mb-4">
              3 Dresses
            </p>
            <div className="flex items-center justify-between">
              <p className="text-[20px] font-normal text-[#333333]">₹900</p>
              <Link
                to=""
                className="flex items-center absolute underline text-[20px] font-normal text-[#3771FF] right-12"
              >
                Download pdf
              </Link>
            </div>
          </div>
        </div>
        <div
          className="flex items-center justify-start relative w-full px-12 py-8 rounded-[10px] shadow-[0px_0px_13.86px_0.92px_#2E3B7F1A] mb-12 cursor-pointer"
          onClick={toggleInvoicePopup}
        >
          <div className="flex items-center justify-center mr-8 w-[12rem] h-[12rem] rounded-[10px]">
            <img
              src="https://via.placeholder.com/300x200?text=Shop"
              alt=""
              className="object-cover w-[12rem] h-[12rem] rounded-[10px]"
            />
          </div>
          <div>
            <h2 className="text-[26px] font-medium text-[#333333] font-['Quicksand'] mb-4">
              Eco Laundry
            </h2>
            <p className="text-[20px] font-normal text-[#333333] mb-4">
              3 Dresses
            </p>
            <div className="flex items-center justify-between">
              <p className="text-[20px] font-normal text-[#333333]">₹900</p>
              <Link
                to=""
                className="flex items-center absolute underline text-[20px] font-normal text-[#3771FF] right-12"
              >
                Download pdf
              </Link>
            </div>
          </div>
        </div>
        <div
          className="flex items-center justify-start relative w-full px-12 py-8 rounded-[10px] shadow-[0px_0px_13.86px_0.92px_#2E3B7F1A] mb-12 cursor-pointer"
          onClick={toggleInvoicePopup}
        >
          <div className="flex items-center justify-center mr-8 w-[12rem] h-[12rem] rounded-[10px]">
            <img
              src="https://via.placeholder.com/300x200?text=Shop"
              alt=""
              className="object-cover w-[12rem] h-[12rem] rounded-[10px]"
            />
          </div>
          <div>
            <h2 className="text-[26px] font-medium text-[#333333] font-['Quicksand'] mb-4">
              Eco Laundry
            </h2>
            <p className="text-[20px] font-normal text-[#333333] mb-4">
              3 Dresses
            </p>
            <div className="flex items-center justify-between">
              <p className="text-[20px] font-normal text-[#333333]">₹900</p>
              <Link
                to=""
                className="flex items-center absolute underline text-[20px] font-normal text-[#3771FF] right-12"
              >
                Download pdf
              </Link>
            </div>
          </div>
        </div>
        <div
          className="flex items-center justify-start relative w-full px-12 py-8 rounded-[10px] shadow-[0px_0px_13.86px_0.92px_#2E3B7F1A] mb-12 cursor-pointer"
          onClick={toggleInvoicePopup}
        >
          <div className="flex items-center justify-center mr-8 w-[12rem] h-[12rem] rounded-[10px]">
            <img
              src="https://via.placeholder.com/300x200?text=Shop"
              alt=""
              className="object-cover w-[12rem] h-[12rem] rounded-[10px]"
            />
          </div>
          <div>
            <h2 className="text-[26px] font-medium text-[#333333] font-['Quicksand'] mb-4">
              Eco Laundry
            </h2>
            <p className="text-[20px] font-normal text-[#333333] mb-4">
              3 Dresses
            </p>
            <div className="flex items-center justify-between">
              <p className="text-[20px] font-normal text-[#333333]">₹900</p>
              <Link
                to=""
                className="flex items-center absolute underline text-[20px] font-normal text-[#3771FF] right-12"
              >
                Download pdf
              </Link>
            </div>
          </div>
        </div>

        {isInvoiceOpen && (
          <div className="fixed z-[9999] w-full h-full left-0 top-0 right-0 bottom-0 bg-black bg-opacity-50 inset-0 flex items-center justify-center max-[520px]:items-end">
            <div className="bg-white relative mt-[10.5rem] rounded-[30px] max-[520px]:rounded-b-none p-12 w-[40%] max-[520px]:w-[100%]">
              <span
                className="absolute cursor-pointer right-12 top-6 text-black text-[2.5rem]"
                onClick={closeInvoicePopup}
              >
                ✖
              </span>
              <h2
                className="text-6xl w-[90%] mx-auto relative after:w-[15rem] after:absolute after:top-0 after:left-[50%] 
              after:translate-x-[-50%] after:h-[2px] after:bg-black after:opacity-30 pt-8 font-medium font-['Quicksand'] text-center mb-8 text-black"
              >
                Invoice details
              </h2>
              <div className="mb-8 px-8 py-4 bg-[#ffffff] border-t border-[#c7c7c7] font-['Quicksand']">
                <p className="flex items-center justify-between text-[20px] font-normal text-[#333333] mb-5">
                  <span>Customer Name</span>
                  <span className="text-[#666666]">Jayesh Arya</span>
                </p>
                <p className="flex items-center justify-between text-[20px] font-normal text-[#333333] mb-5">
                  <span>Delivery Address</span>
                  <span className="text-[#666666]">
                    39a, Thakur Complex Delhi
                  </span>
                </p>
                <p className="flex items-center justify-between text-[20px] font-normal text-[#333333] mb-5">
                  <span>Store Name</span>
                  <span className="text-[#666666]">JK Dry clean</span>
                </p>
                <p className="flex items-center justify-between text-[20px] font-normal text-[#333333] mb-5">
                  <span>Store Address</span>
                  <span className="text-[#666666]">
                    1915, Sirkiwalan, Delhi
                  </span>
                </p>
                <p className="flex items-center justify-between text-[20px] font-normal text-[#333333] mb-5">
                  <span>Order ID</span>
                  <span className="text-[#666666]">28372425</span>
                </p>
                <p className="flex items-center justify-between text-[20px] font-normal text-[#333333] mb-5">
                  <span>Service Title</span>
                  <span className="text-[#666666]">Wash & fold</span>
                </p>
                <p className="flex items-center justify-between text-[20px] font-normal text-[#333333] mb-5">
                  <span>Dresses</span>
                  <span className="text-[#666666]">3</span>
                </p>
                <p className="flex items-center justify-between text-[20px] font-normal text-[#333333] mb-5">
                  <span>Address</span>
                  <span className="text-[#666666]">
                    Street 44 new Delhi India
                  </span>
                </p>
                <p className="flex items-center justify-between text-[20px] font-normal text-[#333333] mb-5">
                  <span>Date & Time</span>
                  <span className="text-[#666666]">18 Jun 2024 | 4 PM</span>
                </p>
                <p className="flex items-center justify-between text-[20px] font-normal text-[#333333] mb-5">
                  <span>Amount</span>
                  <span className="text-[#666666]">₹900</span>
                </p>
                <p className="flex items-center justify-between text-[20px] font-normal text-[#333333] mb-5">
                  <span>Tax</span>
                  <span className="text-[#666666]">₹0.00</span>
                </p>
                <p className="flex items-center justify-between text-[20px] font-normal text-[#333333] mb-5">
                  <span>Delivery Charges</span>
                  <span className="text-[#666666]">₹100</span>
                </p>
                <p className="flex items-center justify-between text-[20px] font-normal text-[#333333] mb-5">
                  <span>Suffai Discount</span>
                  <span className="text-[#666666]">₹150</span>
                </p>
                <p className="flex items-center justify-between text-[20px] font-normal text-[#333333] mb-5">
                  <span>Total</span>
                  <span className="text-[#666666]">₹900</span>
                </p>
                <p className="flex items-center justify-between text-[20px] font-normal text-[#333333]">
                  <span>Payment Mode</span>
                  <span className="text-[#666666]">cash on delivery </span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default UserInvoices;
