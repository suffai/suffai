import React from "react";
// import { useLocation, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Layout from "../../layout";

interface Shop {
  id: number;
  store_name: string;
  owner_name: string;
  email: string;
  img?: string;
  store_contact: string;
  owner_contact: string;
  status: boolean;
  store_address: string;
  area: string;
  city: string;
  contact_1: string;
  contact_2: string;
  store_category: string;
  express_laundry: boolean;
  premium_laundry: boolean;
  wash_and_fold: boolean;
  wash_and_iron: boolean;
  ironing: boolean;
  dry_cleaning: boolean;
  shoe_cleaning: boolean;
  home_textile: boolean;
  store_open_time: string;
  store_close_time: string;
  days_off: string;
  pin_code: string;
  landmark: string;
  outlets: string;
  Wash_N_fold_min_weight: string;
  Wash_N_iron_min_weight: string;
  Wash_N_fold_min_price: string;
  Wash_N_iron_min_price: string;
  Wash_N_fold_additional_price_kg: string;
  Wash_N_iron_additional_price_kg: string;
  express_laundry_price: string;
  premium_laundry_price: string;
  role: string;
}

const SingleShopPage: React.FC = () => {
  // const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const shop = location.state?.shop as Shop;

  if (!shop) {
    return <div>User not found</div>;
  }

  return (
    <Layout>
      <div className="flex gap-12 mt-8">
        <div className="flex-1 bg-[#182237] p-8 rounded-2xl font-bold text-[#b7bac1] h-max">
          <div className="w-full h-auto relative rounded-2xl overflow-hidden mb-8">
            <img
              src={shop.img || "../../../src/assets/images/noavatar.png"}
              alt=""
              className="w-full object-cover"
            />
          </div>
          {shop.store_name}
        </div>
        <div className="flex-[4] bg-[#182237] p-8 rounded-2xl">
          <form action="" className="flex flex-col text-[12px]">
            <input type="hidden" name="id" value={shop.id} />
            <label htmlFor="store_name">Store Name</label>
            <input
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              type="text"
              name="store_name"
              id="store_name"
              placeholder={shop.store_name}
            />

            <label htmlFor="owner_name">Owner Name</label>
            <input
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              type="text"
              name="owner_name"
              id="owner_name"
              placeholder={shop.owner_name}
            />

            <label htmlFor="email">Email</label>
            <input
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              type="email"
              name="email"
              id="email"
              placeholder={shop.email}
            />

            <label htmlFor="password">Password</label>
            <input
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              type="password"
              name="password"
              id="password"
            />

            <label htmlFor="store_contact">Store Phone</label>
            <input
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              type="text"
              name="store_contact"
              id="store_contact"
              placeholder={shop.store_contact}
            />

            <label htmlFor="owner_contact">Owner Phone</label>
            <input
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              type="text"
              name="owner_contact"
              id="owner_contact"
              placeholder={shop.owner_contact}
            />

            <label htmlFor="status">Status</label>
            <select
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              name="status"
              id="status"
            >
              <option
                value={shop.status ? "true" : "false"}
                selected={shop.status}
              >
                Active
              </option>
              <option
                value={shop.status ? "true" : "false"}
                selected={!shop.status}
              >
                Inactive
              </option>
            </select>

            <label htmlFor="store_address">Store Address</label>
            <input
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              type="text"
              name="store_address"
              id="store_address"
              placeholder={shop.store_address}
            />

            <label htmlFor="area">Area</label>
            <input
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              type="text"
              name="area"
              id="area"
              placeholder={shop.area}
            />

            <label htmlFor="city">City</label>
            <input
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              type="text"
              name="city"
              id="city"
              placeholder={shop.city}
            />

            <label htmlFor="contact_1">Additional Contact Info</label>
            <input
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              type="text"
              name="contact_1"
              id="contact_1"
              placeholder={shop.contact_1}
            />

            <label htmlFor="contact_2">Additional Contact Info</label>
            <input
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              type="text"
              name="contact_2"
              id="contact_2"
              placeholder={shop.contact_2}
            />

            <label htmlFor="store_category">Store Category</label>
            <input
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              type="text"
              name="store_category"
              id="store_category"
              placeholder={shop.store_category}
            />

            <label htmlFor="express_laundry">Express Laundry?</label>
            <select
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              name="express_laundry"
              id="express_laundry"
            >
              <option
                value={shop.express_laundry ? "true" : "false"}
                selected={shop.express_laundry}
              >
                Yes
              </option>
              <option
                value={shop.express_laundry ? "true" : "false"}
                selected={!shop.express_laundry}
              >
                No
              </option>
            </select>

            <label htmlFor="premium_laundry">Premium Laundry?</label>
            <select
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              name="premium_laundry"
              id="premium_laundry"
            >
              <option
                value={shop.premium_laundry ? "true" : "false"}
                selected={shop.premium_laundry}
              >
                Yes
              </option>
              <option
                value={shop.premium_laundry ? "true" : "false"}
                selected={!shop.premium_laundry}
              >
                No
              </option>
            </select>

            <label htmlFor="wash_and_fold">Do you provide wash and fold?</label>
            <select
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              name="wash_and_fold"
              id="wash_and_fold"
            >
              <option
                value={shop.wash_and_fold ? "true" : "false"}
                selected={shop.wash_and_fold}
              >
                Yes
              </option>
              <option
                value={shop.wash_and_fold ? "true" : "false"}
                selected={!shop.wash_and_fold}
              >
                No
              </option>
            </select>

            <label htmlFor="wash_and_iron">Do you provide wash and iron?</label>
            <select
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              name="wash_and_iron"
              id="wash_and_iron"
            >
              <option
                value={shop.wash_and_iron ? "true" : "false"}
                selected={shop.wash_and_iron}
              >
                Yes
              </option>
              <option
                value={shop.wash_and_iron ? "true" : "false"}
                selected={!shop.wash_and_iron}
              >
                No
              </option>
            </select>

            <label htmlFor="ironing">Do you provide ironing?</label>
            <select
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              name="ironing"
              id="ironing"
            >
              <option
                value={shop.ironing ? "true" : "false"}
                selected={shop.ironing}
              >
                Yes
              </option>
              <option
                value={shop.ironing ? "true" : "false"}
                selected={!shop.ironing}
              >
                No
              </option>
            </select>

            <label htmlFor="dry_cleaning">Do you provide dry cleaning?</label>
            <select
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              name="dry_cleaning"
              id="dry_cleaning"
            >
              <option
                value={shop.ironing ? "true" : "false"}
                selected={shop.ironing}
              >
                Yes
              </option>
              <option
                value={shop.ironing ? "true" : "false"}
                selected={!shop.ironing}
              >
                No
              </option>
            </select>

            <label htmlFor="shoe_cleaning">Do you provide shoe cleaning?</label>
            <select
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              name="shoe_cleaning"
              id="shoe_cleaning"
            >
              <option
                value={shop.shoe_cleaning ? "true" : "false"}
                selected={shop.shoe_cleaning}
              >
                Yes
              </option>
              <option
                value={shop.shoe_cleaning ? "true" : "false"}
                selected={!shop.shoe_cleaning}
              >
                No
              </option>
            </select>

            <label htmlFor="home_textile">Do you provide home textile?</label>
            <select
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              name="home_textile"
              id="home_textile"
            >
              <option
                value={shop.home_textile ? "true" : "false"}
                selected={shop.home_textile}
              >
                Yes
              </option>
              <option
                value={shop.home_textile ? "true" : "false"}
                selected={!shop.home_textile}
              >
                No
              </option>
            </select>

            <label htmlFor="store_open_time">Your store open time</label>
            <input
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              type="text"
              name="store_open_time"
              id="store_open_time"
              placeholder={shop.store_open_time}
            />

            <label htmlFor="store_close_time">Your store close time</label>
            <input
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              type="text"
              name="store_close_time"
              id="store_close_time"
              placeholder={shop.store_close_time}
            />

            <label htmlFor="days_off">Your store off days</label>
            <input
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              type="text"
              name="days_off"
              id="days_off"
              placeholder={shop.days_off}
            />

            <label htmlFor="pin_code">Pin code of the area</label>
            <input
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              type="text"
              name="pin_code"
              id="pin_code"
              placeholder={shop.pin_code}
            />

            <label htmlFor="landmark">Landmark of the store location</label>
            <input
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              type="text"
              name="landmark"
              id="landmark"
              placeholder={shop.landmark}
            />

            <label htmlFor="outlets">Your outlets info and location</label>
            <input
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              type="text"
              name="outlets"
              id="outlets"
              placeholder={shop.outlets}
            />

            <label htmlFor="Wash_N_fold_min_weight">
              Minimum wight of wash and fold
            </label>
            <input
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              type="text"
              name="Wash_N_fold_min_weight"
              id="Wash_N_fold_min_weight"
              placeholder={shop.Wash_N_fold_min_weight}
            />

            <label htmlFor="Wash_N_iron_min_weight">
              Minimum wight of wash and iron
            </label>
            <input
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              type="text"
              name="Wash_N_iron_min_weight"
              id="Wash_N_iron_min_weight"
              placeholder={shop.Wash_N_iron_min_weight}
            />

            <label htmlFor="Wash_N_fold_min_price">
              Minimum price of wash and fold
            </label>
            <input
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              type="text"
              name="Wash_N_fold_min_price"
              id="Wash_N_fold_min_price"
              placeholder={shop.Wash_N_fold_min_price}
            />

            <label htmlFor="Wash_N_iron_min_price">
              Minimum price of wash and iron
            </label>
            <input
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              type="text"
              name="Wash_N_iron_min_price"
              id="Wash_N_iron_min_price"
              placeholder={shop.Wash_N_iron_min_price}
            />

            <label htmlFor="Wash_N_fold_additional_price_kg">
              Wash and fold additional price for per kg
            </label>
            <input
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              type="text"
              name="Wash_N_fold_additional_price_kg"
              id="Wash_N_fold_additional_price_kg"
              placeholder={shop.Wash_N_fold_additional_price_kg}
            />

            <label htmlFor="Wash_N_iron_additional_price_kg">
              Wash and iron additional price for per kg
            </label>
            <input
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              type="text"
              name="Wash_N_iron_additional_price_kg"
              id="Wash_N_iron_additional_price_kg"
              placeholder={shop.Wash_N_iron_additional_price_kg}
            />

            <label htmlFor="express_laundry_price">Express laundry price</label>
            <input
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              type="text"
              name="express_laundry_price"
              id="express_laundry_price"
              placeholder={shop.express_laundry_price}
            />

            <label htmlFor="premium_laundry_price">Premium laundry price</label>
            <input
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              type="text"
              name="premium_laundry_price"
              id="premium_laundry_price"
              placeholder={shop.premium_laundry_price}
            />

            <label>Role</label>
            <input
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              type="role"
              name="role"
              placeholder={shop.role}
              value={shop.role}
              readOnly
            />

            <button className="w-full p-8 bg-[teal] text-white border-none rounded-[5px] mt-8 cursor-pointer text-[16px]">
              Update
            </button>
          </form>
          {/* <button id={styles.editButton}>Edit</button> */}
        </div>
      </div>
    </Layout>
  );
};

export default SingleShopPage;
