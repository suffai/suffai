import { useState, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Pagination from "@/admin/ui/dashboard/pagination/pagination";
import { Link } from "react-router-dom";
import Search from "@/admin/ui/dashboard/search/search";
import Layout from "../layout";

interface Service {
  id: number;
  title: string;
  category: string;
  washing_per_kilo_price: number;
  min_kilo_crit: number;
  createdAt: string;
  img: string;
}

const dummyServices: Service[] = [
  {
    id: 1,
    title: "Laundry Service",
    category: "Cleaning",
    washing_per_kilo_price: 10,
    min_kilo_crit: 5,
    createdAt: "2024-07-01",
    img: "https://via.placeholder.com/400x400?text=laundry",
  },

  {
    id: 2,
    title: "Ironing Service",
    category: "Ironing",
    washing_per_kilo_price: 5,
    min_kilo_crit: 3,
    createdAt: "2024-07-05",
    img: "https://via.placeholder.com/400x400?text=ironing",
  },

  {
    id: 3,
    title: "Dry Cleaning",
    category: "Cleaning",
    washing_per_kilo_price: 15,
    min_kilo_crit: 2,
    createdAt: "2024-07-10",
    img: "https://via.placeholder.com/400x400?text=dry-cleaning",
  },
];

const ServicesPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [services, setServices] = useState<Service[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 5;

  const queryParams = useMemo(
    () => new URLSearchParams(location.search),
    [location.search]
  );

  useEffect(() => {
    const fetchServices = async (q: string, page: number) => {
      const filteredServices = dummyServices.filter((service) =>
        service.title.toLowerCase().includes(q.toLowerCase())
      );
      const start = (page - 1) * ITEMS_PER_PAGE;
      const slicedServices = filteredServices.slice(
        start,
        start + ITEMS_PER_PAGE
      );

      return {
        count: filteredServices.length,
        services: slicedServices,
      };
    };

    const q = queryParams.get("q") || "";
    const page = parseInt(queryParams.get("page") || "1", 10);

    fetchServices(q, page).then(({ count, services }) => {
      setCount(count);
      setServices(services);
      setCurrentPage(page);
    });
  }, [location.search, queryParams]);

  return (
    <Layout>
      <div className="bg-[#182237] p-8 mt-8 rounded-2xl">
        <div className="flex items-center justify-between">
          <Search placeholder="Search for a service..." />
          <Link to="/admin/dashboard/services/add">
            <button className="p-4 bg-[#5d57c9] text-white border-none rounded-[5px] cursor-pointer">
              Add New
            </button>
          </Link>
        </div>
        <table className="w-full">
          <thead>
            <tr>
              <th className="p-4 text-left">Title</th>
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-left">Price per Kilo</th>
              <th className="p-4 text-left">Minimum kilo criteria</th>
              <th className="p-4 text-left">Created At</th>
              <th className="p-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.id}>
                <td className="p-4 text-left">
                  <div className="flex items-center gap-4">
                    <img
                      src={service.img || "../src/assets/images/noproduct.jpg"}
                      alt=""
                      width={40}
                      height={40}
                      className="rounded-[50%] object-cover"
                    />
                    {service.title}
                  </div>
                </td>
                <td className="p-4 text-left">{service.category}</td>
                <td className="p-4 text-left">
                  ${service.washing_per_kilo_price}
                </td>
                <td className="p-4 text-left">{service.min_kilo_crit} Kilo</td>
                {/* <td>{service.createdAt?.toString().slice(4, 16)}</td> */}
                <td className="p-4 text-left">{service.createdAt}</td>
                <td className="p-4 text-left">
                  <div className="flex gap-4">
                    {/* View button */}
                    <Link
                      to={`/admin/dashboard/services/${service.id}`}
                      state={{ service }}
                    >
                      <button className="py-2 px-4 rounded-[5px] text-white border-none cursor-pointer bg-[teal]">
                        View
                      </button>
                    </Link>
                    <form>
                      <input type="hidden" name="id" value={service.id} />
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
        {/* Pagination component */}
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

export default ServicesPage;
