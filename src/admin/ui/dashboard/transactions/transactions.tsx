const Transactions = () => {
  return (
    <div className=" bg-[#182237] font-['Quicksand'] p-8 rounded-2xl">
      <h2 className="mb-8 font-extralight text-[#b7bac1] font-['Quicksand'] text-[2.4rem]">
        Latest Transactions
      </h2>
      <table className="w-full">
        <thead>
          <tr>
            <td className="p-4">Name</td>
            <td className="p-4">Status</td>
            <td className="p-4">Date</td>
            <td className="p-4">Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-4">
              <div className="flex gap-4 items-center">
                <img
                  src="../src/assets/images/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className="object-cover rounded-[50%]"
                />
                John Doe
              </div>
            </td>
            <td className="p-4">
              <span className="rounded-[5px] p-[5px] text-[14px] text-white bg-[#f7cb7375]">
                Pending
              </span>
            </td>
            <td className="p-4">14.02.2024</td>
            <td className="p-4">$3.200</td>
          </tr>
          <tr>
            <td className="p-4">
              <div className="flex gap-4 items-center">
                <img
                  src="../src/assets/images/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className="object-cover rounded-[50%]"
                />
                John Doe
              </div>
            </td>
            <td className="p-4">
              <span className="rounded-[5px] p-[5px] text-[14px] text-white bg-[#afd6ee75]">
                Done
              </span>
            </td>
            <td className="p-4">14.02.2024</td>
            <td className="p-4">$3.200</td>
          </tr>
          <tr>
            <td className="p-4">
              <div className="flex gap-4 items-center">
                <img
                  src="../src/assets/images/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className="object-cover rounded-[50%]"
                />
                John Doe
              </div>
            </td>
            <td className="p-4">
              <span className="rounded-[5px] p-[5px] text-[14px] text-white bg-[#f7737375]">
                Cancelled
              </span>
            </td>
            <td className="p-4">14.02.2024</td>
            <td className="p-4">$3.200</td>
          </tr>
          <tr>
            <td className="p-4">
              <div className="flex gap-4 items-center">
                <img
                  src="../src/assets/images/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className="object-cover rounded-[50%]"
                />
                John Doe
              </div>
            </td>
            <td className="p-4">
              <span className="rounded-[5px] p-[5px] text-[14px] text-white bg-[#f7cb7375]">
                Pending
              </span>
            </td>
            <td className="p-4">14.02.2024</td>
            <td className="p-4">$3.200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
