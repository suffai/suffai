import { Link, useLocation } from "react-router-dom";
import { ReactNode } from "react";

interface MenuItem {
  path: string;
  icon: ReactNode;
  title: string;
}

interface MenuLinkProps {
  item: MenuItem;
}

const MenuLink: React.FC<MenuLinkProps> = ({ item }) => {
  const location = useLocation();
  const isActive = location.pathname === item.path;

  return (
    <Link
      to={item.path}
      className={`p-8 flex items-center gap-4 my-[5px] rounded-2xl text-[1.6rem] hover:bg-[#2e374a] ${
        isActive ? "bg-[#2e374a]" : ""
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
