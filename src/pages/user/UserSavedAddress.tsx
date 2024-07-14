import React from "react";
import "../../assets/css/setupProfile.css";
import { ChevronLeft, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const UserSavedAddress: React.FC = () => {

  return (
    <main className="setup-profile-page">
      <div className="setup-profile-container">
        <h1 className="flex items-center mb-16 font-['Quicksand'] text-[#121212]">
          <Link to="/user-settings" className="flex items-center">
            <ChevronLeft size={34} className="mr-4" />
            Saved addresses
          </Link>
        </h1>
        <div className="flex items-center justify-start relative w-full px-12 py-8 rounded-[10px] shadow-[0px_0px_13.86px_0.92px_#2E3B7F1A] mb-12">
          <div className="flex items-center justify-center mr-8">
            <MapPin size={25} className="text-[#666666]" />
          </div>
          <p className="text-[20px] font-medium text-[#666666]">
            Street 41 New Delhi, India
          </p>
          <Link
            to="/user-update-address"
            className="flex items-center absolute underline text-[20px] font-medium text-[#2E3B7F] right-12"
          >
            Change
          </Link>
        </div>
        <div className="flex items-center justify-start relative w-full px-12 py-8 rounded-[10px] shadow-[0px_0px_13.86px_0.92px_#2E3B7F1A] mb-12">
          <div className="flex items-center justify-center mr-8">
            <MapPin size={25} className="text-[#666666]" />
          </div>
          <p className="text-[20px] font-medium text-[#666666]">
            Street 41 New Delhi, India
          </p>
          <Link
            to="/user-update-address"
            className="flex items-center absolute underline text-[20px] font-medium text-[#2E3B7F] right-12"
          >
            Change
          </Link>
        </div>
        <div className="flex items-center justify-start relative w-full px-12 py-8 rounded-[10px] shadow-[0px_0px_13.86px_0.92px_#2E3B7F1A] mb-12">
          <div className="flex items-center justify-center mr-8">
            <MapPin size={25} className="text-[#666666]" />
          </div>
          <p className="text-[20px] font-medium text-[#666666]">
            Street 41 New Delhi, India
          </p>
          <Link
            to="/user-update-address"
            className="flex items-center absolute underline text-[20px] font-medium text-[#2E3B7F] right-12"
          >
            Change
          </Link>
        </div>
        <div className="flex items-center justify-start relative w-full px-12 py-8 rounded-[10px] shadow-[0px_0px_13.86px_0.92px_#2E3B7F1A]">
          <div className="flex items-center justify-center mr-8">
            <MapPin size={25} className="text-[#666666]" />
          </div>
          <p className="text-[20px] font-medium text-[#666666]">
            Street 41 New Delhi, India
          </p>
          <Link
            to="/user-update-address"
            className="flex items-center absolute underline text-[20px] font-medium text-[#2E3B7F] right-12"
          >
            Change
          </Link>
        </div>
      </div>
    </main>
  );
};

export default UserSavedAddress;
