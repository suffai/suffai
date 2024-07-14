import { useState, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Pagination from "@/admin/ui/dashboard/pagination/pagination";
import { Link } from "react-router-dom";
import Search from "@/admin/ui/dashboard/search/search";
import Layout from "../layout";

interface Transactions {
  id: number;
  name: string;
  trnId: string;
  orderId: string;
  amount: number;
  category: string;
  createdAt: string;
  img: string;
}

const dummyTransactions: Transactions[] = [
  {
    id: 1,
    name: "customer1@example.com",
    trnId: "123456",
    orderId: "123456",
    amount: 100,
    category: "Cleaning",
    createdAt: "2024-07-01",
    img: "https://via.placeholder.com/400x400?text=laundry",
  },

  {
    id: 2,
    name: "customer2@example.com",
    trnId: "234567",
    orderId: "234567",
    amount: 200,
    category: "Ironing",
    createdAt: "2024-07-05",
    img: "https://via.placeholder.com/400x400?text=ironing",
  },

  {
    id: 3,
    name: "customer3@example.com",
    trnId: "345678",
    orderId: "345678",
    amount: 300,
    category: "Cleaning",
    createdAt: "2024-07-10",
    img: "https://via.placeholder.com/400x400?text=dry-cleaning",
  },
];

const TransactionPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [transactions, setTransactions] = useState<Transactions[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 5;

  const queryParams = useMemo(
    () => new URLSearchParams(location.search),
    [location.search]
  );

  useEffect(() => {
    const fetchTransactions = async (q: string, page: number) => {
      const filteredTransactions = dummyTransactions.filter((transaction) =>
        transaction.name.toLowerCase().includes(q.toLowerCase())
      );
      const start = (page - 1) * ITEMS_PER_PAGE;
      const slicedTransactions = filteredTransactions.slice(
        start,
        start + ITEMS_PER_PAGE
      );

      return {
        count: filteredTransactions.length,
        transactions: slicedTransactions,
      };
    };

    const q = queryParams.get("q") || "";
    const page = parseInt(queryParams.get("page") || "1", 10);

    fetchTransactions(q, page).then(({ count, transactions }) => {
      setCount(count);
      setTransactions(transactions);
      setCurrentPage(page);
    });
  }, [location.search, queryParams]);

  return (
    <Layout>
      <div className="bg-[#182237] p-8 mt-8 rounded-2xl">
        <div className="flex items-center justify-between">
          <Search placeholder="Search for a service..." />
        </div>
        <table className="w-full">
          <thead>
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Transactions ID</th>
              <th className="p-4 text-left">Order ID</th>
              <th className="p-4 text-left">Amount</th>
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-left">Created At</th>
              <th className="p-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="p-4 text-left">
                  <div className="flex items-center gap-4">
                    <img
                      src={
                        transaction.img || "../src/assets/images/noproduct.jpg"
                      }
                      alt=""
                      width={40}
                      height={40}
                      className="rounded-[50%] object-cover"
                    />
                    {transaction.name}
                  </div>
                </td>
                <td className="p-4 text-left">{transaction.trnId}</td>
                <td className="p-4 text-left">{transaction.orderId}</td>
                <td className="p-4 text-left">{transaction.amount}</td>
                <td className="p-4 text-left">{transaction.category}</td>
                {/* <td>{service.createdAt?.toString().slice(4, 16)}</td> */}
                <td className="p-4 text-left">{transaction.createdAt}</td>
                <td className="p-4 text-left">
                  <div className="flex gap-4">
                    <Link
                      to={`/admin/dashboard/transactions/${transaction.id}`}
                      state={{ transaction }}
                    >
                      <button className="py-2 px-4 rounded-[5px] text-white border-none cursor-pointer bg-[teal]">
                        View
                      </button>
                    </Link>
                    <form>
                      <input type="hidden" name="id" value={transaction.id} />
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

export default TransactionPage;
