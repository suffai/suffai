import React from "react";
// import { useLocation, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Layout from "../../layout";

interface Order {
  id: number;
  title: string;
  customerEmail: string;
  price: string;
  category: string;
  img?: string;
  phone: string;
  desc: string;
  address: string;
}

const SingleOrderPage: React.FC = () => {
  // const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const order = location.state?.order as Order;

  if (!order) {
    return <div>Service not found</div>;
  }


  return (
    <Layout>
      <div className="flex gap-12 mt-8">
        <div className="flex-1 bg-[#182237] p-8 rounded-2xl font-bold text-[#b7bac1] h-max">
          <div className="w-full h-auto relative rounded-2xl overflow-hidden mb-8">
            <img
              src={order.img || "../../../src/assets/images/noproduct.png"}
              alt=""
              className="w-full object-cover"
            />
          </div>
          {order.title}
        </div>
        <div className="flex-[4] bg-[#182237] p-8 rounded-2xl">
          <form action="" className="flex flex-col text-[12px]">
            <input type="hidden" name="id" value={order.id} />
            <label>Customer Email</label>
            <input
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              type="email"
              name="customerEmail"
              placeholder={order.customerEmail}
              readOnly
            />
            <label>Price</label>
            <input
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              type="number"
              name="price"
              placeholder={order.price}
            />
            <label>Category</label>
            <input
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              type="text"
              name="category"
              placeholder={order.category}
            />
            <label>Order Status</label>
            <select
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              name="status"
              id="status"
              title="Status"
            >
              <option value="Active">Order Status</option>
              <option value="Active">Active</option>
              <option value="Delivered">Delivered</option>
              <option value="Cancelled">Cancelled</option>
            </select>
            <label>Payment Status</label>
            <select
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              name="payment"
              id="payment"
              title="Payment"
            >
              <option value="Unpaid">Payment Status</option>
              <option value="Unpaid">Unpaid</option>
              <option value="Paid(COD)">Paid (COD)</option>
              <option value="Paid(Online)">Paid (Online)</option>
            </select>
            <label>Phone</label>
            <input
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              type="phone"
              placeholder={order.phone}
              name="phone"
              required
            />
            <label>Description</label>
            <textarea
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              required
              name="orderDesc"
              id="orderDesc"
              rows={16}
              placeholder={order.desc}
            ></textarea>
            <label>Address</label>
            <textarea
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              required
              name="address"
              id="address"
              rows={16}
              placeholder={order.address}
            ></textarea>
            <button className="w-full p-8 bg-[teal] text-white border-none rounded-[5px] mt-8 cursor-pointer text-[16px]">
              Update
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default SingleOrderPage;
