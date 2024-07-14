import React from "react";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ProgressBar from "@/components/ProgressBar";

const ReviewPage: React.FC = () => {
  return (
    <main className="relative font-['Quicksand']">
      <div className="mx-auto">
        <h1 className="flex items-center mb-8 font-['Quicksand'] text-[#121212]">
          <Link to="/store-page" className="flex items-center">
            <ChevronLeft size={34} className="mr-4" />
            Reviews
          </Link>
        </h1>
        <div>
          <div className="flex flex-col items-center justify-center font-['Quicksand'] mt-8">
            <h1 className="font-['Quicksand'] text-[50px] font-normal  text-[#121212] mb-8">
              4.6
            </h1>
            <div className="flex items-center justify-center">
              <svg
                height="25"
                width="25"
                className="cursor-pointer mr-2"
                viewBox="0 0 25 23"
                fill="#FFC107"
                stroke="#FFC107"
                strokeWidth="2"
              >
                <polygon points="9.9, 1.1, 12.3, 7.5, 18.8, 7.5, 13.8, 11.5, 15.7, 17.9, 9.9, 13.8, 4.2, 17.9, 6, 11.5, 1, 7.5, 7.5, 7.5" />
              </svg>
              <svg
                height="25"
                width="25"
                className="cursor-pointer mr-2"
                viewBox="0 0 25 23"
                fill="#FFC107"
                stroke="#FFC107"
                strokeWidth="2"
              >
                <polygon points="9.9, 1.1, 12.3, 7.5, 18.8, 7.5, 13.8, 11.5, 15.7, 17.9, 9.9, 13.8, 4.2, 17.9, 6, 11.5, 1, 7.5, 7.5, 7.5" />
              </svg>
              <svg
                height="25"
                width="25"
                className="cursor-pointer mr-2"
                viewBox="0 0 25 23"
                fill="#FFC107"
                stroke="#FFC107"
                strokeWidth="2"
              >
                <polygon points="9.9, 1.1, 12.3, 7.5, 18.8, 7.5, 13.8, 11.5, 15.7, 17.9, 9.9, 13.8, 4.2, 17.9, 6, 11.5, 1, 7.5, 7.5, 7.5" />
              </svg>
              <svg
                height="25"
                width="25"
                className="cursor-pointer mr-2"
                viewBox="0 0 25 23"
                fill="#FFC107"
                stroke="#FFC107"
                strokeWidth="2"
              >
                <polygon points="9.9, 1.1, 12.3, 7.5, 18.8, 7.5, 13.8, 11.5, 15.7, 17.9, 9.9, 13.8, 4.2, 17.9, 6, 11.5, 1, 7.5, 7.5, 7.5" />
              </svg>
              <svg
                height="25"
                width="25"
                className="cursor-pointer mr-2"
                viewBox="0 0 25 23"
                fill="#D9D9D9"
                stroke="#D9D9D9"
                strokeWidth="2"
              >
                <polygon points="9.9, 1.1, 12.3, 7.5, 18.8, 7.5, 13.8, 11.5, 15.7, 17.9, 9.9, 13.8, 4.2, 17.9, 6, 11.5, 1, 7.5, 7.5, 7.5" />
              </svg>
            </div>
            <p className="text-[16px] text-[#121212] capitalize mt-4">
              Based on 20 reviews
            </p>
          </div>
          <div className="my-12">
            <div className="w-full flex items-center justify-center mb-4">
              <div className="w-[25%]">
                <p className="text-[20px] text-[#666666]">Excellent</p>
              </div>
              <div className="w-[75%]">
                <ProgressBar value={16} maxValue={20} />
              </div>
            </div>
            <div className="w-full flex items-center justify-center mb-4">
              <div className="w-[25%]">
                <p className="text-[20px] text-[#666666]">Good</p>
              </div>
              <div className="w-[75%]">
                <ProgressBar value={12} maxValue={20} />
              </div>
            </div>
            <div className="w-full flex items-center justify-center mb-4">
              <div className="w-[25%]">
                <p className="text-[20px] text-[#666666]">Average</p>
              </div>
              <div className="w-[75%]">
                <ProgressBar value={6} maxValue={20} />
              </div>
            </div>
            <div className="w-full flex items-center justify-center">
              <div className="w-[25%]">
                <p className="text-[20px] text-[#666666]">Poor</p>
              </div>
              <div className="w-[75%]">
                <ProgressBar value={3} maxValue={20} />
              </div>
            </div>
          </div>
          <div className="">
            <div className="grid grid-cols-3 items-center justify-center gap-8">
              <div className="px-12 py-8 shadow-[0px_0px_15px_0px_#0000001A] rounded-[20px]">
                <div className="w-full flex items-center justify-between relative">
                  <div className="flex items-center justify-start relative">
                    <div className="w-[6rem] h-[6rem] rounded-full">
                      <img
                        src="https://via.placeholder.com/300x200?text=person"
                        alt=""
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div className="ml-6">
                      <h3 className="uppercase text-[16px] font-medium font-['Quicksand']">
                        JOHN DOE
                      </h3>
                      <p className="text-[14px] font-normal">15 July, 2022</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <svg
                      height="25"
                      width="25"
                      className="cursor-pointer mr-2"
                      viewBox="0 0 25 23"
                      fill="#FFC107"
                      stroke="#FFC107"
                      strokeWidth="2"
                    >
                      <polygon points="9.9, 1.1, 12.3, 7.5, 18.8, 7.5, 13.8, 11.5, 15.7, 17.9, 9.9, 13.8, 4.2, 17.9, 6, 11.5, 1, 7.5, 7.5, 7.5" />
                    </svg>
                    <p className="text-[16px] font-normal">4.8</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-[14px] font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. In fermentum posuere urna nec tincidu.
                  </p>
                </div>
              </div>

              <div className="px-12 py-8 shadow-[0px_0px_15px_0px_#0000001A] rounded-[20px]">
                <div className="w-full flex items-center justify-between relative">
                  <div className="flex items-center justify-start relative">
                    <div className="w-[6rem] h-[6rem] rounded-full">
                      <img
                        src="https://via.placeholder.com/300x200?text=person"
                        alt=""
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div className="ml-6">
                      <h3 className="uppercase text-[16px] font-medium font-['Quicksand']">
                        JOHN DOE
                      </h3>
                      <p className="text-[14px] font-normal">15 July, 2022</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <svg
                      height="25"
                      width="25"
                      className="cursor-pointer mr-2"
                      viewBox="0 0 25 23"
                      fill="#FFC107"
                      stroke="#FFC107"
                      strokeWidth="2"
                    >
                      <polygon points="9.9, 1.1, 12.3, 7.5, 18.8, 7.5, 13.8, 11.5, 15.7, 17.9, 9.9, 13.8, 4.2, 17.9, 6, 11.5, 1, 7.5, 7.5, 7.5" />
                    </svg>
                    <p className="text-[16px] font-normal">4.8</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-[14px] font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. In fermentum posuere urna nec tincidu.
                  </p>
                </div>
              </div>

              <div className="px-12 py-8 shadow-[0px_0px_15px_0px_#0000001A] rounded-[20px]">
                <div className="w-full flex items-center justify-between relative">
                  <div className="flex items-center justify-start relative">
                    <div className="w-[6rem] h-[6rem] rounded-full">
                      <img
                        src="https://via.placeholder.com/300x200?text=person"
                        alt=""
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div className="ml-6">
                      <h3 className="uppercase text-[16px] font-medium font-['Quicksand']">
                        JOHN DOE
                      </h3>
                      <p className="text-[14px] font-normal">15 July, 2022</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <svg
                      height="25"
                      width="25"
                      className="cursor-pointer mr-2"
                      viewBox="0 0 25 23"
                      fill="#FFC107"
                      stroke="#FFC107"
                      strokeWidth="2"
                    >
                      <polygon points="9.9, 1.1, 12.3, 7.5, 18.8, 7.5, 13.8, 11.5, 15.7, 17.9, 9.9, 13.8, 4.2, 17.9, 6, 11.5, 1, 7.5, 7.5, 7.5" />
                    </svg>
                    <p className="text-[16px] font-normal">4.8</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-[14px] font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. In fermentum posuere urna nec tincidu.
                  </p>
                </div>
              </div>

              <div className="px-12 py-8 shadow-[0px_0px_15px_0px_#0000001A] rounded-[20px]">
                <div className="w-full flex items-center justify-between relative">
                  <div className="flex items-center justify-start relative">
                    <div className="w-[6rem] h-[6rem] rounded-full">
                      <img
                        src="https://via.placeholder.com/300x200?text=person"
                        alt=""
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div className="ml-6">
                      <h3 className="uppercase text-[16px] font-medium font-['Quicksand']">
                        JOHN DOE
                      </h3>
                      <p className="text-[14px] font-normal">15 July, 2022</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <svg
                      height="25"
                      width="25"
                      className="cursor-pointer mr-2"
                      viewBox="0 0 25 23"
                      fill="#FFC107"
                      stroke="#FFC107"
                      strokeWidth="2"
                    >
                      <polygon points="9.9, 1.1, 12.3, 7.5, 18.8, 7.5, 13.8, 11.5, 15.7, 17.9, 9.9, 13.8, 4.2, 17.9, 6, 11.5, 1, 7.5, 7.5, 7.5" />
                    </svg>
                    <p className="text-[16px] font-normal">4.8</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-[14px] font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. In fermentum posuere urna nec tincidu.
                  </p>
                </div>
              </div>

              <div className="px-12 py-8 shadow-[0px_0px_15px_0px_#0000001A] rounded-[20px]">
                <div className="w-full flex items-center justify-between relative">
                  <div className="flex items-center justify-start relative">
                    <div className="w-[6rem] h-[6rem] rounded-full">
                      <img
                        src="https://via.placeholder.com/300x200?text=person"
                        alt=""
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div className="ml-6">
                      <h3 className="uppercase text-[16px] font-medium font-['Quicksand']">
                        JOHN DOE
                      </h3>
                      <p className="text-[14px] font-normal">15 July, 2022</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <svg
                      height="25"
                      width="25"
                      className="cursor-pointer mr-2"
                      viewBox="0 0 25 23"
                      fill="#FFC107"
                      stroke="#FFC107"
                      strokeWidth="2"
                    >
                      <polygon points="9.9, 1.1, 12.3, 7.5, 18.8, 7.5, 13.8, 11.5, 15.7, 17.9, 9.9, 13.8, 4.2, 17.9, 6, 11.5, 1, 7.5, 7.5, 7.5" />
                    </svg>
                    <p className="text-[16px] font-normal">4.8</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-[14px] font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. In fermentum posuere urna nec tincidu.
                  </p>
                </div>
              </div>

              <div className="px-12 py-8 shadow-[0px_0px_15px_0px_#0000001A] rounded-[20px]">
                <div className="w-full flex items-center justify-between relative">
                  <div className="flex items-center justify-start relative">
                    <div className="w-[6rem] h-[6rem] rounded-full">
                      <img
                        src="https://via.placeholder.com/300x200?text=person"
                        alt=""
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div className="ml-6">
                      <h3 className="uppercase text-[16px] font-medium font-['Quicksand']">
                        JOHN DOE
                      </h3>
                      <p className="text-[14px] font-normal">15 July, 2022</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <svg
                      height="25"
                      width="25"
                      className="cursor-pointer mr-2"
                      viewBox="0 0 25 23"
                      fill="#FFC107"
                      stroke="#FFC107"
                      strokeWidth="2"
                    >
                      <polygon points="9.9, 1.1, 12.3, 7.5, 18.8, 7.5, 13.8, 11.5, 15.7, 17.9, 9.9, 13.8, 4.2, 17.9, 6, 11.5, 1, 7.5, 7.5, 7.5" />
                    </svg>
                    <p className="text-[16px] font-normal">4.8</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-[14px] font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. In fermentum posuere urna nec tincidu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ReviewPage;
