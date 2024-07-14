import React from "react";
// import { useLocation, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Layout from "../../layout";

interface Service {
  id: number;
  title: string;
  category: string;
  img?: string;
  shirt: string;
  pant: string;
  kurti: string;
  pajama: string;
  t_shirt: string;
  cotton_t_shirt: string;
  washing_per_kilo_price: string;
  min_kilo_crit: string;
  additional_kilo_price: string;
}

const SingleServicePage: React.FC = () => {
  // const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const service = location.state?.service as Service;

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <Layout>
      <div className="flex gap-12 mt-8">
        <div className="flex-1 bg-[#182237] p-8 rounded-2xl font-bold text-[#b7bac1] h-max">
          <div className="w-full h-auto relative rounded-2xl overflow-hidden mb-8">
            <img
              src={service.img || "../../../src/assets/images/noproduct.png"}
              alt=""
              className="w-full object-cover"
            />
          </div>
          {service.title}
        </div>
        <div className="flex-[4] bg-[#182237] p-8 rounded-2xl">
          <form action="" className="flex flex-col text-[12px]">
            <input
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              type="hidden"
              name="id"
              value={service.id}
            />
            <label>Title</label>
            <input
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              type="text"
              name="title"
              placeholder={service.title}
            />

            <label>Category</label>
            <input
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              type="text"
              name="category"
              placeholder={service.category}
            />

            <label>Price of per shirt</label>
            <input
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              type="number"
              name="shirt"
              placeholder={service.shirt}
            />

            <label>Price of per pant</label>
            <input
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              type="number"
              name="pant"
              placeholder={service.pant}
            />

            <label>Price of per kurti</label>
            <input
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              type="number"
              name="kurti"
              placeholder={service.kurti}
            />

            <label>Price of per pajama</label>
            <input
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              type="number"
              name="pajama"
              placeholder={service.pajama}
            />

            <label>Price of per t-shirt</label>
            <input
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              type="number"
              name="t_shirt"
              placeholder={service.t_shirt}
            />

            <label>Price of per cotton t-shirt</label>
            <input
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              type="number"
              name="cotton_t_shirt"
              placeholder={service.cotton_t_shirt}
            />

            <label>Price of per kilo washing</label>
            <input
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              type="number"
              name="washing_per_kilo_price"
              placeholder={service.washing_per_kilo_price}
            />

            <label>Minimum kilo criteria</label>
            <input
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              type="number"
              name="min_kilo_crit"
              placeholder={service.min_kilo_crit}
            />

            <label>Additional kilo price</label>
            <input
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              type="number"
              name="additional_kilo_price"
              placeholder={service.additional_kilo_price}
            />
            <button className="w-full p-8 bg-[teal] text-white border-none rounded-[5px] mt-8 cursor-pointer text-[16px]">
              Update
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default SingleServicePage;
