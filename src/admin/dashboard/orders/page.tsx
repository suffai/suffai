import React, { useState, useEffect, useMemo } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Search from "@/admin/ui/dashboard/search/search";
import Pagination from "@/admin/ui/dashboard/pagination/pagination";
import Layout from "../layout";

interface Order {
  id: number;
  customerEmail: string;
  orderId: string;
  price: number;
  createdAt: string;
  category: string;
  status: string;
  payment: string;
  img: string;
}

const dummyOrders: Order[] = [
  {
    id: 1,
    customerEmail: "customer1@example.com",
    orderId: "123456",
    price: 100,
    createdAt: "2024-07-01",
    category: "Laundry",
    status: "Pending",
    payment: "Paid",
    img: "https://via.placeholder.com/400x400?text=order1",
  },
  {
    id: 2,
    customerEmail: "customer2@example.com",
    orderId: "234567",
    price: 200,
    createdAt: "2024-07-02",
    category: "Dry Cleaning",
    status: "Completed",
    payment: "Unpaid",
    img: "https://via.placeholder.com/400x400?text=order2",
  },
  {
    id: 3,
    customerEmail: "customer3@example.com",
    orderId: "345678",
    price: 300,
    createdAt: "2024-07-03",
    category: "Ironing",
    status: "In Progress",
    payment: "Paid",
    img: "https://via.placeholder.com/400x400?text=order3",
  },
  {
    id: 4,
    customerEmail: "customer4@example.com",
    orderId: "456789",
    price: 400,
    createdAt: "2024-07-04",
    category: "Laundry",
    status: "Pending",
    payment: "Unpaid",
    img: "https://via.placeholder.com/400x400?text=order4",
  },
  {
    id: 5,
    customerEmail: "customer5@example.com",
    orderId: "567890",
    price: 500,
    createdAt: "2024-07-05",
    category: "Dry Cleaning",
    status: "Completed",
    payment: "Paid",
    img: "https://via.placeholder.com/400x400?text=order5",
  },
];

const OrdersPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [count, setCount] = useState<number>(0);
  const [orders, setOrders] = useState<Order[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const ITEMS_PER_PAGE = 5;

  const queryParams = useMemo(
    () => new URLSearchParams(location.search),
    [location.search]
  );

  useEffect(() => {
    const fetchOrders = async (q: string, page: number) => {
      const filteredOrders = dummyOrders.filter((order) =>
        order.customerEmail.toLowerCase().includes(q.toLowerCase())
      );
      const start = (page - 1) * ITEMS_PER_PAGE;
      const slicedOrders = filteredOrders.slice(start, start + ITEMS_PER_PAGE);

      return {
        count: filteredOrders.length,
        orders: slicedOrders,
      };
    };

    const q = queryParams.get("q") || "";
    const page = parseInt(queryParams.get("page") || "1", 10);

    fetchOrders(q, page).then(({ count, orders }) => {
      setCount(count);
      setOrders(orders);
      setCurrentPage(page);
    });
  }, [location.search, queryParams]);

  return (
    <Layout>
      <div className="bg-[#182237] p-8 mt-8 rounded-2xl">
        <div className="flex items-center justify-between">
          <Search placeholder="Search for an order..." />
          <Link to="/admin/dashboard/orders/add">
            <button className="p-4 bg-[#5d57c9] text-white border-none rounded-[5px] cursor-pointer">
              Add New
            </button>
          </Link>
        </div>
        <table className="w-full">
          <thead>
            <tr>
              <td className="p-4 text-left">Customer</td>
              <td className="p-4 text-left">Order Id</td>
              <td className="p-4 text-left">Price</td>
              <td className="p-4 text-left">Created At</td>
              <td className="p-4 text-left">Category</td>
              <td className="p-4 text-left">Status</td>
              <td className="p-4 text-left">Payment</td>
              <td className="p-4 text-left">Action</td>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="p-4 text-left">
                  <div className="flex items-center gap-4">
                    <img
                      src={order.img || "../../src/assets/images/noproduct.jpg"}
                      alt=""
                      width={40}
                      height={40}
                      className="rounded-[50%] object-cover"
                    />
                    <strong>Order by: </strong>
                    {order.customerEmail}
                  </div>
                </td>
                <td className="p-4 text-left">{order.orderId}</td>
                <td className="p-4 text-left">${order.price}</td>
                <td className="p-4 text-left">{order.createdAt}</td>
                <td className="p-4 text-left">{order.category}</td>
                <td className="p-4 text-left">{order.status}</td>
                <td className="p-4 text-left">{order.payment}</td>
                <td className="p-4 text-left">
                  <div className="flex gap-4">
                    <Link
                      to={`/admin/dashboard/orders/${order.id}`}
                      state={{ order }}
                    >
                      <button className="py-2 px-4 rounded-[5px] text-white border-none cursor-pointer bg-[teal]">
                        View
                      </button>
                    </Link>
                    <form action="">
                      <input type="hidden" name="id" value={order.id} />
                      <button className="py-2 px-4 rounded-[5px] text-white border-none cursor-pointer bg-[crimson]">
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
          count={count}
          currentPage={currentPage}
          onPageChange={(type) => {
            const newPage = type === "prev" ? currentPage - 1 : currentPage + 1;
            navigate(`?page=${newPage}&q=${queryParams.get("q") || ""}`);
          }}
        />
      </div>
    </Layout>
  );
};

export default OrdersPage;
