import React from "react";
import classNames from "classnames";
import fonts from "../../../fonts";
// import "./SholderTitle.scss";

interface SholderTitleProps {
    sholder: string;
    title: string;
    className?: string;
}


const SholderTitle: React.FC<SholderTitleProps> = ({ className = "SholderTitle", sholder, title }) => {
    const classList = classNames(className, 'bg-white');

    return <div data-cy="SholderTitle" className={classList}>
        <div className="flex flex-row md:flex-col items-start gap-[6px] md:gap-0">
            <p className={`${fonts.productSansRegular.className} text-pwV2Font28 md:text-pwV2Font32 font-normal text-pwV2DarkGreen`}>
                {sholder}
            </p>
            <h2 className={`${fonts.productSansRegular.className} text-pwV2Font28 md:text-pwV2Font40 font-normal text-pwV2DarkGreen`}>
                {title}
            </h2>
        </div>
    </div>
};

export default SholderTitle;


