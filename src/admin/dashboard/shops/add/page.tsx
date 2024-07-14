import React from "react";
import Layout from "../../layout";

const AddShopPage: React.FC = () => {
  return (
    <Layout>
      <div className="bg-[#182237] p-8 rounded-2xl mt-8">
        <form action="" className="flex flex-wrap justify-between">
          <input
            className="p-12 text-white mb-12 rounded-[5px] bg-[#151c2c] border-2 border-[#2e374a] w-[45%]"
            type="text"
            placeholder="Store Name"
            name="store_name"
            required
          />
          <input
            className="p-12 text-white mb-12 rounded-[5px] bg-[#151c2c] border-2 border-[#2e374a] w-[45%]"
            type="text"
            placeholder="Owner Name"
            name="owner_name"
            required
          />
          <input
            className="p-12 text-white mb-12 rounded-[5px] bg-[#151c2c] border-2 border-[#2e374a] w-[45%]"
            type="email"
            placeholder="email"
            name="email"
            required
          />
          <input
            className="p-12 text-white mb-12 rounded-[5px] bg-[#151c2c] border-2 border-[#2e374a] w-[45%]"
            type="password"
            placeholder="password"
            name="password"
            required
          />
          <input
            className="p-12 text-white mb-12 rounded-[5px] bg-[#151c2c] border-2 border-[#2e374a] w-[45%]"
            type="phone"
            placeholder="Store Phone No."
            name="store_contact"
          />
          <input
            className="p-12 text-white mb-12 rounded-[5px] bg-[#151c2c] border-2 border-[#2e374a] w-[45%]"
            type="phone"
            placeholder="Owner Phone No."
            name="owner_contact"
          />
          <select
            className="p-12 text-white mb-12 rounded-[5px] bg-[#151c2c] border-2 border-[#2e374a] w-[45%]"
            name="status"
            id="status"
            title="Status"
          >
            <option value="true">Status?</option>
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>
          <input
            className="p-12 text-white mb-12 rounded-[5px] bg-[#151c2c] border-2 border-[#2e374a] w-[45%]"
            type="text"
            name="store_address"
            id="store_address"
            placeholder="Store Address"
          />
          <input
            className="p-12 text-white mb-12 rounded-[5px] bg-[#151c2c] border-2 border-[#2e374a] w-[45%]"
            type="text"
            name="area"
            id="area"
            placeholder="Area"
          />
          <input
            className="p-12 text-white mb-12 rounded-[5px] bg-[#151c2c] border-2 border-[#2e374a] w-[45%]"
            type="text"
            name="city"
            id="city"
            placeholder="City"
          />
          <input
            className="p-12 text-white mb-12 rounded-[5px] bg-[#151c2c] border-2 border-[#2e374a] w-[45%]"
            type="text"
            name="contact_1"
            id="contact_1"
            placeholder="Additional Contact info"
          />
          <input
            className="p-12 text-white mb-12 rounded-[5px] bg-[#151c2c] border-2 border-[#2e374a] w-[45%]"
            type="text"
            name="contact_2"
            id="contact_2"
            placeholder="Additional Contact info"
          />
          <input
            className="p-12 text-white mb-12 rounded-[5px] bg-[#151c2c] border-2 border-[#2e374a] w-[45%]"
            type="text"
            placeholder="Store Category"
            name="store_category"
          />
          <select
            className="p-12 text-white mb-12 rounded-[5px] bg-[#151c2c] border-2 border-[#2e374a] w-[45%]"
            name="express_laundry"
            id="express_laundry"
            title="Express Laundry"
          >
            <option value="true">Express Laundry?</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <select
            className="p-12 text-white mb-12 rounded-[5px] bg-[#151c2c] border-2 border-[#2e374a] w-[45%]"
            name="premium_laundry"
            id="premium_laundry"
            title="Premium Laundry"
          >
            <option value="true">Premium Laundry?</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <select
            className="p-12 text-white mb-12 rounded-[5px] bg-[#151c2c] border-2 border-[#2e374a] w-[45%]"
            name="wash_and_fold"
            id="wash_and_fold"
            title="Wash and Fold"
          >
            <option value="true">Do you provide wash and fold?</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <select
            className="p-12 text-white mb-12 rounded-[5px] bg-[#151c2c] border-2 border-[#2e374a] w-[45%]"
            name="wash_and_iron"
            id="wash_and_iron"
            title="Wash and Iron"
          >
            <option value="true">Do you provide wash and iron?</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <select
            className="p-12 text-white mb-12 rounded-[5px] bg-[#151c2c] border-2 border-[#2e374a] w-[45%]"
            name="ironing"
            id="ironing"
            title="Ironing"
          >
            <option value="true">Do you provide ironing?</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <select
            className="p-12 text-white mb-12 rounded-[5px] bg-[#151c2c] border-2 border-[#2e374a] w-[45%]"
            name="dry_cleaning"
            id="dry_cleaning"
            title="Dry Cleaning"
          >
            <option value="true">Do you provide dry cleaning?</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <select
            className="p-12 text-white mb-12 rounded-[5px] bg-[#151c2c] border-2 border-[#2e374a] w-[45%]"
            name="shoe_cleaning"
            id="shoe_cleaning"
            title="Shoe Cleaning"
          >
            <option value="true">Do you provide shoe cleaning?</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <select
            className="p-12 text-white mb-12 rounded-[5px] bg-[#151c2c] border-2 border-[#2e374a] w-[45%]"
            name="home_textile"
            id="home_textile"
            title="Home Textile"
          >
            <option value="true">Do you provide home textile?</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <input
            className="p-12 text-white mb-12 rounded-[5px] bg-[#151c2c] border-2 border-[#2e374a] w-[45%]"
            type="text"
            placeholder="Your store open time"
            name="store_open_time"
          />
          <input
            className="p-12 text-white mb-12 rounded-[5px] bg-[#151c2c] border-2 border-[#2e374a] w-[45%]"
            type="text"
            placeholder="Your store close time"
            name="store_close_time"
          />
          <input
            className="p-12 text-white mb-12 rounded-[5px] bg-[#151c2c] border-2 border-[#2e374a] w-[45%]"
            type="text"
            placeholder="Your store off days"
            name="days_off"
          />
          <input
            className="p-12 text-white mb-12 rounded-[5px] bg-[#151c2c] border-2 border-[#2e374a] w-[45%]"
            type="text"
            placeholder="Pin code of the area"
            name="pin_code"
          />
          <input
            className="p-12 text-white mb-12 rounded-[5px] bg-[#151c2c] border-2 border-[#2e374a] w-[45%]"
            type="text"
            placeholder="Landmark of the store location"
            name="landmark"
          />
          <input
            className="p-12 text-white mb-12 rounded-[5px] bg-[#151c2c] border-2 border-[#2e374a] w-[45%]"
            type="text"
            placeholder="Your outlets info and location"
            name="outlets"
          />
          <input
            className="p-12 text-white mb-12 rounded-[5px] bg-[#151c2c] border-2 border-[#2e374a] w-[45%]"
            type="text"
            placeholder="Minimum wight of wash and fold"
            name="Wash_N_fold_min_weight"
          />
          <input
            className="p-12 text-white mb-12 rounded-[5px] bg-[#151c2c] border-2 border-[#2e374a] w-[45%]"
            type="text"
            placeholder="Minimum wight of wash and iron"
            name="Wash_N_iron_min_weight"
          />
          <input
            className="p-12 text-white mb-12 rounded-[5px] bg-[#151c2c] border-2 border-[#2e374a] w-[45%]"
            type="text"
            placeholder="Minimum price of wash and fold"
            name="Wash_N_fold_min_price"
          />
          <input
            className="p-12 text-white mb-12 rounded-[5px] bg-[#151c2c] border-2 border-[#2e374a] w-[45%]"
            type="text"
            placeholder="Minimum price of wash and iron"
            name="Wash_N_iron_min_price"
          />
          <input
            className="p-12 text-white mb-12 rounded-[5px] bg-[#151c2c] border-2 border-[#2e374a] w-[45%]"
            type="text"
            placeholder="Wash and fold additional price for per kg"
            name="Wash_N_fold_additional_price_kg"
          />
          <input
            className="p-12 text-white mb-12 rounded-[5px] bg-[#151c2c] border-2 border-[#2e374a] w-[45%]"
            type="text"
            placeholder="Wash and iron additional price for per kg"
            name="Wash_N_iron_additional_price_kg"
          />
          <input
            className="p-12 text-white mb-12 rounded-[5px] bg-[#151c2c] border-2 border-[#2e374a] w-[45%]"
            type="text"
            placeholder="Express laundry price"
            name="express_laundry_price"
          />
          <input
            className="p-12 text-white mb-12 rounded-[5px] bg-[#151c2c] border-2 border-[#2e374a] w-[45%]"
            type="text"
            placeholder="Premium laundry price"
            name="premium_laundry_price"
          />
          <input
            className="p-12 text-white mb-12 rounded-[5px] bg-[#151c2c] border-2 border-[#2e374a] w-[45%]"
            type="text"
            placeholder="shop"
            name="shop"
            value="shop"
            readOnly
          />
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

export default AddShopPage;
