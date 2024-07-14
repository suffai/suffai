import React, { useState } from "react";
import { Link } from "react-router-dom";
import userImage from "../../assets/images/person-gray-photo-placeholder-woman.jpg";
import { BadgeHelp, ChevronRight, FilePenLine, LogOut, MapPin, NotebookPen, NotepadText, Phone, Settings, SquarePen } from "lucide-react";
import Switch from "@/components/Switch";

const UserSettings: React.FC = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const toggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
  };

  return (
    <main className="relative font-['Quicksand']">
      <div className="mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h1 className="flex items-center font-['Quicksand'] text-[#121212]">
            Settings
          </h1>
          <div className="w-[10rem] rounded-full">
            <img
              className="w-full object-cover rounded-full"
              src={userImage}
              alt=""
            />
          </div>
        </div>

        <div className="mb-12">
          <h1 className="flex text-[28px] items-center mb-12 font-['Quicksand'] text-[#2E3B7F] pb-8 border-b-[1px] border-[#C7C7C7]">
            <span className="w-[4rem] h-[4rem] flex items-center justify-center bg-[#121212] rounded-full mr-8">
              <Settings size={25} className="text-white" />
            </span>
            General
          </h1>
          <Link
            className="flex items-center justify-start cursor-pointer mb-8"
            to="/user-edit-profile"
          >
            <FilePenLine size={25} className="text-[#2E3B7F] mr-8" />
            <span className="text-[24px] font-medium text-[#333333] capitalize">
              Edit Profile
            </span>
          </Link>
          <Link
            className="flex items-center justify-start cursor-pointer mb-8"
            to="/user-saved-address"
          >
            <MapPin size={25} className="text-[#2E3B7F] mr-8" />
            <span className="text-[24px] font-medium text-[#333333] capitalize">
              Saved addresses
            </span>
          </Link>
          <div className="flex items-center justify-between">
            <p className="text-[24px] font-medium text-[#666666] capitalize">
              general notification alert
            </p>
            <Switch isOn={isSwitchOn} handleToggle={toggleSwitch} />
          </div>
        </div>

        <div>
          <h1 className="flex text-[28px] items-center mb-12 font-['Quicksand'] text-[#2E3B7F] pb-8 border-b-[1px] border-[#C7C7C7]">
            <span className="w-[4rem] h-[4rem] flex items-center justify-center bg-[#121212] rounded-full mr-8">
              <NotepadText size={25} className="text-white" />
            </span>
            Others
          </h1>
          <Link
            className="flex items-center justify-start cursor-pointer mb-8 relative"
            to="https://api.whatsapp.com/message/HTHLWMH5K6CWG1?autoload=1&app_absent=0"
            target="_blank"
          >
            <Phone size={25} className="text-[#2E3B7F] mr-8" />
            <span className="text-[24px] font-medium text-[#333333]">
              WhatsApp Support
            </span>
            <ChevronRight size={25} className="absolute right-0" />
          </Link>
          <Link
            className="flex items-center justify-start cursor-pointer mb-8 relative"
            to="/user-invoice"
          >
            <NotebookPen size={25} className="text-[#2E3B7F] mr-8" />
            <span className="text-[24px] font-medium text-[#333333]">
              Invoices
            </span>
            <ChevronRight size={25} className="absolute right-0" />
          </Link>
          <Link
            className="flex items-center justify-start cursor-pointer mb-8 relative"
            to="/help-center"
          >
            <BadgeHelp size={25} className="text-[#2E3B7F] mr-8" />
            <span className="text-[24px] font-medium text-[#333333]">
              Help Center
            </span>
            <ChevronRight size={25} className="absolute right-0" />
          </Link>
          <Link
            className="flex items-center justify-start cursor-pointer mb-8 relative"
            to="/privacy"
          >
            <SquarePen size={25} className="text-[#2E3B7F] mr-8" />
            <span className="text-[24px] font-medium text-[#333333]">
              Privacy policy
            </span>
            <ChevronRight size={25} className="absolute right-0" />
          </Link>
          <Link
            className="flex items-center justify-start cursor-pointer mb-8 relative"
            to=""
          >
            <LogOut size={25} className="text-[#EF5350] mr-8" />
            <span className="text-[24px] font-medium text-[#EF5350]">
              Log out
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default UserSettings;
