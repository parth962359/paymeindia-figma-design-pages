interface Slidercontainer{
    yourImage:string;
    text1:string;
    text2:string;
    buttontext:string;
    index:Number
    color1:"red"|"green"|"blue"|"yellow"
}
const color1style={
    red:"bg-gradient-to-r from-[#FFECE9] to-[#FFFFFF]",
    blue:"bg-[#E0F5FF]",
    green:"bg-[#E8FFE0]",
    yellow:"bg-[#FFFEE0]"
}

export const Slidercontainer = ({yourImage,text1,text2,buttontext,color1}:Slidercontainer) => {
  return (
    <div className={`flex items-center justify-between w-full max-w-[428px] min-w-[0] h-[90px] sm:w-[370px] sm:min-w-[320px] ${color1style[color1]} rounded-lg p-2 sm:p-3 shadow-sm mx-auto`}> 
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Image placeholder */}
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-md flex items-center justify-center border border-gray-200">
          <img src={yourImage} alt="icon" className="w-8 h-8 sm:w-10 sm:h-10" />
        </div>
        <div>
          <div className="font-bold text-[#152745] text-sm sm:text-base leading-tight">{text1}</div>
          <div className="text-xs sm:text-sm text-gray-600">{text2}</div>
        </div>
      </div>
      <button className="bg-transparent text-orange-600 border-orange-600 border font-semibold px-3 py-2 sm:px-5 rounded-md shadow hover:bg-orange-600 hover:text-white transition text-xs sm:text-base">{buttontext}</button>
    </div>
  )
}
