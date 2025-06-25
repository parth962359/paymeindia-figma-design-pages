import { Oneliner } from "./Oneliner";
import React from "react";
import { Button } from "./Button";

interface ContainersProps {
  firsticon: string;
  heading1: string;
  amount: string;
  firsticon1: string;
  firsticon2: string;
  firsticon3: string;
  buttonicon: React.ReactElement;
  text1: string;
  text2: string;
  text3: string;
  buttontext: string;
  design: "primary" | "secondary";
  designstyle:"md";
  designstyle2:"sm";
  onclick?:()=>void;
}
export const Containers = ({
  firsticon,
  heading1,
  amount,
  firsticon1,
  firsticon2,
  firsticon3,
  text1,
  text2,
  text3,
  buttonicon,
  buttontext,
  design,
  designstyle,
  designstyle2,
  onclick
}: ContainersProps) => {
  return (
    <div className="w-full m-3   border border-gray-300 rounded-lg p-2 sm:p-4 bg-white gap-2 sm:gap-4 mx-auto">
      <div className="flex  flex-row justify-between pb-2 pb-4 gap-2 sm:gap-0">
        <Oneliner variant={designstyle} starticon={firsticon} text={heading1}  />
        <div className="text-right sm:text-left">
          <span className="font-bold text-[#152745] text-base sm:text-lg"> ₹{amount} </span>{" "}
          <span className="line-through text-gray-400 text-xs font-mono">
            {" "}
            99
          </span>{" "}
          /<span className=" font-medium text-xs sm:text-sm">monthly</span>
        </div>
      </div>
      <Oneliner variant={designstyle2} starticon={firsticon1} text={text1} />
      <Oneliner variant={designstyle2} starticon={firsticon2} text={text2} />
      <Oneliner variant={designstyle2} starticon={firsticon3} text={text3} />

      <div className="pt-2 sm:mr-2">
        {" "}
        <Button onclick={onclick} variant={design} text={buttontext} endicon={buttonicon} />
      </div>
    </div>
  );
};
