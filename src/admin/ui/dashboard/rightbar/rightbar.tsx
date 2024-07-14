import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className="fixed">
      <div className="bg-gradient-to-t from-[#182237] to-[#253352] px-[2.4rem] py-8 mb-8 rounded-2xl relative">
        <div className="absolute right-0 bottom-0 w-[50%] h-[50%]">
          <img
            className="object-contain opacity-20 w-full h-full"
            src="../src/assets/images/astronaut.png"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-[2.4rem]">
          <span className="font-bold">🔥 Available Now</span>
          <h3 className="text-[1.8rem] font-bold font-['Quicksand']">
            How to use the new version of the admin dashboard?
          </h3>
          <span className="text-[#b7bac1] font-medium text-[1.3rem]">
            Takes 4 minutes to learn
          </span>
          <p className="text-[#b7bac1] text-[1.4rem] w-[90%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className="p-4 flex items-center w-max gap-4 border-none cursor-pointer rounded-[5px] text-white bg-[#5d57c9] text-[1.45rem]">
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className="bg-gradient-to-t from-[#182237] to-[#253352] px-[2.4rem] py-8 mb-8 rounded-2xl relative">
        <div className="flex flex-col gap-[2.4rem]">
          <span className="font-bold">🚀 Coming Soon</span>
          <h3 className="text-[1.8rem] font-bold font-['Quicksand']">
            New server actions are available, partial pre-rendering is coming
            up!
          </h3>
          <span className="text-[#b7bac1] font-medium text-[1.3rem]">
            Boost your productivity
          </span>
          <p className="text-[#b7bac1] text-[1.4rem] w-[90%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className="p-4 flex items-center w-max gap-4 border-none cursor-pointer rounded-[5px] text-white bg-[#5d57c9] text-[1.45rem]">
            <MdReadMore />
            Learn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
