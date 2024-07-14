import React from "react";
// import { useLocation, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Layout from "../../layout";

interface Transactions {
  id: number;
  name: string;
  trnId: string;
  orderId: string;
  amount: number;
  category: string;
  createdAt: string;
  img: string;
}

const SingleTransactionPage: React.FC = () => {
  // const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const transaction = location.state?.transaction as Transactions;

  if (!transaction) {
    return <div>Transaction not found</div>;
  }

  return (
    <Layout>
      <div className="flex gap-12 mt-8">
        <div className="flex-1 bg-[#182237] p-8 rounded-2xl font-bold text-[#b7bac1] h-max">
          <div className="w-full h-auto relative rounded-2xl overflow-hidden mb-8">
            <img
              src={
                transaction.img || "../../../src/assets/images/noproduct.png"
              }
              alt=""
              className="w-full object-cover"
            />
          </div>
          {transaction.name}
        </div>
        <div className="flex-[4] bg-[#182237] p-8 rounded-2xl">
          <form action="" className="flex flex-col text-[12px]">
            <input
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              type="hidden"
              name="id"
              value={transaction.id}
              readOnly
            />
            <label htmlFor="name">Name</label>
            <input
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              type="text"
              name="name"
              id="name"
              value={transaction.name}
              readOnly
            />

            <label htmlFor="trnId">Transaction ID</label>
            <input
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              type="text"
              name="trnId"
              id="trnId"
              value={transaction.trnId}
              readOnly
            />

            <label htmlFor="orderId">Order ID</label>
            <input
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              type="text"
              name="orderId"
              id="orderId"
              value={transaction.orderId}
              readOnly
            />

            <label htmlFor="amount">Amount</label>
            <input
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              type="text"
              name="amount"
              id="amount"
              value={transaction.amount}
              readOnly
            />

            <label htmlFor="category">Category</label>
            <input
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              type="text"
              name="category"
              id="category"
              value={transaction.category}
              readOnly
            />

            <label htmlFor="createdAt">Created At</label>
            <input
              className="p-8 my-4 rounded-[5px] text-white bg-[#151c2c] border-2 border-[#2e374a] text-[16px]"
              type="text"
              name="createdAt"
              id="createdAt"
              value={transaction.createdAt}
              readOnly
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

export default SingleTransactionPage;
