import { useState, useEffect, useRef } from "react";
import {
  BadgeHelp,
  CircleUserIcon,
  Heart,
  LogOut,
  Settings,
  ShoppingBasket,
  User,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAlert } from "../context/AlertContext";
import { useUser } from "../context/useUser";

const UserNameMenu = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUser();
  const { showAlert } = useAlert();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        dropdownRef.current &&
        target &&
        !dropdownRef.current.contains(target) &&
        !target.closest("#profileBtn")
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  if (!user) {
    return <p>No user data available. Please log in.</p>;
  }

  const handleLogOut = async () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("token");
    showAlert("Logout successful!", "success");
    setUser(null);
    window.dispatchEvent(new Event("authChange"));
    navigate("/");
  };

  return (
    <>
      <Link to="" className="mr-8">
        <Heart className="w-12 h-12 text-white font-semibold" />
      </Link>
      <Link to="/cart-page" className="mr-8">
        <ShoppingBasket className="w-12 h-12 text-white font-semibold" />
      </Link>
      <div className="relative mr-4" ref={dropdownRef}>
        <button
          onClick={toggleDropdown}
          className="header-btn flex items-center space-x-2"
          title="Go to your profile"
          id="profileBtn"
        >
          <CircleUserIcon className="text-black w-8 h-8" />
          <span>{user?.userName}</span>
        </button>
        {dropdownOpen && (
          <div className="absolute left-0 mt-2 w-auto min-w-[20rem] overflow-hidden p-4 bg-white border rounded-[16px] shadow-[0px_0px_48px_0px_rgba(0,0,0,0.24)] z-10">
            <Link
              to="/user-settings"
              className="flex items-center justify-start px-[16px] py-[12px] rounded-[8px] text-[16px] font-medium font-['Quicksand'] hover:bg-[#FAEAEA] transition-all"
            >
              <Settings size={20} className="mr-6" />
              Settings
            </Link>
            <Link
              className="flex items-center justify-start px-[16px] py-[12px] rounded-[8px] text-[16px] font-medium font-['Quicksand'] hover:bg-[#FAEAEA] transition-all"
              to="/user-edit-profile"
            >
              <User size={20} className="mr-6" />
              Edit Profile
            </Link>
            <hr className="my-2" />
            <Link
              className="flex items-center justify-start px-[16px] py-[12px] rounded-[8px] text-[16px] font-medium font-['Quicksand'] hover:bg-[#FAEAEA] transition-all"
              to="/help-center"
            >
              <BadgeHelp size={20} className="mr-6" />
              Help Center
            </Link>
            <button
              onClick={handleLogOut}
              className="flex items-center justify-start w-full text-left px-[16px] py-[12px] rounded-[8px] text-[16px] font-medium font-['Quicksand'] hover:bg-[#FAEAEA] transition-all"
            >
              <LogOut size={20} className="text-[#EF5350] mr-6" />
              Log Out
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default UserNameMenu;
