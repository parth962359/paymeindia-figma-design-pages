import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { useState,useEffect } from "react";
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

const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <div className="min-w-[320px]  w-full bg-[#FFFFFF]    sm:min-w-[320px] mx-auto">
      <div className="min-w-[320px]  w-full h-auto  flex flex-items-center  justify-start gap-[10px] p-[10px] sm:gap-[9px] sm:p-[10px]">
        <div className="h-[31px]  flex items-center   rounded-full justify-center">
          <FaArrowLeft />
        </div>
        <div className="font-bold  w-full h-[31px] text-center text-xl flex justify-center items-center ">Insurance</div>
      </div>
      <hr className="text-gray-300" />

      <div className="w-full h-full flex flex-col">
        <img src={Family} alt="" className="w-full   mx-auto" />
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
              slidesPerView={windowDimensions.width >= 700 ? 2 : 1}
              spaceBetween={30}
              pagination={{ clickable: true  }}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              className="w-full pb-[32px]"
              style={{paddingBottom:"34px"}}
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
