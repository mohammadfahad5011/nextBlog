import React from "react";
import fonts from "../../../fonts";
// import "./CtaBtn.scss";

interface CtaButtonProps {
  text?: string;
  fontWeight?:string;
}


const CtaBtn: React.FC<CtaButtonProps> = ({text,fontWeight="normal"}) => {

  return <div data-cy="CtaBtn">
      <button className={`${fonts.inter.className} border border-pwV2DarkGreen text-pwV2DarkGreen hover:text-white hover:bg-pwV2DarkGreen py-[10px] px-[22px] uppercase  font-${fontWeight} transition-all duration-300 ease-in-out`}>
          {text}
      </button>
  </div>;
};

export default CtaBtn;



