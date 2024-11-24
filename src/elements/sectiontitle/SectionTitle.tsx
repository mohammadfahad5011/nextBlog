import React from "react";
import classNames from "classnames";
import fonts from "../../../fonts";
// import "./SectionTitle.scss";

interface SectionTitleProps {
  text: string;
  textColor: string;
  className?:string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({className = "SectionTitle", text, textColor}) => {
  const classList = classNames(className);

  return <div data-cy="SectionTitle" className={classList}>
    <h2 className={`${fonts.productSansBold.className} font-bold ${textColor} text-center text-pwV2Font48`}>
      {text}
    </h2>
  </div>;
};

export default SectionTitle;



