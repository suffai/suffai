import React from "react";
import { ChevronLeft, IndianRupee } from "lucide-react";
import { Link } from "react-router-dom";

const PaymentPage: React.FC = () => {

  return (
    <main className="relative font-['Quicksand']">
      <div className="mx-auto">
        <h1 className="flex items-center mb-12 font-['Quicksand'] text-[#121212]">
          <Link to="/cart-page" className="flex items-center">
            <ChevronLeft size={34} className="mr-4" />
            Review summary
          </Link>
        </h1>

        <div className="rounded-[10px] shadow-[0px_0px_30px_0px_#0000001A] p-8 mb-10">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="w-full flex items-center justify-between mb-6">
              <h3 className="text-[22px] font-semibold text-[#333333] font-['Quicksand']">
                Service Title
              </h3>
              <p className="text-[20px] font-normal text-[#666666] font-['Quicksand']">
                Wash & fold
              </p>
            </div>
            <div className="w-full flex items-center justify-between mb-6">
              <h3 className="text-[22px] font-semibold text-[#333333] font-['Quicksand']">
                Dresses
              </h3>
              <p className="text-[20px] font-normal text-[#666666] font-['Quicksand']">
                3
              </p>
            </div>
            <div className="w-full flex items-center justify-between mb-6">
              <h3 className="text-[22px] font-semibold text-[#333333] font-['Quicksand']">
                Address
              </h3>
              <p className="text-[20px] font-normal text-[#666666] font-['Quicksand']">
                Street 44 new Delhi India
              </p>
            </div>
            <div className="w-full flex items-center justify-between">
              <h3 className="text-[22px] font-semibold text-[#333333] font-['Quicksand']">
                Date & Time
              </h3>
              <p className="text-[20px] font-normal text-[#666666] font-['Quicksand']">
                18 Jun 2024 | 4 PM
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[10px] shadow-[0px_0px_30px_0px_#0000001A] p-8 mb-10">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="w-full flex items-center justify-between mb-6">
              <h3 className="text-[22px] font-semibold text-[#333333] font-['Quicksand']">
                Amount
              </h3>
              <p className="text-[20px] font-normal text-[#666666] font-['Quicksand']">
                ₹900
              </p>
            </div>
            <div className="w-full flex items-center justify-between mb-6">
              <h3 className="text-[22px] font-semibold text-[#333333] font-['Quicksand']">
                Tax
              </h3>
              <p className="text-[20px] font-normal text-[#666666] font-['Quicksand']">
                ₹0.00
              </p>
            </div>
            <div className="w-full flex items-center justify-between">
              <h3 className="text-[22px] font-semibold text-[#333333] font-['Quicksand']">
                Total
              </h3>
              <p className="text-[20px] font-normal text-[#666666] font-['Quicksand']">
                ₹900
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[10px] shadow-[0px_0px_30px_0px_#0000001A] p-8 mb-10">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="w-full flex items-center justify-start">
              <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#FF9800] mr-8">
                <IndianRupee size={25} className="stroke-white fill-white" />
              </div>
              <h3 className="text-[22px] uppercase font-semibold text-[#333333] font-['Quicksand']">
                Cash on delivery
              </h3>
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-center">
          <Link
            to="/payment-success"
            type="button"
            className="w-[60%] px-8 py-6 bg-[#2E3B7F] rounded-[60px] text-[#ffffff] text-[30px]
              font-bold font-['Quicksand'] text-center uppercase"
          >
            Confirm Payment
          </Link>
        </div>
      </div>
    </main>
  );
};

export default PaymentPage;
