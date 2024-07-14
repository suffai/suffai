import React from "react";
import { Link } from "react-router-dom";
import paymentSuccessImg from "../../assets/images/payment_success.png";

const PaymentSuccess: React.FC = () => {
  return (
    <main className="relative font-['Quicksand']">
      <div className="mx-auto flex flex-col items-center justify-center w-full py-20">
        <div className="w-[20rem] mb-20">
          <img className="w-full object-cover" src={paymentSuccessImg} alt="" />
        </div>

        <h1 className="flex items-center mb-12 font-['Quicksand'] text-[#121212]">
          Booking Confirmed
        </h1>

        <p className="text-[20px] font-normal text-[#666666]">
          Congratulations, you have successfully booked your service!
        </p>

        <h3 className="text-[24px] font-normal  font-['Quicksand'] text-[#333333] mt-8 mb-20">
          Order ID: 23842542
        </h3>

        <div className="mt-12 w-full flex items-center justify-center">
          <Link
            to="/payment-success"
            type="button"
            className="w-[60%] px-8 py-6 bg-[#2E3B7F] rounded-[60px] text-[#ffffff] text-[30px]
              font-bold font-['Quicksand'] text-center uppercase"
          >
            View Booking
          </Link>
        </div>
      </div>
    </main>
  );
};

export default PaymentSuccess;
