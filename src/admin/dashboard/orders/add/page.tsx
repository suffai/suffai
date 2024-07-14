import React from "react";
import Layout from "../../layout";

const AddOrderPage: React.FC = () => {
  return (
    <Layout>
      <div className="bg-[#182237] p-8 rounded-2xl mt-8">
        <form action="" className="flex flex-wrap justify-between">
          <input
            className="p-12 bg-[#151c2c] text-white border-2 border-[#2e374a] rounded-[5px] mb-12 w-[45%]"
            type="hidden"
            name="shopId"
            value=""
          />
          <input
            className="p-12 bg-[#151c2c] text-white border-2 border-[#2e374a] rounded-[5px] mb-12 w-[45%]"
            type="email"
            placeholder="Customer Email"
            name="customerEmail"
            required
          />
          <input
            className="p-12 bg-[#151c2c] text-white border-2 border-[#2e374a] rounded-[5px] mb-12 w-[45%]"
            type="number"
            placeholder="price"
            name="price"
            required
          />
          <input
            className="p-12 bg-[#151c2c] text-white border-2 border-[#2e374a] rounded-[5px] mb-12 w-[45%]"
            type="text"
            placeholder="category"
            name="category"
            required
          />
          <select
            className="p-12 bg-[#151c2c] text-white border-2 border-[#2e374a] rounded-[5px] mb-12 w-[45%]"
            name="status"
            id="status"
            title="Status"
          >
            <option value="Active">Order Status</option>
            <option value="Active">Active</option>
            <option value="Delivered">Delivered</option>
            <option value="Cancelled">Cancelled</option>
          </select>
          <select
            className="p-12 bg-[#151c2c] text-white border-2 border-[#2e374a] rounded-[5px] mb-12 w-[45%]"
            name="payment"
            id="payment"
            title="Payment"
          >
            <option value="Unpaid">Payment Status</option>
            <option value="Unpaid">Unpaid</option>
            <option value="Paid(COD)">Paid (COD)</option>
            <option value="Paid(Online)">Paid (Online)</option>
          </select>
          <input
            className="p-12 bg-[#151c2c] text-white border-2 border-[#2e374a] rounded-[5px] mb-12 w-[45%]"
            type="phone"
            placeholder="phone"
            name="phone"
            required
          />
          <textarea
            className="p-12 bg-[#151c2c] text-white border-2 border-[#2e374a] rounded-[5px] mb-12 w-full"
            required
            name="orderDesc"
            id="orderDesc"
            rows={16}
            placeholder="Description"
          ></textarea>
          <textarea
            className="p-12 bg-[#151c2c] text-white border-2 border-[#2e374a] rounded-[5px] mb-12 w-full"
            required
            name="address"
            id="address"
            rows={16}
            placeholder="Address"
          ></textarea>
          <button
            className="w-full p-12 bg-[teal] text-white border-none rounded-[5px] cursor-pointer"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default AddOrderPage;
