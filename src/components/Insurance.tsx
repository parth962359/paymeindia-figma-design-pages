import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import Family from "../assets/family.svg";
import dailytodo from "../assets/dailytodo.svg";
import tick from "../assets/图层_x0020_1.svg";
import scooty from "../assets/scooty.svg";
import greenplus from "../assets/greenplus.svg";
import blueplus from "../assets/blueplus.svg";
import yellowcar from "../assets/yellowcar.svg";
import { Containers } from "./Containers";
import { useNavigate } from "react-router-dom";
import { Slidercontainer } from "./Slidercontainer";
// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

export const Insurance = () => {
  const sliderdata = [
    {
      image: `${scooty}`,
      text1s: "Bike Insurance",
      text2s: "From ₹1.5/Day",
      buttontexts: "Buy Now",
      color1: "red" as "red"
    },
    {
      image: `${greenplus}`,
      text1s: "Life Insurance",
      text2s: "From ₹1.5/Day",
      buttontexts: "Buy Now",
      color1: "green" as "green"
    },
    {
      image: `${yellowcar}`,
      text1s: "Car Insurance",
      text2s: "From ₹1.5/Day",
      buttontexts: "Buy Now",
      color1: "yellow" as "yellow"
    },
    {
      image: `${blueplus}`,
      text1s: "Health Insurance",
      text2s: "From ₹1.5/Day",
      buttontexts: "Buy Now",
      color1: "blue" as "blue"
    },
  ];

  const navigate = useNavigate();
  return (
    <div className="min-w-[320px] max-w-[768px] w-full bg-[#FFFFFF] h-[900px] sm:h-[983px]  sm:max-w-[768px] sm:min-w-[320px] mx-auto">
      <div className="min-w-[320px] max-w-[428px] w-full h-[143px] flex flex-items-center pt-28 justify-start gap-[20px] p-[16px] sm:gap-[49px] sm:p-[20px]">
        <div className="w-[18.72px] h-[13.72px] flex items-center pt-3 rounded-full justify-center">
          <FaArrowLeft />
        </div>
        <div className="font-bold w-[104px] h-[31px]">Insurance</div>
      </div>
      <hr className="text-gray-300" />

      <div className="w-full h-full flex flex-col">
        <img src={Family} alt="" className="w-full max-w-[320px] sm:max-w-[428px] mx-auto" />
        <div className="flex flex-col justify-center items-center m-4 gap-3 sm:space-x-2">
          <Containers
            firsticon={dailytodo}
            heading1={"DailyCare 300"}
            amount={"59"}
            firsticon1={tick}
            firsticon2={tick}
            firsticon3={tick}
            text1={"Up to ₹9,000 annual coverage per person"}
            text2={"1 month free Online Eye & Dental consultancy"}
            text3={"1 free Online Blood Test"}
            buttonicon={<FaArrowRight />}
            buttontext={"Add Details"}
            design={"primary"}
            designstyle={"md"}
            designstyle2={"sm"}
            onclick={() => navigate("/Insurancepolicy")}
          />

          <Containers
            firsticon={dailytodo}
            heading1={"DailyCare 300"}
            amount={"59"}
            firsticon1={tick}
            firsticon2={tick}
            firsticon3={tick}
            text1={"Up to ₹9,000 annual coverage per person"}
            text2={"1 month free Online Eye & Dental consultancy"}
            text3={"1 free Online Blood Test"}
            buttonicon={<FaArrowRight />}
            buttontext={"Add Details"}
            design={"secondary"}
            designstyle={"md"}
            designstyle2={"sm"}
            onclick={() => navigate("/Insurancepolicy")}
          />
        </div>

        {sliderdata.length > 0 && (
          <div className="w-full flex justify-center mt-[24px] px-2 sm:mx-[10px] ">
            <Swiper
              modules={[Pagination, Autoplay]}
              slidesPerView={1}
              spaceBetween={20}
              pagination={{ clickable: true }}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              className="w-full pb-[32px]"
            >
              {sliderdata.map((items, key) => (
                <SwiperSlide key={key}>
                  <Slidercontainer
                    index={key}
                    yourImage={items.image}
                    text1={items.text1s}
                    text2={items.text2s}
                    buttontext={items.buttontexts}
                    color1={items.color1}
                   
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </div>
  );
};
