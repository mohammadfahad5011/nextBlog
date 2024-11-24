import React from "react";
import classNames from "classnames";
import fonts from "../../../fonts";
// import "./Button.scss";


interface ButtonProps {
    text?: string;
    borderColor?: string;
    textColor?: string;
    hoverBgColor?: string;
    hoverBorderColor?:string
    hoverTextColor?: string;
    onClick?: () => void;
    padding?: string;
    fontWeight?:string;
    className?: string
}

// Default 
const Button: React.FC<ButtonProps> = ({ className = "Button", text = "LEARN MORE", borderColor = "#014751",  textColor = "#014751",hoverBgColor = "hover:bg-teal-900", hoverTextColor = "hover:text-white",hoverBorderColor, onClick, padding = "px-4 py-2",fontWeight}) => {
    const classList = classNames(className);

    return <div data-cy="Button" className={classList}>
        <button
            className={`${fonts.inter.className} ${className} ${borderColor} ${textColor} ${padding} ${hoverBgColor} ${hoverTextColor} ${hoverBorderColor} border font-${fontWeight} transition-colors duration-300 ease-in-out `}
            onClick={onClick}
        >
            {text}
        </button>
    </div>;
};

export default Button;



