import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Pagination from "@/admin/ui/dashboard/pagination/pagination";
import Search from "@/admin/ui/dashboard/search/search";
import Layout from "../layout";

interface Customer {
  id: number;
  username: string;
  email: string;
  createdAt: string;
  role: string;
  status: string;
}

const CUSTOMERS: Customer[] = [
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

const CustomersPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredCustomers, setFilteredCustomers] = useState<Customer[]>([]);
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
    const filtered = CUSTOMERS.filter((customer) =>
      customer.username.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCustomers(filtered);
  };

  const handlePageChange = (type: "prev" | "next") => {
    const params = new URLSearchParams(location.search);
    const newPage = type === "prev" ? currentPage - 1 : currentPage + 1;
    params.set("page", newPage.toString());
    navigate(`?${params.toString()}`);
  };

  const displayedCustomers = filteredCustomers.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <Layout>
      <div className="bg-[#182237] p-8 mt-8 rounded-2xl">
        <div className="flex items-center justify-between">
          <Search placeholder="Search for a customer..." />
          <Link to="/admin/dashboard/customers/add">
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
            {displayedCustomers.map((customer) => (
              <tr key={customer.id}>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <img
                      src="../../src/assets/images/noavatar.png"
                      alt=""
                      width={40}
                      height={40}
                      className="rounded-[50%] object-cover"
                    />
                    {customer.username}
                  </div>
                </td>
                <td className="p-4">{customer.email}</td>
                <td className="p-4">{customer.createdAt}</td>
                <td className="p-4">{customer.role}</td>
                <td className="p-4">{customer.status}</td>
                <td className="p-4">
                  <div className="flex gap-4">
                    <Link
                      to={`/admin/dashboard/customers/${customer.id}`}
                      state={{ customer }}
                    >
                      <button className="px-4 py-2 rounded-[5px] text-white border-none cursor-pointer bg-[teal]">
                        View
                      </button>
                    </Link>
                    <form action="">
                      <input type="hidden" name="id" value={customer.id} />
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
          count={filteredCustomers.length}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </Layout>
  );
};

export default CustomersPage;
