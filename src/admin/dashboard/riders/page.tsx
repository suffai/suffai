import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Pagination from "@/admin/ui/dashboard/pagination/pagination";
import Search from "@/admin/ui/dashboard/search/search";
import Layout from "../layout";
import riderDummyImage from "@/assets/images/noavatar.png";

interface Rider {
  id: number;
  username: string;
  email: string;
  createdAt: string;
  role: string;
  status: string;
  img: string;
}

const RIDERS: Rider[] = [
  {
    id: 1,
    username: "Adam",
    email: "adam@gmail.com",
    createdAt: "2 March, 2024",
    role: "Admin",
    status: "Active",
    img: riderDummyImage,
  },
  {
    id: 2,
    username: "John",
    email: "john@gmail.com",
    createdAt: "5 March, 2024",
    role: "User",
    status: "Inactive",
    img: riderDummyImage,
  },
];

const RidersPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredRiders, setFilteredRiders] = useState<Rider[]>([]);
  const ITEMS_PER_PAGE = 5;

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const page = parseInt(params.get("page") || "1", 10);
    const query = params.get("q") || "";

    setCurrentPage(page);
    filterRiders(query);
  }, [location.search]);

  const filterRiders = (query: string) => {
    const filtered = RIDERS.filter((rider) =>
      rider.username.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredRiders(filtered);
  };

  const handlePageChange = (type: "prev" | "next") => {
    const params = new URLSearchParams(location.search);
    const newPage = type === "prev" ? currentPage - 1 : currentPage + 1;
    params.set("page", newPage.toString());
    navigate(`?${params.toString()}`);
  };

  const displayedRiders = filteredRiders.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <Layout>
      <div className="bg-[#182237] p-8 mt-8 rounded-2xl">
        <div className="flex items-center justify-between">
          <Search placeholder="Search for a rider..." />
          <Link to="/admin/dashboard/riders/add">
            <button className="p-4 bg-[#5d57c9] text-white border-none rounded-[5px] cursor-pointer">
              Add New
            </button>
          </Link>
        </div>
        <table className="w-full">
          <thead>
            <tr>
              <td className="p-4">Name</td>
              <td className="p-4">Email</td>
              <td className="p-4">Created At</td>
              <td className="p-4">Role</td>
              <td className="p-4">Status</td>
              <td className="p-4">Action</td>
            </tr>
          </thead>
          <tbody>
            {displayedRiders.map((rider) => (
              <tr key={rider.id}>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={rider.img || "../../src/assets/images/noavatar.png"}
                      alt=""
                      width={40}
                      height={40}
                      className="rounded-[50%] object-cover"
                    />
                    {rider.username}
                  </div>
                </td>
                <td className="p-4">{rider.email}</td>
                <td className="p-4">
                  {rider.createdAt?.toString().slice(4, 16)}
                </td>
                <td className="p-4">Rider</td>
                <td className="p-4">{rider.status}</td>
                <td className="p-4">
                  <div className="flex gap-4">
                    <Link
                      to={`/admin/dashboard/riders/${rider.id}`}
                      state={{ rider }}
                    >
                      <button className="px-4 py-2 rounded-[5px] text-white border-none cursor-pointer bg-[teal]">
                        View
                      </button>
                    </Link>
                    <form action="">
                      <input type="hidden" name="id" value={rider.id} />
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
          count={filteredRiders.length}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </Layout>
  );
};

export default RidersPage;
