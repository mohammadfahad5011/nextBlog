import React from "react";
import classNames from "classnames";
import fonts from "../../../fonts";
// import "./FillButton.scss";

interface FillButtonProps {
    text?: string;
    className?: string;
}

const FillButton: React.FC<FillButtonProps> = ({ className = "FillButton", text }) => {
    const classList = classNames(className);

    return <div data-cy="FillButton" className={classList}>
        <button className={`${fonts.inter.className} bg-pwV2DarkGreen cursor-pointer w-full h-full px-6 py-[10px] inline-block text-white `}>
            {text}
        </button>
    </div>;
};

export default FillButton;