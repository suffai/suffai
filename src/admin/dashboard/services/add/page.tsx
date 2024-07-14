import Layout from "../../layout";

const AddServicePage = () => {

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
            type="text"
            placeholder="title"
            name="title"
            required
          />
          <select
            className="p-12 bg-[#151c2c] text-white border-2 border-[#2e374a] rounded-[5px] mb-12 w-[45%]"
            name="category"
            id="category"
            title="Category"
            required
          >
            <option value="wash_and_fold">Category</option>
            <option value="wash_and_fold">Wash and Fold</option>
            <option value="wash_and_iron">Wash and Iron</option>
            <option value="ironing">Ironing</option>
            <option value="dry_cleaning">Dry Cleaning</option>
            <option value="shoe_cleaning">Shoe Cleaning</option>
            <option value="home_textile">Home Textile</option>
          </select>
          <input
            className="p-12 bg-[#151c2c] text-white border-2 border-[#2e374a] rounded-[5px] mb-12 w-[45%]"
            type="number"
            placeholder="Price of per shirt"
            name="shirt"
          />
          <input
            className="p-12 bg-[#151c2c] text-white border-2 border-[#2e374a] rounded-[5px] mb-12 w-[45%]"
            type="number"
            placeholder="Price of per pant"
            name="pant"
          />
          <input
            className="p-12 bg-[#151c2c] text-white border-2 border-[#2e374a] rounded-[5px] mb-12 w-[45%]"
            type="number"
            placeholder="Price of per kurti"
            name="kurti"
          />
          <input
            className="p-12 bg-[#151c2c] text-white border-2 border-[#2e374a] rounded-[5px] mb-12 w-[45%]"
            type="number"
            placeholder="Price of per pajama"
            name="pajama"
          />
          <input
            className="p-12 bg-[#151c2c] text-white border-2 border-[#2e374a] rounded-[5px] mb-12 w-[45%]"
            type="number"
            placeholder="Price of per t-shirt"
            name="t_shirt"
          />
          <input
            className="p-12 bg-[#151c2c] text-white border-2 border-[#2e374a] rounded-[5px] mb-12 w-[45%]"
            type="number"
            placeholder="Price of per cotton t-shirt"
            name="cotton_t_shirt"
          />
          <input
            className="p-12 bg-[#151c2c] text-white border-2 border-[#2e374a] rounded-[5px] mb-12 w-[45%]"
            type="number"
            placeholder="Price of per kilo washing"
            name="washing_per_kilo_price"
          />
          <input
            className="p-12 bg-[#151c2c] text-white border-2 border-[#2e374a] rounded-[5px] mb-12 w-[45%]"
            type="number"
            placeholder="Minimum kilo criteria"
            name="min_kilo_crit"
          />
          <input
            className="p-12 bg-[#151c2c] text-white border-2 border-[#2e374a] rounded-[5px] mb-12 w-[45%]"
            type="number"
            placeholder="Additional kilo price"
            name="additional_kilo_price"
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

export default AddServicePage;
