import React from "react";
// import { useLocation, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Layout from "../../layout";

interface User {
  id: number;
  username: string;
  email: string;
  img?: string;
  phone: string;
  address: string;
  isAdmin: boolean;
  isActive: boolean;
}

const SingleUserPage: React.FC = () => {
  // const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const user = location.state?.user as User;

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <Layout>
      <div className="flex gap-12 mt-8">
        <div className="flex-1 bg-[#182237] p-8 rounded-2xl font-bold text-[#b7bac1] h-max">
          <div className="w-full h-auto relative rounded-2xl overflow-hidden mb-8">
            <img
              src={user.img || "../../../src/assets/images/noavatar.png"}
              alt=""
              className="w-full object-cover"
            />
          </div>
          {user.username}
        </div>
        <div className="flex-[4] bg-[#182237] p-8 rounded-2xl">
          <form action="" className="flex flex-col text-[12px]">
            <input type="hidden" name="id" value={user.id} />
            <label htmlFor="username">Username</label>
            <input
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              type="text"
              name="username"
              id="username"
              placeholder={user.username}
            />
            <label htmlFor="email">Email</label>
            <input
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              type="email"
              name="email"
              id="email"
              placeholder={user.email}
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
              placeholder={user.phone}
            />
            <label htmlFor="address">Address</label>
            <textarea
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              name="address"
              id="address"
              placeholder={user.address}
            />
            <label htmlFor="isAdmin">Is Admin?</label>
            <select
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              name="isAdmin"
              id="isAdmin"
            >
              <option
                value={user.isAdmin ? "true" : "false"}
                selected={user.isAdmin}
              >
                Yes
              </option>
              <option
                value={user.isAdmin ? "false" : "true"}
                selected={!user.isAdmin}
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
                value={user.isActive ? "true" : "false"}
                selected={user.isActive}
              >
                Yes
              </option>
              <option
                value={user.isActive ? "false" : "true"}
                selected={!user.isActive}
              >
                No
              </option>
            </select>

            <button className="w-full p-8 bg-[teal] text-white border-none rounded-[5px] mt-8 cursor-pointer text-[16px]">
              Update
            </button>
          </form>
          <button
            className="w-full p-8 bg-[teal] text-white border-none rounded-[5px] mt-8 cursor-pointer text-[16px]"
          >
            Edit
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default SingleUserPage;
