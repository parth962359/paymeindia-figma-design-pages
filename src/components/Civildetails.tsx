import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { Oneliner } from "./Oneliner";
import dailytodo from "../assets/dailytodo.svg";
import medicalplus from "../assets/medicalplus.svg";
import beaker from "../assets/beaker.svg";
import hospital from "../assets/hospital.svg";
import todos from "../assets/todos.svg";
import alarm from "../assets/alarm.svg";

import { useNavigate } from "react-router-dom";

export const Civildetails = () => {
  const navigate = useNavigate();
  return (
    <div className=" w-full bg-[#FFFFFF] min-h-screen  mx-auto">
      <div className=" w-full  flex flex-items-center  justify-start  p-4 sm:p-[20px] mx-auto">
        <div
          onClick={() => navigate("/")}
          className="w-[18.72px] h-[13.72px] flex items-center pt-3 rounded-full justify-center"
        >
          <FaArrowLeft />
        </div>
        <div className="font-bold text-xl sm:text-2xl text-center w-full">
          Details
        </div>
      </div>
      <hr className="text-gray-300" />
      <div className="w-full lg:text-2xl min-w-[0] h-auto mx-auto p-2 sm:p-5">
        <div className="flex justify-between  sm:flex-row sm:justify-between pb-3 gap-2 sm:gap-0">
          <Oneliner
            variant={"md"}
            starticon={dailytodo}
            text={"DailyCare 300"}
          />
          <div className="text-right sm:text-left">
            <span className="font-bold text-[#152745] text-xl"> ₹59 </span>
            <span className="line-through text-gray-400 text-xs font-mono">
              {" "}
              99{" "}
            </span>
            /<span className="font-medium text-xs sm:text-sm">monthly</span>
          </div>
        </div>
        <div className="font-bold pb-3">Benefits</div>
        <div>
          <div className="p-2 sm:p-3 font-semibold">
            <Oneliner
              variant={"sm"}
              starticon={medicalplus}
              text={"₹9,000 Sum Insured"}
            />
          </div>
          <div className="p-2 sm:p-3 font-semibold">
            <Oneliner
              variant={"sm"}
              starticon={hospital}
              text={"₹300/day for 30 days (Normal & ICU)"}
            />
          </div>
          <div className="p-2 sm:p-3 font-semibold">
            <Oneliner
              variant={"sm"}
              starticon={beaker}
              text={
                "40% off Lab Tests | 15% off Medicines | 30% off on Essential Health Devices"
              }
            />
          </div>
          <div className="p-2 sm:p-3 font-semibold">
            <Oneliner
              variant={"sm"}
              starticon={alarm}
              text={"Only 30 days Waiting Period"}
            />
          </div>
          <div className="p-2 sm:p-3 font-semibold">
            <Oneliner
              variant={"sm"}
              starticon={todos}
              text={"Free Health Checkup (Blood, Liver, Diabetes, Kidney)"}
            />
          </div>
        </div>
        <div className="font-bold pb-3">Personal Details</div>
        <div className="flex flex-col p-1 sm:p-2 gap-2">
          <input
            type="text"
            placeholder="Full Name"
            className="mb-2 w-full h-[48px] border border-gray-300 rounded-md pl-4"
          />
          <input
            type="text"
            placeholder="Mobile number"
            className="mb-2 w-full h-[48px] border border-gray-300 rounded-md pl-4"
          />
          <input
            type="text"
            placeholder="Email ID"
            className="mb-2 w-full h-[48px] border border-gray-300 rounded-md pl-4"
          />
          <div className="relative mb-2 w-full h-[48px]">
            <input
              type="text"
              placeholder="DOB"
              className="w-full h-full border border-gray-300 rounded-md pl-4 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <span className="absolute right-4 top-3 text-gray-400 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3.75 7.5h16.5M4.5 21h15a.75.75 0 00.75-.75V7.5a.75.75 0 00-.75-.75h-15a.75.75 0 00-.75.75v12.75c0 .414.336.75.75.75z"
                />
              </svg>
            </span>
          </div>
          <select
            id="Gender"
            name="Gender"
            className="mb-2 w-full h-[48px] border text-gray-400 border-gray-300 rounded-md pl-4"
          >
            <option value="" disabled hidden>
              Gender
            </option>
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="others">others</option>
          </select>
          <select
            id="Occupation"
            name="Occupation"
            className="mb-2 w-full h-[48px] border text-gray-400 border-gray-300 rounded-md pl-4"
          >
            <option value="Occupation">Occupation</option>
          </select>
          <input
            type="text"
            placeholder="Pin code"
            className="mb-2 w-full h-[48px] border border-gray-300 rounded-md pl-4"
          />
          <div className="flex items-center flex-wrap">
            <input
              type="checkbox"
              
              className="accent-green-600"
            />
            <label className="pl-1 pr-1">
              {" "}
              I confirm that I am in good health.
            </label>{" "}
            <span className="text-orange-600 underline">Declaration</span>
          </div>
        </div>
        <div className="flex flex-row sm:flex-row justify-between items-center gap-2 mt-4">
          <div>
            <div>
              <span className="font-bold text-[#152745] text-base sm:text-lg">
                {" "}
                ₹59{" "}
              </span>
              /<span className="font-medium text-xs sm:text-sm">monthly</span>
              <span className="text-gray-400 text-xs"> (incl. of GST)</span>
            </div>
            <div className="text-orange-600 underline">Price Breakdown</div>
          </div>
          <button className="flex items-center justify-center w-[50%] sm:w-[205px] h-[44px] sm:h-[50px] bg-[#ff7e1f] hover:bg-orange-600 text-white font-semibold py-2 sm:py-3 rounded-md transition-all text-base mt-2 sm:mt-0">
            Pay
            <span className="ml-2">
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
