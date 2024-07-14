import React from "react";
// import { useLocation, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Layout from "../../layout";

interface Customer {
  id: number;
  username: string;
  email: string;
  img?: string;
  phone: string;
  address: string;
  isAdmin: boolean;
  isActive: boolean;
}

const SingleCustomerPage: React.FC = () => {
  // const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const customer = location.state?.customer as Customer;

  if (!customer) {
    return <div>User not found</div>;
  }

  return (
    <Layout>
      <div className="flex gap-12 mt-8">
        <div className="flex-1 bg-[#182237] p-8 rounded-2xl font-bold text-[#b7bac1] h-max">
          <div className="w-full h-auto relative rounded-2xl overflow-hidden mb-8">
            <img
              src={customer.img || "../../../src/assets/images/noavatar.png"}
              alt=""
              className="w-full object-cover"
            />
          </div>
          {customer.username}
        </div>
        <div className="flex-[4] bg-[#182237] p-8 rounded-2xl">
          <form action="" className="flex flex-col text-[12px]">
            <input type="hidden" name="id" value={customer.id} />
            <label htmlFor="username">Username</label>
            <input
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              type="text"
              name="username"
              id="username"
              placeholder={customer.username}
            />
            <label htmlFor="email">Email</label>
            <input
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              type="email"
              name="email"
              id="email"
              placeholder={customer.email}
            />
            <label htmlFor="password">Password</label>
            <input
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              type="password"
              name="password"
              id="password"
            />
            <label htmlFor="phone">Phone</label>
            <input
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              type="text"
              name="phone"
              id="phone"
              placeholder={customer.phone}
            />
            <label htmlFor="address">Address</label>
            <textarea
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              name="address"
              id="address"
              placeholder={customer.address}
            />
            <label htmlFor="isAdmin">Is Admin?</label>
            <select
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              name="isAdmin"
              id="isAdmin"
            >
              <option
                value={customer.isAdmin ? "true" : "false"}
                selected={customer.isAdmin}
              >
                Yes
              </option>
              <option
                value={customer.isAdmin ? "false" : "true"}
                selected={!customer.isAdmin}
              >
                No
              </option>
            </select>

            <label htmlFor="isActive">Is Active?</label>
            <select
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              name="isActive"
              id="isActive"
            >
              <option
                value={customer.isActive ? "true" : "false"}
                selected={customer.isActive}
              >
                Yes
              </option>
              <option
                value={customer.isActive ? "false" : "true"}
                selected={!customer.isActive}
              >
                No
              </option>
            </select>

            <button className="w-full p-8 bg-[teal] text-white border-none rounded-[5px] mt-8 cursor-pointer text-[16px]">
              Update
            </button>
          </form>
          <button className="w-full p-8 bg-[teal] text-white border-none rounded-[5px] mt-8 cursor-pointer text-[16px]">
            Edit
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default SingleCustomerPage;
