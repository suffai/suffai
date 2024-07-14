import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Pagination from "@/admin/ui/dashboard/pagination/pagination";
import Search from "@/admin/ui/dashboard/search/search";
import Layout from "../layout";

interface User {
  id: number;
  username: string;
  email: string;
  createdAt: string;
  role: string;
  status: string;
}

const USERS: User[] = [
  {
    id: 1,
    username: "Adam",
    email: "adam@gmail.com",
    createdAt: "2 March, 2024",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    username: "John",
    email: "john@gmail.com",
    createdAt: "5 March, 2024",
    role: "User",
    status: "Inactive",
  },
];

const UsersPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
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
    const filtered = USERS.filter((user) =>
      user.username.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  const handlePageChange = (type: "prev" | "next") => {
    const params = new URLSearchParams(location.search);
    const newPage = type === "prev" ? currentPage - 1 : currentPage + 1;
    params.set("page", newPage.toString());
    navigate(`?${params.toString()}`);
  };

  const displayedUsers = filteredUsers.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <Layout>
      <div className="bg-[#182237] p-8 mt-8 rounded-2xl">
        <div className="flex items-center justify-between">
          <Search placeholder="Search for a rider..." />
          <Link to="/admin/dashboard/users/add">
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
            {displayedUsers.map((user) => (
              <tr key={user.id}>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <img
                      src="../../src/assets/images/noavatar.png"
                      alt=""
                      width={40}
                      height={40}
                      className="rounded-[50%] object-cover"
                    />
                    {user.username}
                  </div>
                </td>
                <td className="p-4">{user.email}</td>
                <td className="p-4">{user.createdAt}</td>
                <td className="p-4">{user.role}</td>
                <td className="p-4">{user.status}</td>
                <td className="p-4">
                  <div className="flex gap-4">
                    <Link
                      to={`/admin/dashboard/users/${user.id}`}
                      state={{ user }}
                    >
                      <button className="px-4 py-2 rounded-[5px] text-white border-none cursor-pointer bg-[teal]">
                        View
                      </button>
                    </Link>
                    <form action="">
                      <input type="hidden" name="id" value={user.id} />
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
          count={filteredUsers.length}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </Layout>
  );
};

export default UsersPage;
