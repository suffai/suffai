import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Pagination from "@/admin/ui/dashboard/pagination/pagination";
import Search from "@/admin/ui/dashboard/search/search";
import Layout from "../layout";
import shopDummyImage from "@/assets/images/noavatar.png";

interface Shop {
  id: number;
  store_name: string;
  owner_name: string;
  email: string;
  img: string;
  createdAt: string;
  role: string;
  status: string;
}

const SHOPS: Shop[] = [
  {
    id: 1,
    store_name: "ABC Store",
    owner_name: "Adam",
    email: "adam@gmail.com",
    img: shopDummyImage,
    createdAt: "2 March, 2024",
    role: "Shop",
    status: "Active",
  },
  {
    id: 2,
    store_name: "XYZ Store",
    owner_name: "John",
    email: "john@gmail.com",
    img: shopDummyImage,
    createdAt: "5 March, 2024",
    role: "Shop",
    status: "Inactive",
  },
];

const ShopsPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredShops, setFilteredShops] = useState<Shop[]>([]);
  const ITEMS_PER_PAGE = 5;

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const page = parseInt(params.get("page") || "1", 10);
    const query = params.get("q") || "";

    setCurrentPage(page);
    filterUsers(query);
  }, [location.search]);

  const filterUsers = (query: string) => {
    const filtered = SHOPS.filter((shop) =>
      shop.store_name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredShops(filtered);
  };

  const handlePageChange = (type: "prev" | "next") => {
    const params = new URLSearchParams(location.search);
    const newPage = type === "prev" ? currentPage - 1 : currentPage + 1;
    params.set("page", newPage.toString());
    navigate(`?${params.toString()}`);
  };

  const displayedShops = filteredShops.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <Layout>
      <div className="bg-[#182237] p-8 mt-8 rounded-2xl">
        <div className="flex items-center justify-between">
          <Search placeholder="Search for a shop..." />
          <Link to="/admin/dashboard/shops/add">
            <button className="p-4 bg-[#5d57c9] text-white border-none rounded-[5px] cursor-pointer">
              Add New
            </button>
          </Link>
        </div>
        <table className="w-full">
          <thead>
            <tr>
              <td className="p-4">Store Name</td>
              <td className="p-4">Owner Name</td>
              <td className="p-4">Email</td>
              <td className="p-4">Created At</td>
              <td className="p-4">Role</td>
              <td className="p-4">Status</td>
              <td className="p-4">Action</td>
            </tr>
          </thead>
          <tbody>
            {displayedShops.map((shop) => (
              <tr key={shop.id}>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={shop.img || "/noavatar.png"}
                      alt=""
                      width={40}
                      height={40}
                      className="rounded-[50%] object-cover"
                    />
                    {shop.store_name}
                  </div>
                </td>
                <td className="p-4">{shop.owner_name}</td>
                <td className="p-4">{shop.email}</td>
                {/* <td className="p-4">
                  {shop.createdAt?.toString().slice(4, 16)}
                </td> */}
                <td className="p-4">{shop.createdAt}</td>
                <td className="p-4">{shop.role}</td>
                <td className="p-4">{shop.status}</td>
                <td className="p-4">
                  <div className="flex gap-4">
                    <Link
                      to={`/admin/dashboard/shops/${shop.id}`}
                      state={{ shop }}
                    >
                      <button className="px-4 py-2 rounded-[5px] text-white border-none cursor-pointer bg-[teal]">
                        View
                      </button>
                    </Link>
                    <form action="">
                      <input type="hidden" name="id" value={shop.id} />
                      <button className="px-4 py-2 rounded-[5px] text-white border-none cursor-pointer bg-[crimson]">
                        Delete
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          count={filteredShops.length}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </Layout>
  );
};

export default ShopsPage;
