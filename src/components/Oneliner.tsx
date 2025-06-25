

interface OnelinerProps {
starticon:string;
variant: "sm"|"md";
text:string;

}
const textstyles={
sm: "text-[#152745] text-md",
md: "text-[#152745] font-bold ",

}

export const Oneliner = ({variant, starticon, text}:OnelinerProps) => {
  return (
    <div>
        <div className="flex items-center w-auto gap-2">
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200">
            <img src={starticon} alt="" />
            </div>
            <span className={textstyles[variant]}>{text}</span>
        </div>
    </div>
  )
}
