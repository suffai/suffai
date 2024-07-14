import React from "react";
import MenuLink from "./menuLink/menuLink";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
  MdDeliveryDining,
} from "react-icons/md";
import { BsShop, BsCartCheckFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import noAvImg from "@/assets/images/noavatar.png";

interface MenuItem {
  title: string;
  path: string;
  icon: React.ReactNode;
}

interface MenuCategory {
  title: string;
  list: MenuItem[];
}

const getMenuItemsForUserRole = (userRole: string): MenuCategory[] => {
  let menuItems: MenuCategory[] = [];
  switch (userRole) {
    case "Admin":
      menuItems = adminMenuItems;
      break;
    case "Rider":
      menuItems = riderMenuItems;
      break;
    case "Shop":
      menuItems = shopMenuItems;
      break;
    default:
      break;
  }
  return menuItems;
};

const adminMenuItems: MenuCategory[] = [
  {
    title: "Pages",
    list: [
      { title: "Dashboard", path: "/admin/dashboard", icon: <MdDashboard /> },
      {
        title: "Users",
        path: "/admin/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Services",
        path: "/admin/dashboard/services",
        icon: <MdShoppingBag />,
      },
      { title: "Orders", path: "/admin/dashboard/orders", icon: <BsCartCheckFill /> },
      {
        title: "Transactions",
        path: "/admin/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      { title: "Revenue", path: "/admin/dashboard/revenue", icon: <MdWork /> },
      { title: "Reports", path: "/admin/dashboard/reports", icon: <MdAnalytics /> },
      { title: "Customers", path: "/admin/dashboard/customers", icon: <MdPeople /> },
    ],
  },
  {
    title: "Partners",
    list: [
      {
        title: "Riders",
        path: "/admin/dashboard/riders",
        icon: <MdDeliveryDining />,
      },
      { title: "Shops", path: "/admin/dashboard/shops", icon: <BsShop /> },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/admin/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      { title: "Help", path: "/admin/dashboard/help", icon: <MdHelpCenter /> },
    ],
  },
];

const riderMenuItems: MenuCategory[] = [
  {
    title: "Pages",
    list: [
      { title: "Dashboard", path: "/admin/dashboard", icon: <MdDashboard /> },
      { title: "Profile", path: "/admin/dashboard/profile", icon: <CgProfile /> },
      { title: "Orders", path: "/admin/dashboard/orders", icon: <BsCartCheckFill /> },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/admin/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      { title: "Help", path: "/admin/dashboard/help", icon: <MdHelpCenter /> },
    ],
  },
];

const shopMenuItems: MenuCategory[] = [
  {
    title: "Pages",
    list: [
      { title: "Dashboard", path: "/admin/dashboard", icon: <MdDashboard /> },
      {
        title: "Services",
        path: "/admin/dashboard/services",
        icon: <MdShoppingBag />,
      },
      { title: "Orders", path: "/admin/dashboard/orders", icon: <BsCartCheckFill /> },
      {
        title: "Transactions",
        path: "/admin/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
      { title: "Profile", path: "/admin/dashboard/profile", icon: <CgProfile /> },
    ],
  },
  {
    title: "Analytics",
    list: [
      { title: "Revenue", path: "/admin/dashboard/revenue", icon: <MdWork /> },
      { title: "Reports", path: "/admin/dashboard/reports", icon: <MdAnalytics /> },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/admin/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      { title: "Help", path: "/admin/dashboard/help", icon: <MdHelpCenter /> },
    ],
  },
];

const Sidebar: React.FC = () => {
  const menuItems = getMenuItemsForUserRole("Admin");

  return (
    <div className="sticky top-16 font-['Quicksand'] text-white">
      <div className="flex items-center gap-8 mb-8">
        <img
          className="rounded-[50%] object-cover"
          src={noAvImg}
          alt=""
          width="50"
          height="50"
        />
        <div className="flex flex-col">
          <span className="font-medium text-[1.8rem]">Admin</span>
          <span className="text-[1.4rem] text-[#b7bac1]">Administrator</span>
        </div>
      </div>
      <ul className="list-none">
        {menuItems.map((cat) => (
          <React.Fragment key={cat.title}>
            <li>
              <span className="text-[1.4rem] text-[#b7bac1] font-bold my-4">
                {cat.title}
              </span>
              {cat.list.map((item) => (
                <MenuLink item={item} key={item.title} />
              ))}
            </li>
          </React.Fragment>
        ))}
      </ul>
      <form action="">
        <button className="p-8 my-[5px] flex items-center gap-4 cursor-pointer rounded-2xl bg-transparent border-none w-full text-white hover:bg-[#2e374a] text-[1.6rem]">
          <MdLogout />
          Logout
        </button>
      </form>
    </div>
  );
};

export default Sidebar;