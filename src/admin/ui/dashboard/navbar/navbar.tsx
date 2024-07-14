"use client";
import { useLocation } from "react-router-dom";
import {
    MdNotifications,
    MdOutlineChat,
    MdPublic,
    MdSearch,
} from "react-icons/md";

const Navbar = () => {
    
  const location = useLocation();
  const pathname = location.pathname;

    return (
      <div className="p-8 rounded-2xl bg-[#182237] flex items-center justify-between font-['Quicksand']">
        <div className="text-[#b7bac1] font-bold capitalize text-[1.6rem]">
          {pathname.split("/").pop()}
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4 bg-[#2e374a] p-4 rounded-2xl">
            <MdSearch size={20} className="text-[#b7bac1]" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border-none text-white text-[1.4rem]"
            />
          </div>
          <div className="flex gap-8 text-[#b7bac1]">
            <MdOutlineChat size={20} className="cursor-pointer" />
            <MdNotifications size={20} className="cursor-pointer" />
            <MdPublic size={20} className="cursor-pointer" />
          </div>
        </div>
      </div>
    );
};

export default Navbar;
