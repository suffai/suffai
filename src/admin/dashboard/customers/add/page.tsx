import React from "react";
import Layout from "../../layout";

const AddCustomerPage: React.FC = () => {
  return (
    <Layout>
      <div className="bg-[#182237] p-8 rounded-2xl mt-8">
        <form action="" className="flex flex-wrap justify-between">
          <input className="p-12 text-white mb-12 rounded-[5px] bg-[#151c2c] border-2 border-[#2e374a] w-[45%]" type="text" placeholder="username" name="username" required />
          <input className="p-12 text-white mb-12 rounded-[5px] bg-[#151c2c] border-2 border-[#2e374a] w-[45%]" type="email" placeholder="email" name="email" required />
          <input className="p-12 text-white mb-12 rounded-[5px] bg-[#151c2c] border-2 border-[#2e374a] w-[45%]"
            type="password"
            placeholder="password"
            name="password"
            required
          />
          <input className="p-12 text-white mb-12 rounded-[5px] bg-[#151c2c] border-2 border-[#2e374a] w-[45%]" type="phone" placeholder="phone" name="phone" />
          <select className="p-12 text-white mb-12 rounded-[5px] bg-[#151c2c] border-2 border-[#2e374a] w-[45%]" name="isAdmin" title="IsAdmin" id="isAdmin">
            <option value="false">Is Admin?</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <select className="p-12 text-white mb-12 rounded-[5px] bg-[#151c2c] border-2 border-[#2e374a] w-[45%]" name="isActive" title="IsActive" id="isActive">
            <option value="true">Is Active?</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <textarea className="p-12 text-white mb-12 rounded-[5px] bg-[#151c2c] border-2 border-[#2e374a] w-full"
            name="address"
            id="address"
            rows={16}
            placeholder="Address"
          ></textarea>
          <button className="w-full p-12 bg-[teal] text-white border-none rounded-[5px] cursor-pointer" type="submit">Submit</button>
        </form>
      </div>
    </Layout>
  );
};

export default AddCustomerPage;
